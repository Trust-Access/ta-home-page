import { Skeleton } from "@/components/atoms/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <Skeleton className="h-8 w-8 rounded-full" />
    </div>
  );
}
