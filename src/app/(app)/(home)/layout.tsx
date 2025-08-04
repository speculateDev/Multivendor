import { getQueryClient, trpc } from "@/trpc/server";

import Footer from "../../../modules/home/ui/components/Footer";
import Navbar from "@/modules/home/ui/components/Navbar";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import {
  SearchFilters,
  SearchFiltersSkeleton,
} from "@/modules/home/ui/components/search-filters";

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.categories.getMany.queryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <Suspense fallback={<SearchFiltersSkeleton />}>
          <SearchFilters />
        </Suspense>

        <div className="flex-1 bg-[#f4f4f0]">{children}</div>
        <Footer />
      </div>
    </HydrationBoundary>
  );
}
