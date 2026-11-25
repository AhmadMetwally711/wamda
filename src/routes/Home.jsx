import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomePosts from "../components/home/HomePosts";
import HomeCategories from "../components/home/HomeCategories";
import HomeLatestPosts from "../components/home/HomeLatestPosts";
import HomeNewsletter from "../components/home/HomeNewsletter";
export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePosts />
      <HomeCategories />
      <HomeLatestPosts />
      <HomeNewsletter />
    </>
  );
}
