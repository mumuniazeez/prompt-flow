"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRightFreeIcons,
  Check,
  Sparkle,
  Sparkles,
  Terminal,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { useState } from "react";

interface ExampleBlueprint {
  title: string;
  prompt: string;
  path: string;
  schemaBlueprint: string;
  simulatedSchema: string;
}

const exampleBlueprint: ExampleBlueprint[] = [
  {
    title: "Fintech Sentiment  Analyzer",
    path: "/api/v1/analyze",
    prompt:
      "Analyze user financial posts for market sentiment, risk level (0-100), and extract tickers.",
    schemaBlueprint: JSON.stringify({
      sentiment: "string",
      risk_score: "number",
      entities: "string[]",
      reasoning: "string",
    }),
    simulatedSchema: JSON.stringify({
      sentiment: "bullish",
      risk_score: 18,
      entities: ["BTC", "MicroStrategy", "WallStreet"],
      reasoning:
        "High transaction volume combined with institutional accumulation signals near-term stability.",
    }),
  },
  {
    title: "Social Engagement Simulator",
    path: "/api/v1/user-feed",
    prompt:
      "Generate a synthetic user feed item containing simulated user names, active statuses, and high engagement comments.",
    schemaBlueprint: JSON.stringify({
      username: "string",
      engagement_rate: "number",
      active: "boolean",
      tags: "string[]",
    }),
    simulatedSchema: JSON.stringify({
      username: "cyber_surfer",
      engagement_rate: 94.2,
      active: true,
      tags: ["programming", "ai", "web3"],
    }),
  },
  {
    title: "Atmospheric Climate Station",
    path: "/api/v1/weather",
    prompt:
      "Model physical environmental variables including temperatures, relative humidity levels, and dynamic forecast advisories.",
    schemaBlueprint: JSON.stringify({
      location: "string",
      temp_celsius: "number",
      status: "string",
      precipitation_probability: "percent",
    }),
    simulatedSchema: JSON.stringify({
      location: "Neo Tokyo, Sector 4",
      temp_celsius: 22.4,
      status: "Neon Rain shower imminent",
      precipitation_probability: 88,
    }),
  },
];

export default function Home() {
  const [selectedBlueprint, setSelectedBlueprint] = useState<ExampleBlueprint>(
    exampleBlueprint[0],
  );

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
        <section className="flex items-center justify-center flex-col gap-y-5 py-20  border-b">
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
        <section className="flex items-center justify-center flex-col gap-y-5 py-10  border-b">
          <div className="space-y-2 text-center">
            <p className="text-sm text-primary">Live Interactive Demo</p>

            <h3 className="text-center text-2xl font-bold">
              Experience Contextual AI Fulfillments
            </h3>
            <p className="max-w-120 text-center text-xs mx-auto text-white/60">
              Select one of our templates below and trigger a direct simulation.
              Watch AI populate the blueprint fields intelligently.
            </p>

            <div className="flex my-10 gap-3 items-center justify-center">
              <div className="space-y-3 text-start">
                <p className="text-xs">Select Blueprint Template</p>

                <div className="flex flex-col gap-y-2">
                  {exampleBlueprint.map((blueprint, idx) => (
                    <Card
                      key={idx}
                      onClick={() => setSelectedBlueprint(blueprint)}
                    >
                      <CardHeader>
                        <CardTitle>{blueprint.title}</CardTitle>
                        <CardDescription className="line-clamp-1">
                          {blueprint.prompt}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardContent className="text-start space-y-3">
                    <div className="space-y-2">
                      <h5>HTTP ROUTE</h5>
                      <Input value={selectedBlueprint.path} readOnly />
                    </div>
                    <div className="space-y-2">
                      <h5>SCHEMA BLUEPRINT</h5>
                      <Textarea
                        value={selectedBlueprint.schemaBlueprint}
                        readOnly
                        className="max-w-400"
                      ></Textarea>
                    </div>
                  </CardContent>
                </Card>
                <Button className={"w-full"}>Simulate Endpoint Request</Button>
              </div>
              <div className="space-y-3 border rounded-2xl w-150 overflow-hidden">
                <div className="flex items-center justify-between bg-card border-b p-3">
                  <div className="flex items-center gap-x-2 rounded-t-2xl">
                    <HugeiconsIcon icon={Terminal} />{" "}
                    <h6>Interactive Client Output</h6>
                  </div>
                  <div className="flex items-center gap-x-2 rounded-t-2xl">
                    <Badge>200 OK</Badge>
                    <p className="text-sm text-white/60">195ms</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="border-b flex items-center justify-between text-xs text-white/60 py-2">
                    <p>Simulated JSON Response</p>
                    <p>Content-Type: application/json</p>
                  </div>

                  <Textarea
                    value={selectedBlueprint.simulatedSchema}
                    readOnly
                    className="h-70"
                  ></Textarea>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
