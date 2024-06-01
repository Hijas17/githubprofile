"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGithub } from "@/server/action/fetchgithub";
import Profile from "./Profile";

const GitHubData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: fetchGithub,
    retry: true, // Disables automatic retries to prevent exceeding rate limits
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching GitHub data: {error.message}</div>;
  }

  return (
    <div className="absolute w-full h-full top-[20%]">
      <Profile user={data}></Profile>
    </div>
  );
};

export default GitHubData;
