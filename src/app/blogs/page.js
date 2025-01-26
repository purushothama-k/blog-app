import BlogList from "@/components/blog/blog-list";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getBlogs() {
  const apiResponse = await fetch("http://localhost:3000/api/get-blogs", {
    method: "GET",
    cache: "no-store",
  });

  if (!apiResponse.ok) {
    throw new Error(`Failed to fetch blogs`);
  }

  try {
    const result = await apiResponse.json();
    return result.data;
  } catch (error) {
    console.error("Error parsing response as JSON:", error);
    throw new Error("Failed to parse response as JSON");
  }
}

export default async function BlogsPage() {
  const blogs = await getBlogs();

  if (blogs.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Our Blog Posts</h1>
        <p>No blog posts available.</p>
      </div>
    );
  }

  console.log(blogs);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Our Blog Posts</h1>
      <div className="flex justify-between items-center mb-4">
        <Link href="/blogs/create">
          <Button>Create New Blog</Button>
        </Link>
      </div>
      <BlogList initialBlogs={blogs} />
    </div>
  );
}
