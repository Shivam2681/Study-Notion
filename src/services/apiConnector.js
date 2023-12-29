// import axios from "axios"

// export const axiosInstance = axios.create({});

// export const apiConnector = (method, url, bodyData, headers, params) => {
//     return axiosInstance({
//         method:`${method}`,
//         url:`${url}`,
//         data: bodyData ? bodyData : null,
//         headers: headers ? headers: null,
//         params: params ? params : null,
//     });
// }

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://study-notion-backend-9tnx.onrender.com/api/v1", // Replace with your actual backend URL
  withCredentials: true, // Allow cookies to be sent with the request (if applicable)
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://study-notion-lac.vercel.app", // Replace with your frontend origin
  },
});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData || null,
    headers: headers || null,
    params: params || null,
  });
};
