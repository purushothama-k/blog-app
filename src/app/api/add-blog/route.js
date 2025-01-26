import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi";
import { NextResponse } from "next/server";

const AddNewblog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    await connectToDB();

    const extractBlogData = await req.json();

    const { title, description } = extractBlogData;

    const { error } = AddNewblog.validate({ title, description });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newBlog = await Blog.create(extractBlogData);

    if (newBlog) {
      return NextResponse.json({
        success: true,
        message: "New blog added successfully!.",
      });
    } else {
      return NextResponse.json({
        success: false,
        message:
          "Failed to add a new blog. Please verify the required fields..",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong!, please try again later....",
    });
  }
}
