"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({ items, className = "" }) {
  const pathname = usePathname();

  // If items are provided, use them; otherwise auto-generate from pathname
  const breadcrumbItems =
    items ||
    pathname
      .split("/")
      .filter(Boolean)
      .map((segment, index, arr) => ({
        label: segment.replace(/-/g, " "),
        href:
          index === arr.length - 1
            ? undefined
            : `/${arr.slice(0, index + 1).join("/")}`,
      }));

  return (
    <nav
      className={`flex items-center space-x-2 text-sm text-gray-300 ${className}`}
    >
      {!items && (
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
      )}
      {breadcrumbItems.map((item, index) => (
        <div key={item.label || item} className="flex items-center space-x-2">
          {(index > 0 || items) && <ChevronRight className="h-4 w-4" />}
          {item.href ? (
            <Link
              href={item.href}
              className="capitalize hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="capitalize text-white font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
