"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface SheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

function Sheet({ open, onOpenChange, children }: SheetProps) {
  return <>{open && children}</>;
}

interface SheetContentProps {
  side?: "left" | "right" | "top" | "bottom";
  className?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

function SheetContent({
  side = "right",
  className,
  children,
}: SheetContentProps) {
  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
      {/* Panel */}
      <div
        className={cn(
          "fixed z-50 bg-white shadow-xl transition-transform duration-300",
          side === "right" && "inset-y-0 right-0 h-full",
          side === "left" && "inset-y-0 left-0 h-full",
          side === "top" && "inset-x-0 top-0 w-full",
          side === "bottom" && "inset-x-0 bottom-0 w-full",
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1 p-4", className)} {...props} />
  );
}

function SheetTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-base font-medium text-gray-900", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-gray-500", className)} {...props} />
  );
}

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription };
