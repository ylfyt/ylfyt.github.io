import { browser } from '$app/environment';
import { writable, type Updater, get, type Writable } from 'svelte/store';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)): Writable<T> {
    let tempInitValue: T;
    if (typeof initialValue === 'function') {
        tempInitValue = (initialValue as () => T)();
    } else {
        tempInitValue = initialValue;
    }

    const store = writable<T>(tempInitValue);
    const { subscribe } = store;

    const localStorageStore: Writable<T> = {
        subscribe,
        set: (v: T) => {
            store.set(v);
            localStorage.setItem(key, JSON.stringify(v));
        },
        update: (updater: Updater<T>) => {
            const v = updater(get(store));
            store.set(v);
            localStorage.setItem(key, JSON.stringify(v));
        }
    };

    if (!browser) {
        return localStorageStore;
    }

    const raw = localStorage.getItem(key);
    if (raw == null) {
        localStorage.setItem(key, typeof tempInitValue === 'string' ? tempInitValue : JSON.stringify(tempInitValue));
        return localStorageStore;
    }

    try {
        store.set(typeof initialValue === 'string' ? (raw as T) : JSON.parse(raw));
    } catch (error) {
        console.error(error);
        localStorage.setItem(key, typeof tempInitValue === 'string' ? tempInitValue : JSON.stringify(tempInitValue));
    }
    return localStorageStore;
}
