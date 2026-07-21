import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-10 py-3 border-t">
      <p>PromptFlow &copy; 2026. All rights reserved.</p>
      <div className="flex gap-x-3">
        <Button variant={"link"}>Terms of Service</Button>
        <Button variant={"link"}>Privacy Policy</Button>
      </div>
    </footer>
  );
}
