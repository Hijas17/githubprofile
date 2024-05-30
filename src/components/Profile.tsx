import { useGitHubData } from '@/hooks/usegithubdata';
import React from 'react';

interface ProfileProps {
  token: string;
}

const Profile: React.FC<ProfileProps> = ({ token }) => {
//   const { data, isLoading, error } = useGitHubData(token);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading data</div>;

//   if (!data) {
//     return <div>No data available</div>;
//   }

//   const { user, repos, followers, following } = data;

  return (
    <div className="p-6 max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-4">
      {/* <ThemeSwitcher /> */}
      {/* <img className="h-24 w-24 rounded-full mx-auto" src={user.avatar_url} alt={user.name} /> */}
      <div className="text-center space-y-2">
        <div className="space-y-0.5">
          {/* <div className="text-lg leading-6 font-medium text-black dark:text-white">{user.name}</div>
          <div className="text-lg leading-6 font-medium text-black dark:text-white">{user.email}</div> */}
                    <div className="text-lg leading-6 font-medium text-black dark:text-white">Git</div>
          <div className="text-lg leading-6 font-medium text-black dark:text-white">hello123@github.com</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-center">
            {/* <div className="text-lg leading-6 font-medium text-black dark:text-white">{followers.length}</div> */}
            <div className="text-lg leading-6 font-medium text-black dark:text-white">121</div>
            <div className="text-sm leading-5 text-gray-500 dark:text-gray-400">Followers</div>
          </div>
          <div className="text-center">
            {/* <div className="text-lg leading-6 font-medium text-black dark:text-white">{following.length}</div> */}
            <div className="text-lg leading-6 font-medium text-black dark:text-white">2</div>
            <div className="text-sm leading-5 text-gray-500 dark:text-gray-400">Following</div>
          </div>
          <div className="text-center">
            {/* <div className="text-lg leading-6 font-medium text-black dark:text-white">{repos.length}</div> */}
            <div className="text-lg leading-6 font-medium text-black dark:text-white">5</div>
            <div className="text-sm leading-5 text-gray-500 dark:text-gray-400">Repositories</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
