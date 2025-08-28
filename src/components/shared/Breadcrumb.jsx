"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
      <Link href="/" className="hover:text-foreground transition-colors">
        Home
      </Link>
      {segments.map((segment, index) => (
        <div key={segment} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4" />
          <Link
            href={`/${segments.slice(0, index + 1).join("/")}`}
            className="capitalize hover:text-foreground transition-colors"
          >
            {segment.replace(/-/g, " ")}
          </Link>
        </div>
      ))}
    </nav>
  );
}
