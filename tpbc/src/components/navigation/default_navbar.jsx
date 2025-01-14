import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    onClick={onClick}
    className="w-full p-2 hover:bg-gray-100 rounded-md transition-colors"
  >
    {children}
  </Link>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const aboutLinks = [
    { href: "/church-doctrine", label: "Church Doctrine" },
    { href: "/leadership", label: "Leadership" },
  ];

  const ministryLinks = [
    { href: "/pulpit-ministry", label: "Pulpit Ministry" },
    { href: "/mens-ministry", label: "Men's Ministry" },
  ];

  if (!isMounted) return null;

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/tpbc_logo.png"
              alt="logo"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavLink href="/">Home</NavLink>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4 min-w-[200px]">
                    <div className="flex flex-col space-y-2">
                      {aboutLinks.map((link) => (
                        <NavigationMenuLink
                          key={link.href}
                          asChild
                          className="hover:bg-gray-100 p-2 rounded-md transition-colors"
                        >
                          <Link href={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Ministries</NavigationMenuTrigger>
                  <NavigationMenuContent className="p-4 min-w-[200px]">
                    <div className="flex flex-col space-y-2">
                      {ministryLinks.map((link) => (
                        <NavigationMenuLink
                          key={link.href}
                          asChild
                          className="hover:bg-gray-100 p-2 rounded-md transition-colors"
                        >
                          <Link href={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavLink href="/contact_us">Contact Us</NavLink>

            <Button
              asChild
              variant="outline"
              className="relative group border-2 border-[#9A01CD] text-[#9A01CD] overflow-hidden"
            >
              <Link href="/login">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  Login
                </span>
                <span className="absolute inset-0 bg-[#9A01CD] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen} className="bg-white">
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative w-10 h-10">
                  <div className="flex flex-col justify-center items-center w-6 space-y-1.5">
                    <span className={cn(
                      "block h-0.5 w-full bg-current transition-all duration-300",
                      isOpen && "rotate-45 translate-y-2"
                    )} />
                    <span className={cn(
                      "block h-0.5 w-full bg-current transition-all duration-300",
                      isOpen && "opacity-0"
                    )} />
                    <span className={cn(
                      "block h-0.5 w-full bg-current transition-all duration-300",
                      isOpen && "-rotate-45 -translate-y-2"
                    )} />
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <MobileNavLink href="/" onClick={closeMenu}>
                    Home
                  </MobileNavLink>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 px-2">About Us</p>
                    {aboutLinks.map((link) => (
                      <MobileNavLink
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                      >
                        {link.label}
                      </MobileNavLink>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 px-2">Ministries</p>
                    {ministryLinks.map((link) => (
                      <MobileNavLink
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                      >
                        {link.label}
                      </MobileNavLink>
                    ))}
                  </div>

                  <MobileNavLink href="/contact_us" onClick={closeMenu}>
                    Contact Us
                  </MobileNavLink>

                  <Button
                    asChild
                    variant="outline"
                    className="relative group border-2 border-[#9A01CD] text-[#9A01CD] overflow-hidden w-full"
                  >
                    <Link href="/login" onClick={closeMenu}>
                      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        Login
                      </span>
                      <span className="absolute inset-0 bg-[#9A01CD] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;