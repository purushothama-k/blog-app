import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get("id");

    if (!blogId) {
      return NextResponse.json({
        success: false,
        message: "Blog ID is required",
      });
    }

    const deleteBlog = await Blog.findByIdAndDelete(blogId);

    return NextResponse.json({
      success: true,
      message: "Blog is deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Failed to delete blog.",
    });
  }
}
