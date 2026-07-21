import { Button } from "@/components/ui/button";
import React from "react";

export default function Signin() {
  return (
    <main className="flex items-center justify-center flex-col gap-y-5 py-20 h-[calc(100vh-100px)]">
      <h1 className="text-3xl font-bold">Welcome to PromptFlow</h1>
      <p className="text-white/60">Signin to Get Started</p>

      <div>
        <Button size={"lg"}>Continue with Google</Button>
      </div>
    </main>
  );
}
