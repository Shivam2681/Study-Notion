import axios from "axios"

export const axiosInstance = axios.create();

export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
    });
}
// export const apiConnector = async (method, url, bodyData, headers, params) => {
//     const requestOptions = {
//         method: method.toUpperCase(),
//         headers: headers || {},
//     };

//     if (bodyData) {
//         requestOptions.headers["Content-Type"] = "application/json";
//         requestOptions.body = JSON.stringify(bodyData);
//     }

//     // Append params to the URL if it's a GET request
//     if (params && method.toUpperCase() === "GET") {
//         url += `?${new URLSearchParams(params).toString()}`;
//     }

//     try {
//         const response = await fetch(url, requestOptions);
//         const responseData = await response.json();

//         if (!response.ok) {
//             throw new Error(responseData.message || "Something went wrong");
//         }

//         return responseData;
//     } catch (error) {
//         console.error("Fetch error:", error.message);
//         throw error;
//     }
// };


// import axios from "axios";



// export const axiosInstance = axios.create({
//   baseURL: "https://study-notion-backend-9tnx.onrender.com/api/v1", // Replace with your actual backend URL
//   withCredentials: true, // Allow cookies to be sent with the request (if applicable)
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "https://study-notion-lac.vercel.app", // Replace with your frontend origin
//   },
// });

