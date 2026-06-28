import axios from "axios";
import Cookies from "js-cookie";


const apiClient = axios.create({
    withCredentials: false, // ← ADD THIS
});

export async function post_no_auth_api(url: string, data: any){
    return apiClient.post(url, data);
}

export async function get_no_auth_api(url: string){
    return apiClient.get(url);
}

export async function delete_no_auth_api(url: string){
    return apiClient.delete(url);
}


export async function standard_post_api(url: string, data: any){
    const token = Cookies.get("access");
    const baseUrl = process.env.NEXT_PUBLIC_API_CONTENT_URL
    const isFormData = data instanceof FormData;
    
    
    return apiClient.post(baseUrl+url, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            ...(isFormData ? {} : { "Content-Type": "application/json" }),
        }
    });
}

export async function standard_get_api(url: string){
    const token = Cookies.get("access");
    const baseUrl = process.env.NEXT_PUBLIC_API_CONTENT_URL
    return apiClient.get(baseUrl+url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


export async function standard_update_api (url: string, data: any){
    const token = Cookies.get("access");
    const baseUrl = process.env.NEXT_PUBLIC_API_CONTENT_URL

    return apiClient.put(baseUrl+url, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        }
    });
}

export async function standard_delete_api (url: string){
    const token = Cookies.get("access");
    const baseUrl = process.env.NEXT_PUBLIC_API_CONTENT_URL
    return apiClient.delete(baseUrl+url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


