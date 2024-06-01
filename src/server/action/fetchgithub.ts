"use server";
import axios from "axios";
import { cookies } from "next/headers";
import { userAgent } from "next/server";

export const fetchGithub = async () => {
    const cookieStore = cookies();
    const tokenCookie = cookieStore.get("accessToken");
    const token = tokenCookie ? tokenCookie.value : null;

    if (!token) {
        return { error: "No access token found" };
    }

    try {
        const userResponse = await axios.get('https://api.github.com/user', {
            headers: {
                Authorization: `token ${token}`,
            },
        });
        return userResponse.data;
    } catch (error:any) {
        if (error.response) {
            // Server responded with a status other than 200 range
            return { error: `GitHub API error: ${error.response.status} - ${error.response.data.message}` };
        } else if (error.request) {
            // Request was made but no response received
            return { error: "No response received from GitHub API" };
        } else {
            // Something else happened while setting up the request
            return { error: `Error in setting up request: ${error.message}` };
        }
    }
};
