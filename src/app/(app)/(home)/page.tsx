"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const trpc = useTRPC();

  const { data } = useQuery(trpc.auth.session.queryOptions());
  // const { data } = useQuery(trpc.auth.test.queryOptions());

  console.log({ data });

  return (
    <div>
      <p>Home</p>
      {/* <pre>{JSON.stringify(data)}</pre> */}
    </div>
  );
}

// import { useQuery } from "@tanstack/react-query";
// import { useTRPC } from "@/trpc/client";
/*
export function ClientGreeting() {
  const trpc = useTRPC();

  const categories = useQuery(trpc.categories.getMany.queryOptions());
  const isLoading = categories.isLoading;

  if (isLoading) return <p>isLoading: {"" + categories.isLoading}</p>;

  return <p>{JSON.stringify(categories.data)}</p>;
}
*/
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
