import useNavigateWithScroll from "../../CustomHooks/customHooks";
import { blogs } from "../../Constants/BlogData";


const BlogCard = ({blog}) => {
  const {title, description, image }=blog
  const navigateWithScroll = useNavigateWithScroll();
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <button
          onClick={() => navigateWithScroll("/blog",{blog:blog})}
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
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
