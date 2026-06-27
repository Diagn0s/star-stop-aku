"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

function NavigationMenu({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "relative flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className={cn(
        "flex flex-1 list-none items-center justify-center gap-0",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) {
  return <li className={cn("relative", className)} {...props} />;
}

function NavigationMenuLink({
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        "flex items-center gap-2 rounded-lg p-2 text-sm transition-all hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
};
