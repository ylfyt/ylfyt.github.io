import { ENV_CDN_PORTFOLIO_BASE_URL } from '@/utils/constants';
import type { PageLoad } from './$types';
import type { Project } from '@/types/project';

export const load: PageLoad = async ({}) => {
    const resp = await fetch(`${ENV_CDN_PORTFOLIO_BASE_URL}/projects.json`);
    const projects: Project[] = await resp.json();
    return {
        favoriteProjects: projects.slice(0, 2)
    };
};