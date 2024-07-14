export function SetLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
}

export function GetLocalStorage(): string {
    return localStorage.getItem('Search') as string;
}
