"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classNames from "classnames";
import { AiFillBug } from "react-icons/ai";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";
const NavBar = () => {
  const pathname = usePathname();
  const { status, data: session } = useSession();
  console.log(session);
  const navbar = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/lists" },
  ];
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <ul className="flex space-x-6">
              {navbar.map((link) => (
                <li key={link.href}>
                  <Link
                    className={classNames({
                      "text-zinc-500": link.href !== pathname,
                      "hover:text-zinc-900": link.href !== pathname,
                      "text-red-500": link.href === pathname,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>

          <Box>
            {status === "authenticated" && (
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Avatar
                    className="cursor-pointer"
                    src={session.user!.image!}
                    size="2"
                    radius="full"
                    fallback="?"
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Label>
                    <Text size="2"> {session.user!.email!}</Text>
                  </DropdownMenu.Label>
                  <DropdownMenu.Item>
                      <Link href="/api/auth/signout">Logout</Link>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">Login</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
