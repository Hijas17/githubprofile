import Profile from "@/components/Profile";
import { Kanban, Github, Mail } from "lucide-react";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

const page = () => {
  const cookieStore = cookies();
  const userCookie = cookieStore.get("user");
  let user = null;

  if (userCookie) {
    user = JSON.parse(userCookie.value);
  }

  return (
    <div className="w-screen h-screen">
      <div className="p-10">
      <Profile user={user}></Profile>
      </div>
    </div>
  );
};

export default page;
