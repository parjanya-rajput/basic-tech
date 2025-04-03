import BlogsSlider from "../Components/BlogComp/BlogsSlider";
import BlogGrid from "../Components/BlogComp/RecentBlogs";
import { Contactus } from "../Components/Contactus";
import { Faq } from "../Components/faq";
import ProcessWeFollow from "../Components/ProcessWeFollow";


const BlogPostPage = () => {
  return (
    <>
<BlogContent blog={undefined}/>
          <BlogGrid />
          <BlogsSlider />
          <ProcessWeFollow />
          <Contactus/>
                <Faq/>
          </>
  );
};

const BlogContent = ({ blog }) => {
    // Default blogData object
    const defaultBlog = {
      title: "Dive Into Expert Insights, Industry Trends, And Actionable Strategies.",
      headerImage: "https://picsum.photos/800/400?random=1", // Random header image
      sections: [
        {
          subtitle: "Elevate your Digital Presence",
          paragraphs: [
            "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          ],
          image: "https://picsum.photos/400/250?random=2", // Random section image
        },
        {
          subtitle: "Future of Technology",
          paragraphs: [
            "The rapid evolution of technology is reshaping industries at an unprecedented pace. Artificial intelligence, automation, and big data analytics are driving innovation and efficiency.",
            "Companies that adapt to these technological advancements will thrive in an increasingly digital world.",
          ],
          image: "https://picsum.photos/400/250?random=3", // Another random image
        },
      ],
    };
  
    const blogData = blog || defaultBlog;
  
    return (
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        {/* Hero Section */}
        <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-600 mb-8 leading-snug">
          {blogData.title}
        </h1>
  
        {/* Blog Header Section */}
        <div className="relative mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Blog</h2>
          <img
            src={blogData.headerImage}
            alt="Blog Header"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
  
        {/* Blog Sections */}
        {blogData.sections.map((section, index) => (
          <div key={index} className="mb-12">
            {/* Subtitle */}
            <h2 className="text-xl font-bold text-blue-600 mb-4">{section.subtitle}</h2>
            {/* Paragraphs */}
            <p className="text-gray-700 leading-relaxed mb-4">{section.paragraphs[0]}</p>
            {/* <p className="text-gray-700 leading-relaxed">{section.paragraphs[1]}</p> */}
  
            {/* Two-Column Layout for Image & Text */}
            <div className="flex flex-col md:flex-row items-start gap-6 mt-8">
              <img
                src={section.image}
                alt={section.subtitle}
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              />
              <p className="text-gray-700 md:w-1/2 leading-relaxed">
              {section.paragraphs[1]}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  
  
export default BlogPostPage;
