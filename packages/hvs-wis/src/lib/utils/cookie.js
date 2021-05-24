import jsCookie from "js-cookie";

export const getCookie = (key) => jsCookie.get(key);

export const setCookie = ({ key, value }) => jsCookie.set(key, value);

export const removeCookie = (key) => jsCookie.remove(key);
