"use client";

// import { useQuery } from "@tanstack/react-query";
// import { useTRPC } from "@/trpc/client";

export default function ClientGreeting() {
  // const trpc = useTRPC();

  // const categories = useQuery(trpc.categories.getMany.queryOptions());
  // const isLoading = categories.isLoading;

  // if (isLoading) return <p>isLoading: {"" + categories.isLoading}</p>;

  // return <p>{JSON.stringify(categories.data)}</p>;
  return <div>Home</div>;
}

/*
import { getQueryClient, trpc } from "@/trpc/server";

export default async function ClientGreeting() {
  const queryClient = getQueryClient();

  const categories = await queryClient.fetchQuery(
    trpc.categories.getMany.queryOptions()
  );

  return <pre>{JSON.stringify(categories)}</pre>;
}
*/
