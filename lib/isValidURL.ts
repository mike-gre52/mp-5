export function isValidURL (url: string):boolean {
    try {
        const parsedURL = new URL(url)
        return true
    } catch {
        return false;
    }
}