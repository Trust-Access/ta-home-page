import Link from "next/link";
import { Button } from "@/components/atoms/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
      <h1 className="mb-4 text-4xl font-bold">Page not found</h1>
      <Button asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </main>
  );
}
