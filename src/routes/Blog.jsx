import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { posts } from "../data";
import BlogHero from "../components/blog/BlogHero";
import CategoryFilter from "../components/blog/CategoryFilter";
import BlogPosts from "../components/blog/BlogPosts";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") ?? "";

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory = !category || post.category === category;
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const clearFilters = () => {
    setSearch("");
    const next = new URLSearchParams(searchParams);
    next.delete("category");
    setSearchParams(next);
  };

  return (
    <>
      <BlogHero />
      <CategoryFilter search={search} onSearchChange={setSearch} />
      <BlogPosts
        posts={filteredPosts}
        category={category}
        search={search}
        onClearFilters={clearFilters}
      />
    </>
  );
}
