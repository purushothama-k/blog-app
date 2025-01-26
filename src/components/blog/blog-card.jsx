import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogCard({ blog, onDelete }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{blog.description.substring(0, 100)}...</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/blogs/${blog._id}`}>
          <Button variant="outline">Read More</Button>
        </Link>
        <div className="space-x-2">
          <Link href={`/blogs/edit/${blog._id}`}>
            <Button variant="secondary">Edit</Button>
          </Link>
          <Button variant="destructive" onClick={() => onDelete(blog._id)}>
            Delete
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
