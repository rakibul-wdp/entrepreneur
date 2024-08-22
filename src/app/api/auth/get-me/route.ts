import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma/db";

export const GET = async () => {
  const session = await getServerSession();
  try {
    if (!session) {
      return new NextResponse("Your not logged in", {
        status: 401,
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        email: session.user?.email!,
      },
    });

    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse("Internal server error", {
      status: 500,
    });
  }
};
