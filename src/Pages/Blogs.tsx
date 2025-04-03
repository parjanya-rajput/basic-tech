import React from "react";
import HeroSection from "../Components/BlogComp/BlogsHero";
import BlogGrid from "../Components/BlogComp/RecentBlogs";
import BlogsSlider from "../Components/BlogComp/BlogsSlider";
import ProcessWeFollow from "../Components/ProcessWeFollow";
import { Contactus } from "../Components/Contactus";
import { Faq } from "../Components/faq";


const BlogPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100">
      <HeroSection />
      <BlogGrid />
      <BlogsSlider />
      <ProcessWeFollow />
      <Contactus/>
      <Faq/>
    </div>
  );
};

export default BlogPage;
