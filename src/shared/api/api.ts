import axios from 'axios'
import { LOCAL_STORAGE_USER_KEY } from './../constants/localStorage'

export const $api = axios.create({
  baseURL: __API__
})

$api.interceptors.request.use((config) => {
  config.headers.authorization = localStorage.getItem(LOCAL_STORAGE_USER_KEY) ?? ''

  return config
})
