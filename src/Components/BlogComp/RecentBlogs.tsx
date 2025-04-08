import React from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Mastering Web Development",
    content:
      "Discover the latest trends and best practices in modern web development.",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    title: "The Rise of AI in Everyday Life",
    content:
      "How artificial intelligence is transforming industries and daily experiences.",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    title: "Blockchain Beyond Cryptocurrency",
    content:
      "Exploring the potential applications of blockchain technology across various sectors.",
    image: "https://picsum.photos/300/200?random=3",
  },
  {
    title: "Cybersecurity in the Digital Age",
    content:
      "Why protecting personal and business data is more crucial than ever.",
    image: "https://picsum.photos/300/200?random=4",
  },
  {
    title: "Cloud Computing: Future of Data Storage",
    content:
      "How cloud computing is reshaping data accessibility and security.",
    image: "https://picsum.photos/300/200?random=5",
  },
  {
    title: "UX/UI Design Trends for 2025",
    content:
      "A deep dive into the future of user experience and interface design.",
    image: "https://picsum.photos/300/200?random=6",
  },
];
const BlogCard = ({ title, content, image }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{content}</p>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Read the Post
        </button>
      </div>
    </div>
  );
};

const BlogGrid = () => {
  return (
    <section className="py-16 px-6 md:px-20 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8">
        Read Blogs Here
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
