// src/hooks/useProjects.js
//
// Ghép phần cấu trúc của dự án (ảnh, link, ngày, công nghệ, danh mục - nằm ở
// src/data/projectsData.js) với phần chữ đã dịch (nằm trong từ điển i18n).
//
// Component nên dùng useProjects() / useProject(id) thay cho projectsData và
// getProjectById, để nội dung tự đổi theo ngôn ngữ đang xem.
import {useMemo} from 'react';
import {projectsData, getProjectById} from '../data/projectsData';
import {useI18n} from '../i18n';

/** Ghép một dự án với bản dịch tương ứng. */
const localizeProject = (project, {t, tm}) => {
    if (!project) return project;

    const base = `projects.items.${project.id}`;
    const metricLabels = tm(`${base}.metrics`);

    return {
        ...project,
        name: t(`${base}.name`),
        summary: t(`${base}.summary`),
        description: t(`${base}.description`),
        details: tm(`${base}.details`),
        metrics: (Array.isArray(project.metrics) ? project.metrics : []).map((metric, index) => ({
            ...metric,
            label: metricLabels[index] || metric.label
        })),
        cta: project.cta ? {...project.cta, label: t('projects.viewDetail')} : project.cta
    };
};

/**
 * Toàn bộ dự án, đã dịch theo ngôn ngữ đang xem.
 * t và tm đã được useCallback theo locale nên chỉ cần chúng trong deps.
 */
export const useProjects = () => {
    const {t, tm} = useI18n();
    return useMemo(() => projectsData.map((project) => localizeProject(project, {t, tm})), [t, tm]);
};

/** Một dự án theo id, đã dịch. Trả về undefined nếu không có. */
export const useProject = (projectId) => {
    const {t, tm} = useI18n();
    return useMemo(() => localizeProject(getProjectById(projectId), {t, tm}), [projectId, t, tm]);
};
