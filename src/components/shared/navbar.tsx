"use client";

import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

import { useRouter } from "next/navigation";
import Container from "./container";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <Link href="/create-report">Create</Link>,
  },
  {
    key: "2",
    label: <button onClick={() => signOut()}>Log out</button>,
  },
];

const Navbar = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const isDownMd = useMediaQuery("(max-width: 768px)");

  return (
    <nav className="border-b py-2 sticky top-0 bg-white z-50">
      <Container className="flex justify-between items-center">
        <Link href="/" className="text-black text-xl font-bold">
          ITS
        </Link>

        <div className="flex gap-x-4 items-center">
          <Button
            type="primary"
            size="large"
            onClick={() => router.push("/view-reports")}
          >
            {isDownMd ? "" : "Reports"}
          </Button>
          {status === "loading" ? (
            <>
              <div className="animate-pulse bg-gray-300 h-10 w-20 rounded-lg" />
            </>
          ) : session && session.user ? (
            <div className="w-8 h-8 rounded-full overflow-hidden relative cursor-pointer border">
              <Dropdown menu={{ items }}>
                {session.user.image ? (
                  <Image src={session.user.image} fill alt="profile-picture" />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex justify-center items-center">
                    {session.user.email && session.user.email[0]}
                  </div>
                )}
              </Dropdown>
            </div>
          ) : (
            <Button size="large" onClick={() => signIn()}>
              {isDownMd ? "" : "Log in"}
            </Button>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
