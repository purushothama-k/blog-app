import BlogForm from "@/components/blog/blog-form";

async function createBlog() {
  const res = await fetch("http://localhost:3000/api/add-blog", {
    method: "POST",
    body: JSON.stringify(),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
}

export default function CreateBlogPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Blog</h1>
      <BlogForm />
    </div>
  );
}
