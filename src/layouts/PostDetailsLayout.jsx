// src/components/post/PostDetailsLayout.jsx
import { Link, Outlet, useParams } from "react-router-dom";
import { posts } from "../data";
import PostHero from "../components/post/PostHero";
import PostSidebar from "../components/post/PostSidebar";
import RelatedPosts from "../components/post/RelatedPosts";

export default function PostDetailsLayout() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="mb-4 text-3xl font-bold text-heading">
          المقال غير موجود
        </h1>
        <Link to="/blog" className="text-primary">
          الرجوع للمدونة
        </Link>
      </section>
    );
  }

  return (
    <>
      <PostHero post={post} />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="order-2 min-w-0 lg:order-1">
            <Outlet context={{ post }} />
          </div>
          <PostSidebar post={post} />
        </div>
        <RelatedPosts post={post} />
      </div>
    </>
  );
}
