"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import BlogCard from "./blog-card";
import { useRouter } from "next/navigation";

export default function BlogList({ initialBlogs }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [blogs, setBlogs] = useState(initialBlogs);

  const router = useRouter();

  const handleDelete = async (id) => {
    // setBlogs(blogs.filter((blog) => blog.id !== id));

    const res = await fetch(`/api/delete-blog?id=${id}`, {
      method: "DELETE",
    });

    const result = await res.json();
    if (result?.success) router.refresh();
    // router.push("/");
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Input
        type="text"
        placeholder="Search blogs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
