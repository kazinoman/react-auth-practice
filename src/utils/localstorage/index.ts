const setLocalStorage = (name: string, value: string) =>
    localStorage.setItem(name, JSON.stringify(value));

const getLocalStorage = (name: string) => localStorage.getItem(name);

const removeLocalStorage = (name: string) => localStorage.removeItem(name);

const LocalStorage = { setLocalStorage, getLocalStorage, removeLocalStorage };
export default LocalStorage;
