// const BASE_URL = "http://localhost:4000/api/v1"
const BASE_URL = "https://articlesummarizatin.onrender.com"
console.log(BASE_URL);

//Auth APIs
export const endpoints = {
    LOGIN_API: BASE_URL + "/auth/login",
    SIGNUP_API: BASE_URL + "/auth/signup",
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
    CHANGEPASSWORD_API: BASE_URL + "/auth/changepassword",
}

//QUERY ENDPOINTS
export const query_endpoints = {
    NEW_QUERY_API: BASE_URL + "/createQuery"
}
