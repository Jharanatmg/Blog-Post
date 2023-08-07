// [slug].js
import { useRouter } from "next/router";

export default function PostDetail() {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch the post data based on slug and display it here

  return <div>Post Detail Page for Slug: {slug}</div>;
}
