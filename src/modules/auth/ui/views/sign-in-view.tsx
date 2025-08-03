"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTRPC } from "@/trpc/client";

import { useMutation } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { loginSchema } from "../../schemas";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import z from "zod";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

function SingInView() {
  const trpc = useTRPC();
  const router = useRouter();

  const login = useMutation(
    trpc.auth.login.mutationOptions({
      onError: (error) => {
        toast.error(error.message);
      },
      onSuccess: () => {
        router.push("/");
      },
    })
  );

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    login.mutate(values);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="bg-[#F4F4F0] h-screen w-full lg:col-span-3 overflow-y-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8 p-4 lg:px-16 lg:py-8 "
          >
            <div className="flex items-center justify-between mb-8">
              <Link
                prefetch
                href="/"
                className={cn("text-4xl font-semibold", poppins.className)}
              >
                <span>funroad</span>
              </Link>

              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-base border-none underline"
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>

            <h1 className="text-4xl font-medium">Welcome back to funroad</h1>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              disabled={login.isPending}
              size="lg"
              variant="elevated"
              type="submit"
              className="bg-black text-white hover:bg-pink-400 hover:text-primary"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>

      <div
        className="h-screen w-full lg:col-span-2 hidden lg:block"
        style={{
          backgroundImage: "url('/auth-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}

export default SingInView;
