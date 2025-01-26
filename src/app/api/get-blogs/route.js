import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const blogs = await Blog.find();

    return NextResponse.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch blogs.",
    });
  }
}
