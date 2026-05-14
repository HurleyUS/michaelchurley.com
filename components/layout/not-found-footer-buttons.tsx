"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundFooterButtons() {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center justify-center gap-md p-md text-center">
      <Button onMouseDown={() => router.back()}>Go Back</Button>
      <Button onMouseDown={() => router.push("/")}>Go Home</Button>
    </div>
  );
}
