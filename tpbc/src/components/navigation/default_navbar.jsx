import Link from "next/link";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";

const default_navbar = () => {
  return (
    <nav className="absolute top-0 h-20 p-4 pr-20 border w-full flex justify-between items-center bg-white">
      <Link href="/">
        <div>Logo</div>
      </Link>

      <div className="flex justify-between items-center w-1/2">
        <Link href="/">Home</Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 flex flex-col gap-2">
                <Link href="/">
                  <NavigationMenuLink>Church Doctrine</NavigationMenuLink>
                </Link>

                <Link href="/">
                  <NavigationMenuLink>Church Doctrine</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Ministries</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 flex flex-col gap-2">
                <Link href="/">
                  <NavigationMenuLink>Pulpit Ministry</NavigationMenuLink>
                </Link>

                <Link href="/">
                  <NavigationMenuLink>Men's Ministry</NavigationMenuLink>
                </Link>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link href="/contact_us">Contact Us</Link>
        <Button
          asChild
          variant="outline"
          className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-[#9A01CD] text-[#9A01CD] text-white"
        >
          <span>
            <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#9A01CD] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <Link
              href="/login"
              className="relative text-[#9A01CD] transition duration-300 group-hover:text-white ease"
            >
              Login
            </Link>
          </span>
        </Button>
      </div>
    </nav>
  );
};

export default default_navbar;
