'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/atoms/ui/button';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
      <h1 className="mb-4 text-4xl font-bold">Something went wrong</h1>
      <Button onClick={() => router.refresh()}>Try again</Button>
    </main>
  );
}
