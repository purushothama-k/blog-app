import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-4xl font-bold mb-8 text-white">
        Welcome to Our Blog
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl text-white">
        Explore our collection of insightful articles, tips, and stories.
        Whether you're a tech enthusiast, a curious learner, or just looking for
        some inspiration, we've got something for everyone.
      </p>
      <Link href="/blogs">
        <Button size="lg">Browse Our Blog</Button>
      </Link>
    </div>
  );
}
