import Link from "next/link";
import React from "react";
import Image from "next/image";

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
    <nav className="absolute top-0 h-20 p-4 px-20 border w-full flex justify-between items-center bg-white">
      <Link href="/">
        <Image src="/images/tpbc_logo.png" alt="logo" width={50} height={50} />
      </Link>

      <div className="flex justify-between items-center w-1/2">
        <Link
          href="/"
          className="relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
        >
          Home
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 flex flex-col gap-2">
                <Link href="/">
                  <NavigationMenuLink className="relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                    Church Doctrine
                  </NavigationMenuLink>
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

        <Link
          href="/contact_us"
          className="relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
        >
          Contact Us
        </Link>
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
