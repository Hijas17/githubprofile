import { cookies } from "next/headers";
import React from "react";
import "../../globals.css";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-md">
          <>
            <h1 className="text-2xl font-bold text-center">Next.js GitHub OAuth</h1>
            <form action="/api/auth/login" method="GET">
              <button type="submit" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
                Login with GitHub
              </button>
            </form>
          </>
      </div>
    </div>
  );
};

export default page;
