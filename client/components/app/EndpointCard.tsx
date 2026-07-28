import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function EndpointCard() {
  return (
    <Card className="cursor-pointer">
      <CardContent className="flex items-center gap-x-3">
        <div className="rounded-2xl bg-green-500 capitalize p-1 text-sm">
          GET
        </div>
        <p className="text-white/60">/product</p>
      </CardContent>
      <CardHeader>
        <CardTitle>E-commerce Catalog API</CardTitle>
        <CardDescription className="line-clamp-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam placeat
          itaque atque libero asperiores. Nihil nobis odit a architecto
          voluptatum, laudantium excepturi numquam, magnam laborum expedita
          delectus, blanditiis reiciendis quidem!
        </CardDescription>
      </CardHeader>
      <CardFooter className="border-t justify-between text-white/60 text-sm">
        <p>3 field</p>
        <p>3 field</p>
      </CardFooter>
    </Card>
  );
}
