"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { headerNav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLink =
  "relative inline-flex h-10 items-center px-3 text-sm font-semibold text-white/90 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-primary aria-[current=page]:text-white after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:bg-primary after:opacity-0 after:transition-opacity hover:after:opacity-100 aria-[current=page]:after:opacity-100";

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={cn(buttonVariants({ variant: "outline", size: "icon" }), "lg:hidden")}
        aria-label="Open menu"
      >
        <Menu />
      </SheetTrigger>
      <SheetContent side="right" showCloseButton={false} className="w-full border-0 p-0 sm:max-w-none">
        <SheetTitle className="sr-only">Main menu</SheetTitle>
        <div className="blueprint-grid flex h-full flex-col bg-brand-dark px-6 pb-8 text-white">
          <div className="flex h-20 items-center justify-between border-b border-white/10">
            <Logo tone="dark" className="h-10" />
            <SheetClose
              className={cn(buttonVariants({ variant: "outline", size: "icon" }), "border-white/20 bg-transparent text-white hover:bg-white/10")}
            >
              <X />
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
          <nav aria-label="Mobile" className="mt-4 flex flex-1 flex-col">
            {headerNav.map((l) => (
              <SheetClose
                key={l.href}
                render={<Link href={l.href} />}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
                className="border-b border-white/10 py-4 text-2xl font-bold outline-none aria-[current=page]:text-primary"
              >
                {l.label}
              </SheetClose>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-4">
            <a href={site.phoneHref} className="text-2xl font-bold text-primary">
              {site.phone}
            </a>
            <SheetClose
              render={<Link href="/contact" />}
              className={cn(buttonVariants({ size: "lg" }), "w-full py-5 text-base")}
            >
              Get a Quote
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-brand-dark">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${site.name}, home`}
          className="flex items-center outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <Logo tone="dark" className="h-11" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center lg:flex">
          {headerNav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(pathname, l.href) ? "page" : undefined}
              className={navLink}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
          >
            <Phone className="size-4 text-primary" aria-hidden />
            {site.phone}
          </a>
          <Link href="/contact" className={buttonVariants()}>
            Get a Quote
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className={cn(buttonVariants({ size: "icon" }))}
          >
            <Phone />
          </a>
          <MobileMenu pathname={pathname} />
        </div>
      </div>
      <div className="hazard-stripes h-1.5 w-full" aria-hidden />
    </header>
  );
}
