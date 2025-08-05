import z from "zod";

import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import type { Where } from "payload";
import { CustomCategory } from "@/app/(app)/(home)/types";
import { Category } from "@/payload-types";

export const productsRouter = createTRPCRouter({
  getMany: baseProcedure
    .input(
      z.object({
        categorySlug: z.string().nullable().optional(),
        minPrice: z.string().nullable().optional(),
        maxPrice: z.string().nullable().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const where: Where = {};

      if (input.minPrice) {
        where.price = {
          greater_than_equal: input.minPrice,
        };
      }

      if (input.maxPrice) {
        where.price = {
          less_than_equal: input.maxPrice,
        };
      }

      if (input.categorySlug) {
        const categoriesData = await ctx.db.find({
          collection: "categories",
          limit: 1,
          pagination: false,
          depth: 1, // Populate subcategories, subcategories.[0] will be a type 'Category'
          where: {
            slug: {
              equals: input.categorySlug,
            },
          },
        });

        const subcategoriesSlugs = [];

        const formattedData: CustomCategory[] = categoriesData.docs.map(
          (doc: Category) => ({
            ...doc,
            subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
              // depth is 1 so doc is of type Category
              ...(doc as Category),
              subcategories: undefined,
            })),
          })
        );

        const parentCategory = formattedData[0];

        if (parentCategory) {
          subcategoriesSlugs.push(
            ...parentCategory.subcategories.map(
              (subcategory) => subcategory.slug
            )
          );

          // Load the parent category alongside the subcategories
          where["category.slug"] = {
            in: [parentCategory.slug, ...subcategoriesSlugs],
          };
        }
      }

      const data = await ctx.db.find({
        collection: "products",
        depth: 1, // Populate "category" & "image",
        where,
      });

      return data;
    }),
});
