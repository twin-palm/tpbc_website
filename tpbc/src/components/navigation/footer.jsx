import React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footer = () => {
  return (
    <div className="absolute bottom-0 min-h-46 border-t w-full p-8 flex justify-center">
      <div className="flex flex-col-reverse md:flex-row gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 text-sm">
            <h2 className="text-base">Quick Links</h2>
            <Link href="/">Home</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Ministries</Link>
            <Link href="/">Sermons</Link>
            <Link href="/">Events</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div>
            <h2>Navigate</h2>
            <Link href="/">FAQ</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Support</Link>
          </div>
          <div>Contact Us</div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Newsletter Signup</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent className="flex gap-2">
              <Input type="email" placeholder="email" />
              <Button type="submit">Subscribe</Button>
            </CardContent>
            <CardFooter>
              <p className="wrap max-w-64 text-xs text-gray-500">
                Stay updated with the latest news, events, and resources from
                Twin Palm Baptist Church. Sign up for our newsletter!
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default footer;
