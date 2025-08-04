import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface Props {
  activeCategoryName: string | null;
  activeCategory: string | null;
  activeSubcategory: string | null | undefined;
}

function BreadcrumbNavigation({
  activeCategoryName,
  activeCategory,
  activeSubcategory,
}: Props) {
  if (!activeCategory || activeCategory === "all") return null;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {activeSubcategory ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink
                asChild
                className="text-xl font-medium underline text-primary"
              >
                <Link href={`/${activeCategory}`}>{activeCategoryName}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="text-primary font-medium text-lg" />

            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl font-medium">
                {activeSubcategory}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xl font-medium">
              {activeCategoryName}
            </BreadcrumbPage>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbNavigation;
