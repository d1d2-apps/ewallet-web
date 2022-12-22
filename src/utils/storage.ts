const storagePrefix = '@eWallet';

export const storage = {
  getToken: () => {
    return JSON.parse(localStorage.getItem(`${storagePrefix}:token`) as string) as string;
  },
  setToken: (token: string) => {
    localStorage.setItem(`${storagePrefix}:token`, JSON.stringify(token));
  },
  clearToken: () => {
    localStorage.removeItem(`${storagePrefix}:token`);
  },
  getColorMode: () => {
    return JSON.parse(localStorage.getItem(`${storagePrefix}:colorMode`) || 'light') as 'light' | 'dark';
  },
  setColorMode: (colorMode: 'light' | 'dark') => {
    localStorage.setItem(`${storagePrefix}:colorMode`, JSON.stringify(colorMode));
  }
};
