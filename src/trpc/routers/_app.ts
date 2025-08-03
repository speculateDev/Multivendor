import { createTRPCRouter } from "../init";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { authRouter } from "@/modules/auth/server/procedures";

export const appRouter = createTRPCRouter({
  auth: authRouter,

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
