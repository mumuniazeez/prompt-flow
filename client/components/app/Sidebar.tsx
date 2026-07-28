import React from "react";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Plus, SearchIcon } from "@hugeicons/core-free-icons";
import EndpointCard from "./EndpointCard";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";

export default function Sidebar() {
  return (
    <aside className="h-screen overflow-hidden w-[20%] border">
      <header className="border-b p-5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold">PromptFlow</h3>
            <p className="text-xs text-white/60">Smarter AI prompt</p>
          </div>
          <Button variant={"secondary"}>
            <HugeiconsIcon icon={Plus} />
          </Button>
        </div>
      </header>
      <div className="border-b p-5">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <HugeiconsIcon icon={SearchIcon} />
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="p-5 space-y-3 overflow-hidden">
        <h6 className="text-xs font-bold">Endpoints (3)</h6>

        <div className="space-y-3 overflow-auto">
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
          <EndpointCard />
        </div>
      </div>
    </aside>
  );
}
