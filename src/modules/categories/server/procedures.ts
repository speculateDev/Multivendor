import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { CustomCategory } from "@/app/(app)/(home)/types";
import { Category } from "@/payload-types";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.find({
      collection: "categories",
      depth: 1, // Populate subcategories, subcategory.[0] wil be of type "Category"
      where: {
        parent: {
          exists: false,
        },
      },
      pagination: false,
      sort: "name",
    });

    const formattedData: CustomCategory[] = data.docs.map((doc: Category) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
        // depth is 1 so doc is of type Category
        ...(doc as Category),
        subcategories: undefined,
      })),
    }));

    return formattedData;
  }),
});
