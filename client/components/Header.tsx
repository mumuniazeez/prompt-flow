import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-3 border-b">
      <div>
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">PromptFlow</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-x-4">
          <li>
            <Link href="/#features">Features</Link>
          </li>
          <li>
            <Link href="/#demo">Live Demo</Link>
          </li>
          {/* <li>
              <a href="#">Pricing</a>
            </li> */}
        </ul>
      </nav>
      <div>
        <Link href={"/auth"}>
          <Button>Signup</Button>
        </Link>
      </div>
    </header>
  );
}
