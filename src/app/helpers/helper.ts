export function generateUniqueId() {
    const timestamp = new Date().getTime().toString(16); // Convierte el timestamp a hexadecimal
    const randomPart = Math.random().toString(16).substring(2); // Genera una parte aleatoria en hexadecimal

    return `${timestamp}-${randomPart}`;
}

export function getLang(browserLang?: string) {
    if (browserLang != undefined && browserLang.includes('es')) {
        return 'es';
    }
    else if (browserLang != undefined && browserLang.includes('en')) {
        return 'en';
    }
    else {
        return 'en';
    }
}