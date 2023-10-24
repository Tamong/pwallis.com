import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <div
        className="flex h-[100dvh] flex-col items-center justify-center
        text-center"
      >
        <h1 className="text-2xl">What are you doing...</h1>
        <Button variant="link">
          <Link href="/">
            <h2 className="flex items-center gap-2 text-xl">
              <MoveLeft />
              Go Home
            </h2>
          </Link>
        </Button>
      </div>
    </>
  );
}
