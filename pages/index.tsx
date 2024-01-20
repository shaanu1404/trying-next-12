import Heading from "@/components/Heading";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Heading>Welcome to Next.js pages router!</Heading>
      <div className="flex items-center space-x-4">
        <Link href="/about" legacyBehavior>
          <a>Learn more about us</a>
        </Link>
        <Link href="/posts" legacyBehavior>
          <a>See out latest posts</a>
        </Link>
        <Link href="/todos" legacyBehavior>
          <a>Go to Todolist</a>
        </Link>
      </div>
    </>
  );
}
