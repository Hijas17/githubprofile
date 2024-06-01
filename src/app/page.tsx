import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import GitHubData from "@/components/GitHubData";
import { fetchGithub } from "@/server/action/fetchgithub";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["user"],
    queryFn: fetchGithub,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GitHubData />
    </HydrationBoundary>
  );
}
