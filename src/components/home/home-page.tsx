"use client";

import { Button } from "antd";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Container from "../shared/container";

const HomePage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <div className="py-16">
        <Container className="flex items-center justify-center">
          <Button
            type="primary"
            size="large"
            onClick={() => {
              if (session?.user) {
                router.push("/create-report");
              } else {
                signIn();
              }
            }}
          >
            Get started
          </Button>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
