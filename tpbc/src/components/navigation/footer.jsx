import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="relative min-h-46 border-t w-full p-8 flex justify-center bg-gray-900">
      <div className="absolute inset-0">
        <Image
          src="/images/footer_background.png"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="flex flex-col-reverse md:flex-row gap-12 relative z-10 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="flex flex-col gap-2 text-xs">
            <h2 className="text-base font-semibold">Quick Links</h2>
            {["Home", "About Us", "Ministries", "Sermons", "Events", "Contact Us"].map((link) => (
              <Link
                key={link}
                href="/"
                className="relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <h2 className="text-base font-semibold">Navigate</h2>
            {["FAQ", "Blog", "Support"].map((link) => (
              <Link
                key={link}
                href="/"
                className="relative w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-xs">
            <h2 className="text-base font-semibold">Contact Us</h2>
            <p className="text-xs text-gray-300">
              Phone: +260972458617 <br />
              Email: twinpalmbaptist@gmail.com
            </p>

            <div className="rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.0039271726027!2d28.3652776!3d-15.4303394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408c46c74622ad%3A0x1c3db985b46870a4!2sBaptist%20Theological%20Seminary%20of%20Zambia!5e0!3m2!1sen!2szm!4v1736794491740!5m2!1sen!2szm"
                width="200"
                height="100"
                className="border-none"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Newsletter Signup</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </CardContent>
            <CardFooter>
              <p className="max-w-64 text-xs text-gray-300">
                Stay updated with the latest news, events, and resources from Twin Palm Baptist Church.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Footer;
