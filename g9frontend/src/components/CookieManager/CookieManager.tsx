// Function to create a cookie
const setCookie = (name: string, value: string, days: number): void => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

// Function to get the value of a cookie
const getCookie = (name: string): string | undefined | null => {
    const cookieValue: RegExpMatchArray | null = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? cookieValue.pop() : null;
};

export {setCookie, getCookie}
