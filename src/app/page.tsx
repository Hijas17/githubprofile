import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Home() {
  const cookieStore = cookies();
  const userCookie = cookieStore.get('user');
  let user = null;

  if (userCookie) {
    user = JSON.parse(userCookie.value);
  }

  console.log(user);

  const handleLogin = () => {
    redirect('/api/auth/login');
  };

  const handleLogout = () => {
    redirect('/api/auth/logout');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center p-8 bg-white shadow-lg rounded-md">
        {user ? (
          <>
            <img src={user.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full" />
            <h1 className="mt-4 text-xl font-semibold">{user.name}</h1>
            <form action="/api/auth/logout" method="POST">
              <button type="submit" className="px-4 py-2 mt-4 text-white bg-red-500 rounded">
                Logout
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center">Next.js GitHub OAuth</h1>
            <form action="/api/auth/login" method="GET">
              <button type="submit" className="px-4 py-2 mt-4 text-white bg-blue-500 rounded">
                Login with GitHub
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}