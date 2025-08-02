"use client";

// import { CustomCategory } from "../types";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { ListFilterIcon } from "lucide-react";
import CategoriesSidebar from "./categories-sidebar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
      </div>

      {/* TODO: add categories view all btn */}
      {/* TODO: add library btn */}
    </div>
  );
};
