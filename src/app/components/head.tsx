"use client";
import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"] });
import { Icon } from "@iconify/react/dist/iconify.js";
import ThemeToggle from "./ToggleTheme";
import Link from "next/link";

export default function head() {
  return (
    <div className="border-b">
      <div className="pt-5 pb-5 flex container max-w-4xl mx-auto items-center justify-between ">
        <div className="flex items-center gap-5">
          <ThemeToggle />
        </div>
        <Link
          href="/"
          className="flex gap-5 items-center"
        >
          <h2
            className={`font-bold text-2xl ${lexend.className} tracking-tighter`}
          >
            msblog!
          </h2>
        </Link>
        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/shrullahh_/"
            className="flex gap-5 text-2xl items-center"
          >
            <Icon icon="ri:instagram-line" />
          </Link>
          <Link
            href="https://github.com/sahrullahh"
            className="flex gap-5 text-2xl items-center"
          >
            <Icon icon="ri:github-fill" />
          </Link>
        </div>
      </div>
    </div>
  );
}
