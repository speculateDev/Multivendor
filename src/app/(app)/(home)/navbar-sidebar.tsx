import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItemProps[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function NavbarSidebar({ open, items, onOpenChange }: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="p-0 transition-none" side="left">
        <SheetHeader className="p-4 border-b">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
          {items.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="w-full p-4 text-left hover:bg-black hover:text-white flex items-center text-base font-medium"
              onClick={() => onOpenChange(false)}
            >
              {item.children}
            </Link>
          ))}

          <div className="border-t">
            <Link
              className="w-full p-4 text-left hover:bg-black hover:text-white flex items-center text-base font-medium"
              href="/login"
            >
              Sign In
            </Link>

            <Link
              className="w-full p-4 text-left hover:bg-black hover:text-white flex items-center text-base font-medium"
              href="/signup"
            >
              Start Selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

export default NavbarSidebar;
