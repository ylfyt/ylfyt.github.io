import type { Project } from '@/types/project';
import { writable } from 'svelte/store';

export const projects = writable<Project[]>([]);