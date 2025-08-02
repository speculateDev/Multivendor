import { getQueryClient, trpc } from "@/trpc/server";

import Footer from "./Footer";
import Navbar from "./Navbar";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { SearchFilters } from "./search-filters";

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

        <Suspense fallback={<p>Loading....</p>}>
          <SearchFilters />
        </Suspense>

        <div className="flex-1 bg-[#f4f4f0]">{children}</div>
        <Footer />
      </div>
    </HydrationBoundary>
  );
}
