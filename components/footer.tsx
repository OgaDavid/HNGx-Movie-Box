import React from "react";
import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const socialIcons = [
  {
    name: "Facebook",
    imageUrl: "/images/facebook.svg",
  },
  {
    name: "Instagram",
    imageUrl: "/images/instagram.svg",
  },
  {
    name: "Twitter",
    imageUrl: "/images/twitter.svg",
  },
  {
    name: "Youtube",
    imageUrl: "/images/youtube.svg",
  },
];

const Footer = () => {
  return (
    <footer className="mt-10 border-t">
      <Container>
        <div className="flex items-center gap-6 flex-col justify-center py-10 md:py-16 text-center">
          <div className="flex items-center justify-center gap-12">
            {socialIcons.map((icon) => (
              <Image
                className="hover:cursor-pointer"
                key={icon.name}
                alt={icon.name}
                src={icon.imageUrl}
                width={24}
                height={24}
              />
            ))}
          </div>
          <div>
            <ul className="font-bold max-md:text-sm max-md:flex-col flex items-center text-center justify-center gap-2 md:gap-12">
              <li className="hover:underline hover:cursor-pointer">
                Conditions of Use
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Privacy & Policy
              </li>
              <li className="hover:underline hover:cursor-pointer">
                Press Room
              </li>
            </ul>
          </div>
          <div className="gap-2">
            <p className="text-sm text-muted-foreground">
              &copy; 2021 MovieBox by Adriana Eka Prayudha{" "}
            </p>
            <p className="text-xs text-rose-700 text-muted-foreground">
              Built by{" "}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                className="italic underline"
                href="https://github.com/OgaDavid"
              >
                OgaDavid
              </Link>{" "}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
