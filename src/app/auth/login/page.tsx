import React from "react";
import "../../globals.css";
import { GithubIcon } from "lucide-react";

const page = () => {
  return (
    <div className="flex items-center justify-center absolute right-[45%] top-[45%] rounded-[20px] bg-[#ffffff] dark:bg-[#0b323133]">
      <div className="flex flex-col items-center justify-center p-8 bg-[#ffffff] dark:bg-[#0b323133] shadow-lg rounded-md">
        <>
          <div className="flex justify-center">
            <div className=" bg-[#0b323133] dark:bg-[#0b323136]  shadow-xl rounded-full">
              <div className="p-1.5">
                <GithubIcon className="mt-1" size={75}></GithubIcon>
              </div>
            </div>
          </div>
          <form action="/api/auth/login" method="GET">
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-blue-800 rounded"
            >
              Login with GitHub
            </button>
          </form>
        </>
      </div>
    </div>
  );
};

export default page;
