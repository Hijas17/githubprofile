"use server";
import axios from "axios";
import { cookies } from "next/headers";

export const fetchGithub = async () => {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("accessToken");
  const token = tokenCookie ? tokenCookie.value : null;

  if (!token) {
    return { error: "No access token found" };
  }

  try {
    const userResponse = await axios.get("https://api.github.com/user", {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    return userResponse.data;
  } catch (error: any) {
    if (error.response) {
      return {
        error: `GitHub API error: ${error.response.status} - ${error.response.data.message}`,
      };
    } else if (error.request) {
      return { error: "No response received from GitHub API" };
    } else {
      return { error: `Error in setting up request: ${error.message}` };
    }
  }
};
