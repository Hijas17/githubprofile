import { Github, Kanban, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Profile = ({ user }: any) => {
  return (
    <div className="max-w-md h-auto mx-auto p-6 bg-[#0b323133] dark:bg-[#0b323133] rounded-lg shadow-lg text-center">
      <div className="flex justify-center">
        <div className="w-48 h-48">
          <img className="rounded-full" src={user.avatar_url} alt={user.name} />
        </div>
      </div>
      <h1 className="mt-4 text-xl font-semibold">{user.name?user.name:user.login}</h1>
      <h2 className="mt-2 text-sm text-gray-600">{user.email?user.email:"Email not provided. Please visit your profile by clicking below."}</h2>
      <form action={user.html_url}>
        <button className="mt-4 px-4 py-2 bg-blue-900 opacity-80 hover:opacity-100 text-white rounded-full">
          Visit Page
        </button>
      </form>
      <div className="flex justify-around mt-4 text-sm text-gray-600">
        <span>{`${user.followers} Followers`}</span>
        <span>{`${user.following} Following`}</span>
        <span>{`${
          user.public_repos + user.owned_private_repos
        } Repositories`}</span>
      </div>
      <div className="relative flex justify-around mt-4 text-gray-700">
        <Link
          href={`${user.html_url}?tab=projects`}
          className="hover:text-green-500 flex"
        >
          <Kanban />
          <span>Projects</span>
        </Link>
        <Link href={`${user.html_url}?tab=repositories`} className="hover:text-blue-700 flex">
          <Github />
          <span>Repo</span>
        </Link>
        <Link href={`mailto:${user.email}`} className="hover:text-red-800 flex">
          <Mail />
          <span className="p-0.5"> Email</span>
        </Link>
      </div>
      <form
        action="/api/auth/logout"
        method="GET"
        className="flex justify-center mt-6 space-x-4"
      >
        <button className="px-4 py-2 bg-red-900 opacity-80 hover:opacity-100 text-white rounded-sm">
          Log Out
        </button>
      </form>
    </div>
  );
};

export default Profile;
