import Profile from "@/components/Profile";
import { Github } from "lucide-react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Home() {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  let user = null;

  if (userCookie) {
    user = JSON.parse(userCookie.value);
  }

  console.log(user);

  return (
    <>
      {user && (
        <div className="w-screen h-screen">
          <div className="p-10">
            <Profile user={user}></Profile>
          </div>
        </div>
      )}
    </>
  );
}
