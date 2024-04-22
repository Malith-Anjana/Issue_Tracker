"use client";
import Link from "next/link";
import Skeleton from "@/app/components/Skeleton";
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
  
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <AiFillBug />
            </Link>
            <NavLinks/>
          </Flex>
              <AuthStatus/>
         
        </Flex>
      </Container>
    </nav>
  );
};

const NavLinks = ()=> {
  const pathname = usePathname();
  const navbar = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/lists" },
  ];
  return (
    <ul className="flex space-x-6">
              {navbar.map((link) => (
                <li key={link.href}>
                  <Link
                    className={classNames({
                      "nav-link": true,
                      "!text-red-500": link.href === pathname,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
  )
}

const AuthStatus = ()=> {
  const { status, data: session } = useSession();

  if (status === 'loading') return <Skeleton width="3rem"/>
  else if (status === 'unauthenticated') return  <Link className="nav-link" href="/api/auth/signin">Login</Link>

  
  return(
  <Box>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar
          className="cursor-pointer"
          src={session!.user!.image!}
          referrerPolicy="no-referrer"
          size="2"
          radius="full"
          fallback="?"
        />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Label>
          <Text size="2"> {session!.user!.email!}</Text>
        </DropdownMenu.Label>
        <DropdownMenu.Item>
            <Link href="/api/auth/signout">Logout</Link>
          </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  

</Box>)
}

export default NavBar;
