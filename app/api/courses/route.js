import courses from "./data.json";
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json(courses);
}

// export async function POST(req) {
//   const { title, description, level, link } = await req.json();

//   return NextResponse.json({message: 'New course created...'});
// }
