"use client";

import Button from "@/app/(landing)/_components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  return (
    <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center">
      <div className="max-w-136 w-full bg-white rounded-2xl border-t-6 border-primary shadow-md py-12 px-18">
        <Image
          src="/images/logo-admin.svg"
          alt="logo admin"
          width={314}
          height={51}
          className="mx-auto mb-4"
        />
        <p className="opacity-50 text-sm text-center mb-10">
          Enter your credentials to access the dashboard
        </p>

        <div className="flex flex-col gap-4 w-full">
          <div className="input-group-admin mb-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please type your email"
              className="rounded-lg!"
            />
          </div>
          <div className="input-group-admin">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••••••••••••••"
              className="rounded-lg!"
            />
          </div>
          <Button
            className="w-full rounded-lg! my-8"
            onClick={() => router.push("/admin/products")}
          >
            Sign In
          </Button>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
