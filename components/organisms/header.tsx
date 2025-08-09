"use client";

import { Button } from "@/components/atoms/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/atoms/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import LanguageSwitcher from "../atoms/language-switcher";
import ModeToggle from "../atoms/ui/mode-toggle";
import { useI18n } from "@/lib/i18n";

export default function Header() {
  const { t } = useI18n();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center space-x-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Icon-v9YclKNTugIW3t2efXVwjAoqMRC4o8.png"
            alt="Trust Access"
            width={32}
            height={32}
            className="h-8 w-8"
            loading="lazy"
          />
          <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-2xl font-bold text-transparent">
            Trust Access
          </span>
        </div>
        <nav className="hidden items-center space-x-8 md:flex">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              {t(label)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden items-center space-x-4 md:flex">
            <LanguageSwitcher />
            <ModeToggle />
            <Button variant="ghost">{t("header.login")}</Button>
            <Button className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
              {t("header.bookDemo")}
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col space-y-6 p-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map(({ href, label }) => (
                  <SheetClose asChild key={href}>
                    <Link
                      href={href}
                      className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
                    >
                      {t(label)}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <LanguageSwitcher />
              <ModeToggle />
              <SheetClose asChild>
                <Button variant="ghost" className="w-full">
                  {t("header.login")}
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                  {t("header.bookDemo")}
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
