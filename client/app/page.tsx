import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRightFreeIcons,
  Check,
  Sparkle,
  Sparkles,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-10 py-3 border-b">
        <div>
          <h1 className="text-2xl font-bold">PromptFlow</h1>
        </div>
        <nav>
          <ul className="flex gap-x-4">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Live Demo</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </nav>
        <div>
          <Button>Signup</Button>
        </div>
      </header>
      <main>
        <section className="flex items-center justify-center flex-col gap-y-5 my-20">
          <Badge>
            <HugeiconsIcon icon={Sparkle} /> AI-Driven REST Architecture Mocking
          </Badge>
          <h1 className="text-center text-5xl font-bold">
            Simulate API Traffic with the <br />{" "}
            <span className="text-primary">Power of AI</span>
          </h1>
          <p className="max-w-120 text-center">
            Build feature-rich mock APIs instantly. No rigid static tables - AI
            generates contextual, realistic JSON structures based on your fields
            and custom prompts.
          </p>
          <div className="flex items-center gap-x-3">
            <Button>
              Get Started <HugeiconsIcon icon={ArrowRightFreeIcons} />
            </Button>
          </div>
          <div className="flex items-center gap-x-3">
            <p className="flex items-center text-xs">
              <HugeiconsIcon icon={Check} className="text-primary" size={18} />{" "}
              Zero Config Needed
            </p>
            <p className="flex items-center text-xs">
              <HugeiconsIcon icon={Check} className="text-primary" size={18} />{" "}
              Generates real nested JSON
            </p>
            <p className="flex items-center text-xs">
              <HugeiconsIcon icon={Check} className="text-primary" size={18} />{" "}
              Free sandbox tier included
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
