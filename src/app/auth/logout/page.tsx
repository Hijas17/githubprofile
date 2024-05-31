import { cookies } from "next/headers";
import React from "react";

const page = () => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  let user = null;

  if (userCookie) {
    user = JSON.parse(userCookie.value);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-md">
          <img
            src={user.avatar_url}
            alt="Avatar"
            className="w-24 h-24 rounded-full"
          />
          <h1 className="mt-4 text-xl font-semibold">{user.name}</h1>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded"
            >
              Logout
            </button>
          </form>
      </div>
    </div>
  );
};

export default page;
