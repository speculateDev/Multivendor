import Footer from "./Footer";
import Navbar from "./Navbar";
import { SearchFilters } from "./search-filters";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Category } from "@/payload-types";

interface Props {
  children: React.ReactNode;
}

export default async function Layout({ children }: Props) {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1, // Populate subcategories, subcategory.[0] wil be of type "Category"
    where: {
      parent: {
        exists: false,
      },
    },
    pagination: false,
  });

  const formattedData = data.docs.map((doc: Category) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // depth is 1 so doc is of type Category
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));

  console.log({ formattedData });
  console.log({ data });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
}
