"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { BookmarkCheckIcon, SearchIcon } from "lucide-react";
import { ListFilterIcon } from "lucide-react";
import CategoriesSidebar from "./categories-sidebar";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

interface Props {
  disabled?: boolean;
  placeholder?: string;
  // data: CustomCategory[];
}

export const SearchInput = ({
  disabled,
  placeholder = "Search products",
}: Props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  useEffect(() => {
    if (session.data?.user) setShowButton(true);
  }, [session.data?.user]);

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar onOpenChange={setIsSidebarOpen} open={isSidebarOpen} />
      <div className="relative w-full flex gap-2">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 size-4" />
        <Input className="pl-8" placeholder={placeholder} disabled={disabled} />

        <Button
          variant="elevated"
          onClick={() => setIsSidebarOpen((open) => !open)}
          className="flex lg:hidden size-12 shrink-0"
        >
          <ListFilterIcon />
        </Button>

        {showButton && (
          <Button asChild variant="elevated">
            <Link href="/library">
              <BookmarkCheckIcon className="mr-2" />
              Library
            </Link>
          </Button>
        )}
      </div>

      {/* TODO: add categories view all btn */}
      {/* TODO: add library btn */}
    </div>
  );
};
