import axios from "axios";
// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
// import { AuthOpions as AuthOptions } from "../../auth/[...nextauth]/route";
// import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    // const { phoneNumber, otp } = await req.json();
    // const session = await getServerSession(AuthOptions);
    // if (!session) {
    //   return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    // }
    // if (!phoneNumber || !otp) {
    //   return new NextResponse("Phone number or OTP not provided", {
    //     status: 400,
    //   });
    // }
    // const user = await prisma.user.findUnique({
    //   where: {
    //     id: session.user.id,
    //   },
    // });
    // if (user?.otp == otp) {
    //   await prisma.user.update({
    //     where: {
    //       id: session.user.id,
    //     },
    //     data: {
    //       mobileVerified: true,
    //     },
    //   });
    //   return NextResponse.json({
    //     status: 200,
    //     message: "OTP Sent Successfully",
    //   });
    // }
    // if (user?.otp !== otp) {
    //   return NextResponse.json({
    //     status: 400,
    //     message: "Wrong OTP Provided",
    //   });
    //
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
