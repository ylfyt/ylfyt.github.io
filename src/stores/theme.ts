import { useLocalStorage } from '@/hooks/use-local-storage';

export const isDark = useLocalStorage('dark', true);
