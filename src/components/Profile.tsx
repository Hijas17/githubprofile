import { Github, Kanban, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Profile = ({ user }: any) => {
  return (
    <div className="max-w-md h-auto mx-auto p-6 bg-[#ffffff] dark:bg-[#0b323133] rounded-lg shadow-lg text-center">
      <div className="flex justify-center">
        <div className="w-48 h-48">
          <img className="rounded-full" src={user.avatar_url} alt={user.name} />
        </div>
      </div>
      <h1 className="mt-4 text-xl font-semibold">{user.name?user.name:user.login}</h1>
      <h2 className="mt-2 text-sm text-[rgb(60,69,83)] dark:text-[rgb(123,145,175)]">{user.email?user.email:"Email not provided or set to private. Please check your profile."}</h2>
      <form action={user.html_url}>
        <button className="mt-4 text-sm font-light px-4 py-2 bg-blue-900 dark:bg-blue-900 hover:bg-blue-800 dark:hover:bg-blue-800  text-white rounded-full">
          View Full Profile
        </button>
      </form>
      <div className="flex justify-around mt-6 text-sm ">
        <div className="flex-col ">
        <div className="text-lg text-[rgb(46,52,63)] dark:text-[rgb(123,145,175)]">{user.followers}</div>
        <span className=" text-[rgb(70,80,97)] dark:text-[rgb(75,91,112)]">{`Followers`}</span>
        </div>
        <div className="flex-col ">
        <div className="text-lg text-[rgb(46,52,63)] dark:text-[rgb(123,145,175)]">{user.following}</div>
        <span className=" text-[rgb(70,80,97)] dark:text-[rgb(75,91,112)]">{`Following`}</span>
        </div>
        <div className="flex-col ">
        <div className="text-lg text-[rgb(46,52,63)] dark:text-[rgb(123,145,175)]">{user.public_repos + user.owned_private_repos}</div>
        <span className=" text-[rgb(70,80,97)] dark:text-[rgb(75,91,112)]">{`Repositories`}</span>
        </div>
      </div>
      {/* <div className="relative flex justify-around mt-4 text-[rgb(75,87,107)] dark:text-[rgb(110,127,153)]">
        <Link
          href={`${user.html_url}?tab=projects`}
          className="hover:text-blue-700 flex"
        >
          <Kanban />
          <span>Projects</span>
        </Link>
        <Link href={`${user.html_url}?tab=repositories`} className="hover:text-blue-700 flex">
          <Github />
          <span>Repo</span>
        </Link>
        <Link href={`mailto:${user.email}`} className="hover:text-blue-700 flex">
          <Mail />
          <span className="p-0.5"> Email</span>
        </Link>
      </div> */}

    </div>
  );
};

export default Profile;
