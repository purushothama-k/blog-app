import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;
  console.log("Fetching blog with ID:", id);
  try {
    await connectToDB();
    const blog = await Blog.findById(id);

    if (!blog) {
      console.log("Blog not found with ID:", id);
      return NextResponse.json({
        success: false,
        message: "Blog not found.",
      });
    }

    return NextResponse.json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch blogs.",
    });
  }
}
