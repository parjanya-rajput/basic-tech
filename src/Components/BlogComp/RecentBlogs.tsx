import useNavigateWithScroll from "../../CustomHooks/customHooks";
import { blogs } from "../../Constants/BlogData";
import { heroSlides } from "../../Constants/BlogData";


const BlogCard = ({ blog }) => {
  const { title, description, image } = blog
  const navigateWithScroll = useNavigateWithScroll();

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  const getFullBlogData = () => {
    const fullBlog = heroSlides.find(slide => slide.title === title);
    return fullBlog;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 h-[32rem] flex flex-col">
      <div className="h-48 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-ibm font-bold h-14 line-clamp-2">
          {truncateText(title, 60)}
        </h3>
        <p className="text-gray-600 mt-2 font-ibm flex-1 line-clamp-4">
          {truncateText(description, 120)}
        </p>
        <button
          onClick={() => {
            const fullBlog = getFullBlogData();
            navigateWithScroll("/blog", { blog: fullBlog });
          }}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 w-full font-ibm font-bold"
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
      <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-600 mb-8 font-neue">
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
