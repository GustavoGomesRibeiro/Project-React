export const tokenKey = 'login';
export const isAuthenticated = () => localStorage.getItem (tokenKey) !== null;
export const getToken = () => JSON.parse(localStorage.getItem(tokenKey));
export const signIn = token => {JSON.parse(localStorage.getItem(tokenKey, token))};
export const logout = () => JSON.parse(localStorage.removeItem(tokenKey));