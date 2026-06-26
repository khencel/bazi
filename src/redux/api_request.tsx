import axios from "axios";
import Cookies from "js-cookie";


export async function post_no_auth_api(url: string, data: any){
    return axios.post(url, data);
}

export async function get_no_auth_api(url: string){
    return axios.get(url);
}

export async function delete_no_auth_api(url: string){
    return axios.delete(url);
}


export async function standard_post_api(url: string, data: any){
    const token = Cookies.get("access");
    const baseUrl = process.env.NEXT_PUBLIC_API_CONTENT_URL
    const isFormData = data instanceof FormData;
    
    
    return axios.post(baseUrl+url, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            ...(isFormData ? {} : { "Content-Type": "application/json" }),
        }
    });
}

export async function standard_get_api(url: string){
    const token = Cookies.get("access");
    const baseUrl = process.env.NEXT_PUBLIC_API_CONTENT_URL
    return axios.get(baseUrl+url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


export async function standard_update_api (url: string, data: any){
    const token = Cookies.get("access");
    const baseUrl = process.env.NEXT_PUBLIC_API_CONTENT_URL

    return axios.put(baseUrl+url, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        }
    });
}

export async function standard_delete_api (url: string){
    const token = Cookies.get("access");
    const baseUrl = process.env.NEXT_PUBLIC_API_CONTENT_URL
    return axios.delete(baseUrl+url, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}


