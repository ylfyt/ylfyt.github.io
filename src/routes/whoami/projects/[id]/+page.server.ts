import { ENV_CDN_PORTFOLIO_BASE_URL } from '@/utils/constants';
import type { EntryGenerator } from './$types';
import type { Project } from '@/types/project';

export const entries: EntryGenerator = async () => {
    const resp = await fetch(`${ENV_CDN_PORTFOLIO_BASE_URL}/projects.json`);
    const projects: Project[] = await resp.json();
    return projects.map((_, idx) => ({ id: idx.toString() }));
};