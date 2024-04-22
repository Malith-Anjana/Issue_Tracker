'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const pathname = usePathname();

  const navbar = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/lists" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {navbar.map((link) => (
          <li key={link.href}>
            <Link
              className={classNames({
                'text-zinc-500': link.href !== pathname,
                'hover:text-zinc-900': link.href !== pathname,
                'text-red-500': link.href === pathname
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
