import * as localforage from 'localforage';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService implements LocalForageDbMethodsCore {
    getItem<T>(key: string, callback?: (err: any, value: T | null) => void): Promise<T | null> {
        return localforage.getItem(key, callback);
    }
    setItem<T>(key: string, value: T, callback?: (err: any, value: T) => void): Promise<T> {
        return localforage.setItem(key, value, callback);
    }
    removeItem(key: string, callback?: (err: any) => void): Promise<void> {
        return localforage.removeItem(key, callback);
    }
    clear(callback?: (err: any) => void): Promise<void> {
        return localforage.clear(callback);
    }
    length(callback?: (err: any, numberOfKeys: number) => void): Promise<number> {
        return localforage.length(callback);
    }
    key(keyIndex: number, callback?: (err: any, key: string) => void): Promise<string> {
        return localforage.key(keyIndex, callback);
    }
    keys(callback?: (err: any, keys: string[]) => void): Promise<string[]> {
        return localforage.keys(callback);
    }
    iterate<T, U>(iteratee: (value: T, key: string, iterationNumber: number) => U, callback?: (err: any, result: U) => void): Promise<U> {
        return localforage.iterate(iteratee, callback);
    }
}
