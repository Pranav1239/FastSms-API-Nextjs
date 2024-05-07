// import prisma from "@/lib/prisma";
// import { FastSmsClient } from "@/services/FastSms";
import axios from "axios";
// import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
// import { AuthOpions as AuthOption } from "../../auth/[...nextauth]/route";

export async function POST(req: NextRequest) {
  try {
    const { phoneNumber } = await req.json();

    // const session = await getServerSession(AuthOption);

    // if (!session) {
    //   return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    // }

    const randomNumber = Math.floor(Math.random() * 9000) + 1000;

    const API_KEY = process.env.FASTSMSKEY;

    const resp = await axios.get(
      `https://www.fast2sms.com/dev/bulkV2?authorization=${API_KEY}&route=otp&flash=0&variables_values=${randomNumber}&numbers=${phoneNumber}`
    );

    const responseData = resp.data;

    let otp = randomNumber.toString();

    // const userdata = await prisma.user.update({
    //   where: {
    //     id: session.user.id,
    //   },
    //   data: {
    //     otp: otp,
    //   },
    // });

    console.log(responseData);

    return NextResponse.json({ status: 200, responseData });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create address" },
      { status: 500 }
    );
  }
}
