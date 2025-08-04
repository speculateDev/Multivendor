import { Category } from "@/payload-types";
import Link from "next/link";
import { CategoriesGetManyOutput } from "@/modules/categories/types";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  category: CategoriesGetManyOutput[1];
  isOpen: boolean;
  position: { top: number; left: number };
}

function SubcategoryMenu({ category, isOpen, position }: Props) {
  if (
    !isOpen ||
    !category.subcategories ||
    category.subcategories.length === 0
  ) {
    return null;
  }

  const backgroundColor = category.color || "#F5F5F5";

  return (
    <div
      className="fixed z-100"
      style={{ top: position.top, left: position.left }}
    >
      {/* Maintain hover state between the menu and the button */}
      <div className="h-3 w-60" />

      <ScrollArea className="flex max-h-[60vh] flex-col overflow-y-auto w-auto border rounded-md">
        <div
          style={{ backgroundColor: backgroundColor }}
          className="w-60 text-black overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]"
        >
          <div>
            {category.subcategories?.map((subcategory: Category) => (
              <Link
                key={subcategory.slug}
                href={`/${category.slug}/${subcategory.slug}`}
                className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium"
              >
                {subcategory.name}
              </Link>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}

export default SubcategoryMenu;
