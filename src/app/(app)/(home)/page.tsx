/*
"use client";

import { useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export default function ClientGreeting() {
  const trpc = useTRPC();

  const categories = useQuery(trpc.categories.getMany.queryOptions());
  console.log(categories);
  const isLoading = categories.isLoading;

  if (isLoading) return <p>isLoading: {"" + categories.isLoading}</p>;

  return <pre>{JSON.stringify(categories.data)}</pre>;
}
*/

import { getQueryClient, trpc } from "@/trpc/server";

export default async function ClientGreeting() {
  const queryClient = getQueryClient();

  const categories = await queryClient.fetchQuery(
    trpc.categories.getMany.queryOptions()
  );

  return <pre>{JSON.stringify(categories)}</pre>;
}
