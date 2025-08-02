// src/components/PortableText/PortableTextComponents.jsx
import React from 'react';
import { urlFor } from '../../sanity';
import YouTubeEmbed from '../Blog/YouTubeEmbed';
import CallToAction from '../Blog/CallToAction';

// Portable Text Components
export const portableTextComponents = {
    types: {
        image: ({ value }) => (
            <figure className="my-8">
                <img
                    src={urlFor(value).width(800).height(450).fit('crop').url()}
                    alt={value.alt || ''}
                    className="w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                />
                {value.caption && (
                    <figcaption className="text-sm text-gray-600 text-center mt-3 italic">
                        {value.caption}
                    </figcaption>
                )}
            </figure>
        ),

        code: ({ value }) => (
            <div className="my-8 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                {value.filename && (
                    <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm border-b border-gray-700">
                        {value.filename}
                    </div>
                )}
                <pre className="p-4 overflow-x-auto">
          <code className="text-green-400 text-sm font-mono">
            {value.code}
          </code>
        </pre>
            </div>
        ),

        youtube: ({ value }) => <YouTubeEmbed value={value} />,
        callToAction: ({ value }) => <CallToAction value={value} />,
    },

    marks: {
        link: ({ children, value }) => (
            <a
                href={value.href}
                target={value.blank ? '_blank' : '_self'}
                rel={value.blank ? 'noopener noreferrer' : undefined}
                className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors duration-200"
            >
                {children}
            </a>
        ),

        internalLink: ({ children, value }) => (
            <a
                href={`/blog/${value.reference.slug.current}`}
                className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors duration-200"
            >
                {children}
            </a>
        ),

        strong: ({ children }) => (
            <strong className="font-bold text-gray-900">{children}</strong>
        ),

        em: ({ children }) => (
            <em className="italic text-gray-800">{children}</em>
        ),

        code: ({ children }) => (
            <code className="bg-gray-100 text-pink-600 px-2 py-1 rounded text-sm font-mono">
                {children}
            </code>
        ),

        underline: ({ children }) => (
            <span className="underline underline-offset-2">{children}</span>
        ),

        'strike-through': ({ children }) => (
            <span className="line-through">{children}</span>
        ),
    },

    block: {
        normal: ({ children }) => <p className="mb-4 leading-relaxed text-gray-700">{children}</p>,

        h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 mt-8 text-gray-900 leading-tight">
                {children}
            </h1>
        ),

        h2: ({ children }) => (
            <h2 className="text-3xl font-bold mb-5 mt-7 text-gray-900 leading-tight">
                {children}
            </h2>
        ),

        h3: ({ children }) => (
            <h3 className="text-2xl font-bold mb-4 mt-6 text-gray-900 leading-tight">
                {children}
            </h3>
        ),

        h4: ({ children }) => (
            <h4 className="text-xl font-bold mb-3 mt-5 text-gray-900 leading-tight">
                {children}
            </h4>
        ),

        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-6 bg-blue-50 italic text-lg text-gray-700">
                {children}
            </blockquote>
        ),
    },

    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4">
                {children}
            </ul>
        ),

        number: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4">
                {children}
            </ol>
        ),
    },

    listItem: {
        bullet: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
        ),

        number: ({ children }) => (
            <li className="leading-relaxed">{children}</li>
        ),
    },
};