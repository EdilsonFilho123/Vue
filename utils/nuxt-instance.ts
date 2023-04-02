/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/named */
import { NuxtAxiosInstance } from "@nuxtjs/axios";
import { NuxtCookies } from "cookie-universal-nuxt";

let $axios: NuxtAxiosInstance
let $cookies: NuxtCookies

export const initializeAxios = (axiosInstance: NuxtAxiosInstance) => {
    $axios = axiosInstance
}

export const initializeCookies = (cookiesInstance: NuxtCookies) => {
    $cookies = cookiesInstance
}

export { $axios, $cookies }