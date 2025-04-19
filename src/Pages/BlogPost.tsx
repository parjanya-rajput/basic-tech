import { useLocation } from "react-router-dom";
import BlogsSlider from "../Components/BlogComp/BlogsSlider";
import BlogGrid from "../Components/BlogComp/RecentBlogs";
import { Contactus } from "../Components/Contactus";
import { Faq } from "../Components/faq";
import ProcessWeFollow from "../Components/ProcessWeFollow";

const BlogPostPage = () => {
  return (
    <>
      <BlogContent />
      <BlogGrid />
      <BlogsSlider />
      <Contactus />
    </>
  );
};

// const BlogContent = () => {

//   // Default blogData object
//   const defaultBlog = {
//     title:
//       "Dive Into Expert Insights, Industry Trends, And Actionable Strategies.",
//     image: "https://picsum.photos/800/400?random=1", // Random header image
//     sections: [
//       {
//         subtitle: "Elevate your Digital Presence",
//         paragraphs: [
//           "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//           "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
//         ],
//         image: "https://picsum.photos/400/250?random=2", // Random section image
//       },
//       {
//         subtitle: "Future of Technology",
//         paragraphs: [
//           "The rapid evolution of technology is reshaping industries at an unprecedented pace. Artificial intelligence, automation, and big data analytics are driving innovation and efficiency.",
//           "Companies that adapt to these technological advancements will thrive in an increasingly digital world.",
//         ],
//         image: "https://picsum.photos/400/250?random=3", // Another random image
//       },
//     ],
//   };
//   const location = useLocation();
//   const data = location.state;
//   console.log(location)
//   const blog = data?.blog
//   const blogData = blog ?? defaultBlog;

//   return (
//     <div className="max-w-5xl mx-auto p-6 md:p-12">
//       {/* Hero Section */}
//       <h1 className="text-2xl md:text-4xl font-bold text-center text-blue-600 mb-8 leading-snug">
//         {blogData.title}
//       </h1>

//       {/* Blog Header Section */}
//       <div className="relative mb-8">
//         <h2 className="text-2xl font-bold text-blue-600 mb-4">Blog</h2>
//         <img
//           src={blogData.image}
//           alt="Blog Header"
//           className="w-full rounded-lg shadow-lg"
//         />
//       </div>

//       {/* Blog Sections */}
//       {blogData.sections.map((section, index) => (
//         <div key={index} className="mb-12">
//           {/* Subtitle */}
//           <h2 className="text-xl font-bold text-blue-600 mb-4">
//             {section.subtitle}
//           </h2>
//           {/* Paragraphs */}
//           <p className="text-gray-700 leading-relaxed mb-4">
//             {section.paragraphs[0]}
//           </p>
//           {/* <p className="text-gray-700 leading-relaxed">{section.paragraphs[1]}</p> */}

//           {/* Two-Column Layout for Image & Text */}
//           <div className="flex flex-col md:flex-row items-start gap-6 mt-8">
//             <img
//               src={section.image}
//               alt={section.subtitle}
//               className="w-full md:w-1/2 rounded-lg shadow-lg"
//             />
//             <p className="text-gray-700 md:w-1/2 leading-relaxed">
//               {section.paragraphs[1]}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
const BlogContent = () => {
  const defaultBlog = {
    title:
      "Dive Into Expert Insights, Industry Trends, And Actionable Strategies.",
    image: "https://picsum.photos/800/400?random=1", // Random header image
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

  const location = useLocation();
  const data = location.state;
  const blog = data?.blog;
  const blogData = blog ?? defaultBlog;

  // Helper function to render paragraphs with inline breakers
  const renderParagraph = (text: string) => {
    if (text.includes("|")) {
      return (
        <ul className="space-y-2 list-none">
          {text.split("|").map((item, index) => (
            <li key={index} className="flex items-start">
              {item.trim() && (
                <span className="text-gray-700 leading-relaxed font-segoe">
                  {item.trim()}
                </span>
              )}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="text-gray-700 leading-relaxed mb-4">{text}</p>;
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-12">
      {/* Hero Section */}
      <h1 className="font-neue text-2xl md:text-4xl font-bold text-center text-blue-600 mb-8 leading-snug">
        {blogData.title}
      </h1>

      {/* Blog Header Section */}
      <div className="relative mb-8">
        <div className="w-full h-120 overflow-hidden rounded-lg shadow-lg">
          <img
            src={blogData.image}
            alt="Blog Header"
            className="w-full h-full object-fit"
          />
        </div>
      </div>

      {/* Blog Sections */}
      {blogData.sections.map((section, index) => (
        <div key={index} className="mb-16">
          {/* Subtitle */}
          <h2 className="text-xl font-bold text-blue-600 mb-6 font-neue">
            {section.subtitle}
          </h2>

          {/* First paragraph above the images */}
          {section.paragraphs.length > 0 && (
            <div className="mb-8">
              {renderParagraph(section.paragraphs[0])}
            </div>
          )}

          {/* Content layout based on what's available */}
          <div className="mt-6 mb-8">
            {/* Multiple images */}
            {section.images && section.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {section.images.map((imgSrc, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="rounded-lg shadow-lg overflow-hidden bg-gray-50 h-64"
                  >
                    <img
                      src={imgSrc}
                      alt={`${section.subtitle} ${imgIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Single image - handled differently */}
            {section.image && !section.images && (
              <div className={section.paragraphs.length > 1 ? "flex flex-col md:flex-row gap-6" : ""}>
                <div
                  className={`rounded-lg shadow-lg overflow-hidden bg-gray-50 h-64 ${section.paragraphs.length > 1 ? "md:w-1/2" : "w-full"
                    }`}
                >
                  <img
                    src={section.image}
                    alt={section.subtitle}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Additional paragraphs beside image */}
                {section.paragraphs.length > 1 && (
                  <div className="md:w-1/2 mt-6 md:mt-0">
                    {section.paragraphs.slice(1).map((paragraph, pIndex) => (
                      <div key={pIndex} className="mb-4">
                        {renderParagraph(paragraph)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Additional paragraphs below multiple images */}
            {section.images && section.paragraphs.length > 1 && (
              <div className="mt-6">
                {section.paragraphs.slice(1).map((paragraph, pIndex) => (
                  <div key={pIndex} className="mb-4">
                    {renderParagraph(paragraph)}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostPage;
