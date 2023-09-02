import dbConn from "@/app/utils/dbConn";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
// import { init } from "next/dist/compiled/@vercel/og/satori";

export async function POST(req, res) {
  try {
    const body = res.json();
    await dbConn();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "Message Sent Successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    
    return NextResponse.json(
      { message: "Server error, Please Try Again!" },
      { status: 500 }
    );
  }
}
