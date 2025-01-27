import BlogForm from "@/components/blog/blog-form";

async function getBlog(id) {
  try {
    const apiResponse = await fetch(
      `http://localhost:3000/api/get-blog/${id}`,
      {
        method: "GET",
      }
    );

    if (!apiResponse.ok) {
      throw new Error("Failed to fetch blog details");
    }

    const result = await apiResponse.json();
    return result.data;
  } catch (error) {
    console.error("Error parsing response as JSON:", error);
    throw new Error("Failed to parse response as JSON");
  }
}

export default async function EditBlog({ params }) {
  const { id } = await params;

  const blog = await getBlog(id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
      <BlogForm blog={blog} />
    </div>
  );
}
