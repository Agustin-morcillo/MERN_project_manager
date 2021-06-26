import axiosClient from "./axios"

const authToken = (token) => {
  if (token) {
    return (axiosClient.defaults.headers.common["x-auth-token"] = token)
  }
  return delete axiosClient.defaults.headers.common["x-auth-token"]
}

export default authToken
