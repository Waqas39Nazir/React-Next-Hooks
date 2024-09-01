"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();
  return (
    <div className="w-full p-2 bg-blue-400">
      <ul className="flex flex-row gap-3 text-xl font-medium">
        <li
          className={
            currentPath === "/use-state-hook"
              ? " text-black font-semibold underline"
              : ""
          }
        >
          <Link href="/use-state-hook">Use State Hook</Link>
        </li>

        <li
          className={
            currentPath === "/use-effect-hook"
              ? " text-black font-semibold underline"
              : ""
          }
        >
          <Link href="/use-effect-hook">Use Effect Hook</Link>
        </li>

        <li
          className={
            currentPath === "/use-memo-hook"
              ? " text-black font-semibold underline"
              : ""
          }
        >
          <Link href="/use-memo-hook">Use Memo Hook</Link>
        </li>

        <li
          className={
            currentPath === "/use-callback-hook"
              ? " text-black font-semibold underline"
              : ""
          }
        >
          <Link href="/use-callback-hook">Use Callback Hook</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
