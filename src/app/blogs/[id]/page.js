import Link from "next/link";

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

export default async function page({ params }) {
  const { id } = await params;

  const blog = await getBlog(id);

  return (
    <div className=" p-6">
      <Link className=" text-blue-600 underline" href={"/blogs"}>
        Go Back
      </Link>
      <h1 className=" my-5">{blog.title}</h1>
      <p>{blog.description}</p>
    </div>
  );
}
