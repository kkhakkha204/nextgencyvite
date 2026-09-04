import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_ITEMS = Array.from({ length: 15 }, (_, index) => {
    const ids = [1015, 1025, 1039, 1043, 1044, 1050, 1062, 1069, 1074, 1080, 1084, 106, 110, 133, 164];
    return {
        image: `https://picsum.photos/id/${ids[index % ids.length]}/600/400`,
        title: `Tile ${index + 1}`
    };
});

const cx = (...parts) => parts.filter(Boolean).join(' ');

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const columnFactor = (index, variance) => {
    const pseudo = ((index * 0.6180339887 + 0.35) % 1) * 2 - 1;
    return 1 + variance * pseudo;
};

const greatestCommonDivisor = (a, b) => (b === 0 ? a : greatestCommonDivisor(b, a % b));

/**
 * Buoc nhay dung de rai anh vao cac cot.
 *
 * Chon so nguyen to cung nhau voi tong so anh va >= so cot, nho vay:
 * - moi cot di het danh sach truoc khi lap lai mot anh,
 * - hai o lien ke (cung hang hoac cung cot) khong bao gio trung anh.
 */
const pickStride = (total, columns) => {
    if (total <= 1) return 1;
    const start = Math.max(1, columns);
    for (let stride = start; stride < start + total; stride += 1) {
        if (greatestCommonDivisor(stride, total) === 1) return stride;
    }
    return 1;
};

const DriftWall = ({
    items = DEFAULT_ITEMS,
    columns = 5,
    tileWidth = 200,
    tileHeight = 132,
    gap = 18,
    radius = 14,
    tilt = 16,
    turn = -14,
    roll = 0,
    perspective = 1200,
    depth = 120,
    scale = 1.18,
    speed = 42,
    direction = 'up',
    variance = 0.45,
    parallax = 0.6,
    pauseOnHover = false,
    paused = false,
    lift = 64,
    fade = 0.6,
    dim = 0.55,
    grayscale = false,
    overlayColor = '#060010',
    overlayOpacity = 0.42,
    onItemClick,
    ariaLabel = 'Drifting wall of tiles',
    className = '',
    style
}) => {
    const containerRef = useRef(null);
    const planeRef = useRef(null);
    const trackRefs = useRef([]);
    const rafRef = useRef(null);

    const offsetsRef = useRef([]);
    const velocitiesRef = useRef([]);
    const hoveredColRef = useRef(-1);
    const wallHoveredRef = useRef(false);
    const pointerRef = useRef({ x: 0, y: 0 });
    const pointerDampedRef = useRef({ x: 0, y: 0 });
    const lastTsRef = useRef(null);

    const [containerHeight, setContainerHeight] = useState(600);
    const [activeId, setActiveId] = useState(null);
    const activeIdRef = useRef(null);
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        setReduced(prefersReducedMotion());
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const onChange = (event) => setReduced(event.matches);
        mediaQuery.addEventListener('change', onChange);
        return () => mediaQuery.removeEventListener('change', onChange);
    }, []);

    // Moi cot phai co cung so o: cot lech nhau se tao ra khoang trong lon vi
    // mat phang 3D duoc can giua theo cot cao nhat.
    const columnItems = useMemo(() => {
        const safeColumnCount = Math.max(1, columns);
        if (!items.length) return Array.from({ length: safeColumnCount }, () => []);

        const unit = tileHeight + gap;
        const stride = pickStride(items.length, safeColumnCount);
        // Du o de phu kin khung nhin, va neu con cho thi trai het danh sach anh
        // ra cac cot truoc khi lap lai.
        const viewportRows = Math.ceil(containerHeight / unit) + 1;
        const maxRows = Math.max(viewportRows, Math.ceil((containerHeight * 1.6) / unit));
        const rows = Math.max(
            2,
            viewportRows,
            Math.min(Math.ceil(items.length / safeColumnCount), maxRows)
        );

        return Array.from({ length: safeColumnCount }, (_, columnIndex) =>
            Array.from(
                { length: rows },
                (_, rowIndex) => items[(columnIndex + rowIndex * stride) % items.length]
            )
        );
    }, [items, columns, tileHeight, gap, containerHeight]);

    // Track duoc neo o dinh con mat phang lai can giua theo chinh chieu cao cua
    // no, nen phai du mot ban sao o tren va mot ban sao o duoi khung nhin.
    const columnMeta = useMemo(() => {
        const unit = tileHeight + gap;
        return columnItems.map((column) => {
            const copyHeight = Math.max(unit, column.length * unit);
            const copies = Math.max(3, Math.ceil((containerHeight * 1.6) / copyHeight) + 2);
            return { copyHeight, copies };
        });
    }, [columnItems, tileHeight, gap, containerHeight]);

    useLayoutEffect(() => {
        if (!containerRef.current) return undefined;
        const resizeObserver = new ResizeObserver(([entry]) => {
            setContainerHeight(entry.contentRect.height || 600);
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    const baseVelocities = useMemo(() => {
        const directionSign = direction === 'up' ? 1 : -1;
        return columnItems.map((_, columnIndex) => {
            const alternateSign = columnIndex % 2 === 0 ? 1 : -1;
            return speed * columnFactor(columnIndex, variance) * directionSign * alternateSign;
        });
    }, [columnItems, speed, direction, variance]);

    useEffect(() => {
        offsetsRef.current = columnMeta.map((meta, columnIndex) => meta.copyHeight * ((columnIndex * 0.37) % 1));
        velocitiesRef.current = columnItems.map(() => 0);
    }, [columnMeta, columnItems]);

    const applyPlaneTransform = useCallback((pointerX, pointerY) => {
        const plane = planeRef.current;
        if (!plane) return;
        plane.style.transform =
            `translate(-50%, -50%) scale(${scale}) ` +
            `rotateX(${tilt + pointerY}deg) rotateY(${turn + pointerX}deg) rotateZ(${roll}deg) ` +
            `translateZ(${-depth}px)`;
    }, [tilt, turn, roll, depth, scale]);

    useEffect(() => {
        if (paused) return undefined;

        const animate = (timestamp) => {
            if (lastTsRef.current === null) lastTsRef.current = timestamp;
            const deltaTime = Math.min(0.05, Math.max(0, timestamp - lastTsRef.current) / 1000);
            lastTsRef.current = timestamp;

            const maxTilt = parallax * 8;
            const targetX = pointerRef.current.x * maxTilt;
            const targetY = -pointerRef.current.y * maxTilt;
            const damp = 1 - Math.exp(-deltaTime / 0.12);
            pointerDampedRef.current.x += (targetX - pointerDampedRef.current.x) * damp;
            pointerDampedRef.current.y += (targetY - pointerDampedRef.current.y) * damp;
            applyPlaneTransform(pointerDampedRef.current.x, pointerDampedRef.current.y);

            for (let columnIndex = 0; columnIndex < trackRefs.current.length; columnIndex += 1) {
                const element = trackRefs.current[columnIndex];
                const meta = columnMeta[columnIndex];
                if (!element || !meta) continue;

                if (reduced) {
                    element.style.transform = `translate3d(0, ${-(offsetsRef.current[columnIndex] ?? 0)}px, 0)`;
                    continue;
                }

                const hoverPaused = wallHoveredRef.current && pauseOnHover;
                const factor = hoverPaused || hoveredColRef.current === columnIndex ? 0 : 1;
                const target = baseVelocities[columnIndex] * factor;
                const ease = 1 - Math.exp(-deltaTime / (target === 0 ? 0.16 : 0.28));
                velocitiesRef.current[columnIndex] += (target - velocitiesRef.current[columnIndex]) * ease;

                let next = (offsetsRef.current[columnIndex] ?? 0) + velocitiesRef.current[columnIndex] * deltaTime;
                next = ((next % meta.copyHeight) + meta.copyHeight) % meta.copyHeight;
                offsetsRef.current[columnIndex] = next;
                element.style.transform = `translate3d(0, ${-next}px, 0)`;
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
            lastTsRef.current = null;
        };
    }, [baseVelocities, columnMeta, pauseOnHover, paused, parallax, reduced, applyPlaneTransform]);

    const activate = useCallback((id, columnIndex) => {
        activeIdRef.current = id;
        hoveredColRef.current = columnIndex;
        setActiveId(id);
    }, []);

    const release = useCallback(() => {
        activeIdRef.current = null;
        hoveredColRef.current = -1;
        setActiveId(null);
    }, []);

    const handlePointerMove = useCallback((event) => {
        if (paused) return;
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;

        if (parallax > 0 && !reduced) {
            pointerRef.current = {
                x: (event.clientX - rect.left) / rect.width - 0.5,
                y: (event.clientY - rect.top) / rect.height - 0.5
            };
        }

        const hit = document.elementFromPoint(event.clientX, event.clientY);
        const tile = hit?.closest?.('[data-tile-id]');
        if (!tile) return;

        const id = tile.dataset.tileId ?? null;
        if (id === activeIdRef.current) return;
        activeIdRef.current = id;
        hoveredColRef.current = Number(tile.dataset.col);
        setActiveId(id);
    }, [parallax, reduced, paused]);

    const handlePointerLeaveWall = useCallback(() => {
        wallHoveredRef.current = false;
        pointerRef.current = { x: 0, y: 0 };
        release();
    }, [release]);

    const maskStyle = fade <= 0
        ? 'none'
        : 'radial-gradient(ellipse 78% 82% at 50% 46%, #000 var(--dw-edge), transparent 100%), ' +
          'linear-gradient(to top, #000 var(--dw-edge), transparent 100%)';

    const cssVars = useMemo(() => ({
        '--dw-tile-w': `${tileWidth}px`,
        '--dw-tile-h': `${tileHeight}px`,
        '--dw-gap': `${gap}px`,
        '--dw-radius': `${radius}px`,
        '--dw-lift': `${lift}px`,
        '--dw-dim': dim,
        '--dw-gray': grayscale ? 1 : 0,
        '--dw-overlay': overlayColor,
        '--dw-overlay-opacity': overlayOpacity,
        '--dw-edge': `${Math.max(0, (1 - fade) * 100)}%`,
        perspective: `${perspective}px`,
        perspectiveOrigin: '50% 50%',
        WebkitMaskImage: maskStyle,
        maskImage: maskStyle,
        WebkitMaskComposite: 'source-in',
        maskComposite: 'intersect',
        ...style
    }), [tileWidth, tileHeight, gap, radius, lift, dim, grayscale, overlayColor, overlayOpacity, fade, perspective, maskStyle, style]);

    const tileClass = cx(
        'group/tile relative block w-full flex-none cursor-pointer border-0 bg-transparent p-0 text-left outline-none',
        'h-[calc(var(--dw-tile-h)+var(--dw-gap))] [transform-style:preserve-3d]'
    );
    const innerClass = cx(
        'pointer-events-none absolute inset-[calc(var(--dw-gap)/2)] block overflow-hidden bg-[#0b0b12]',
        'rounded-[var(--dw-radius)] opacity-[var(--dw-dim)] [transform:translateZ(0)]',
        'transition-[transform,opacity,box-shadow] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        'group-[.is-active]/tile:opacity-100 group-[.is-active]/tile:[transform:translateZ(var(--dw-lift))]',
        'group-[.is-active]/tile:shadow-[0_24px_60px_-18px_rgba(0,0,0,0.7)]',
        'group-focus-visible/tile:opacity-100 group-focus-visible/tile:[transform:translateZ(var(--dw-lift))]',
        'group-focus-visible/tile:shadow-[0_24px_60px_-18px_rgba(0,0,0,0.7),0_0_0_2px_rgba(255,255,255,0.9)]'
    );
    const imgClass = cx(
        'block h-full w-full select-none object-cover',
        '[filter:grayscale(var(--dw-gray))_saturate(1)]',
        'transition-[filter] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        'group-[.is-active]/tile:[filter:grayscale(0)_saturate(1.05)] group-focus-visible/tile:[filter:grayscale(0)_saturate(1.05)]'
    );
    const overlayClass = cx(
        'pointer-events-none absolute inset-0 bg-[var(--dw-overlay)] opacity-[var(--dw-overlay-opacity)]',
        'transition-opacity duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        'group-[.is-active]/tile:opacity-0 group-focus-visible/tile:opacity-0'
    );

    const renderTile = (item, id, columnIndex) => {
        const inner = (
            <span className={innerClass}>
                <img
                    src={item.image}
                    alt={item.title ?? ''}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className={imgClass}
                />
                <span className={overlayClass} aria-hidden="true" />
            </span>
        );
        const commonProps = {
            className: cx(tileClass, activeId === id && 'is-active'),
            'data-tile-id': id,
            'data-col': columnIndex,
            onFocus: () => activate(id, columnIndex),
            onBlur: release
        };

        if (onItemClick) {
            return (
                <button
                    key={id}
                    type="button"
                    aria-label={item.title ?? 'tile'}
                    onClick={(event) => onItemClick(item, event)}
                    {...commonProps}
                >
                    {inner}
                </button>
            );
        }

        if (item.href) {
            return (
                <a key={id} href={item.href} target="_blank" rel="noreferrer noopener" {...commonProps}>
                    {inner}
                </a>
            );
        }

        return (
            <div key={id} tabIndex={0} role="button" aria-label={item.title ?? 'tile'} {...commonProps}>
                {inner}
            </div>
        );
    };

    return (
        <div
            ref={containerRef}
            className={cx('relative h-full w-full overflow-hidden', className)}
            style={cssVars}
            onPointerMove={handlePointerMove}
            onPointerEnter={() => {
                wallHoveredRef.current = true;
            }}
            onPointerLeave={handlePointerLeaveWall}
            role="group"
            aria-label={ariaLabel}
        >
            <div
                ref={planeRef}
                className="absolute left-1/2 top-1/2 flex cursor-pointer flex-row [transform-style:preserve-3d] [transform-origin:50%_50%] will-change-transform"
            >
                {columnItems.map((column, columnIndex) => {
                    const meta = columnMeta[columnIndex];
                    if (!meta || !column.length) return null;
                    const copies = Array.from({ length: meta.copies });
                    return (
                        <div
                            className="relative w-[calc(var(--dw-tile-w)+var(--dw-gap))] [transform-style:preserve-3d]"
                            key={`col-${columnIndex}`}
                        >
                            <div
                                className="flex flex-col [transform-style:preserve-3d] will-change-transform"
                                ref={(element) => {
                                    trackRefs.current[columnIndex] = element;
                                }}
                            >
                                {copies.map((_, copyIndex) =>
                                    column.map((item, itemIndex) =>
                                        renderTile(item, `${columnIndex}-${copyIndex}-${itemIndex}`, columnIndex)
                                    )
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DriftWall;
