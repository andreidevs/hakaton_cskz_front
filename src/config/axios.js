import axios from "axios"

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

instance.defaults.timeout = 60000
instance.defaults.withCredentials = true
instance.defaults.xsrfHeaderName = 'X-CSRFToken'
instance.defaults.xsrfCookieName = 'csrftoken'




export default instance
