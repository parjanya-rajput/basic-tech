import React from 'react'
import { useNavigate } from 'react-router-dom'

const OtherProjects = () => {

  return (
    <div className='max-w-5xl mx-auto'>       
   <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Other Projects</h2>
   
<ProductCards/>
   </div>
  )
}
const products = [
    {
      "logo": "https://picsum.photos/150/40?random=1",
      "projectName": "UrbanMatch - The Journey of Love",
      "subtitle": "Where Love Meets Marriage",
      "clientInfo": [
        { "label": "Client", "value": "UrbanMatch Inc." },
        { "label": "Vertical", "value": "Social Networking" },
        { "label": "Product", "value": "Matchmaking App" },
        { "label": "Industry", "value": "Community & Relationships" },
        { "label": "Company size", "value": "51-200 employees" }
      ],
      "businessRequirement": "Create a modern matchmaking platform with AI-based compatibility scoring.",
      "features": [
        "AI-powered matchmaking",
        "Secure and private messaging",
        "Advanced profile customization"
      ],
      "featureImage": "https://picsum.photos/300/200?random=6",
      "challenge": "Balancing user privacy with data-driven matchmaking analytics.",
      "design": "A sleek, intuitive interface with personalized recommendations.",
      "designImage": "https://picsum.photos/100/100?random=6",
      "solution": "Developed a scalable platform with real-time chat and AI-driven matchmaking.",
      "solutionImage": "https://picsum.photos/100/100?random=6",
      "solutionPoints": [
        "Integrated AI compatibility scoring",
        "Ensured GDPR-compliant data security",
        "Optimized user engagement with personalized suggestions"
      ]
    },
    {
      "logo": "https://picsum.photos/150/40?random=2",
      "projectName": "Arrive - Design Your Dream Home",
      "subtitle": "Highly Customizable Interior Design Themes",
      "clientInfo": [
        { "label": "Client", "value": "LulaMix" },
        { "label": "Vertical", "value": "Interior Design" },
        { "label": "Product", "value": "Home Customization App" },
        { "label": "Industry", "value": "Home & Living" },
        { "label": "Company size", "value": "101-500 employees" }
      ],
      "businessRequirement": "Enable users to visualize and customize home designs effortlessly.",
      "features": [
        "3D home design simulation",
        "Customizable interior themes",
        "Furniture and decor recommendations"
      ],
      "featureImage": "https://picsum.photos/300/200?random=7",
      "challenge": "Providing realistic 3D renderings with minimal processing power.",
      "design": "A clean and immersive UI with drag-and-drop customization.",
      "designImage": "https://picsum.photos/100/100?random=7",
      "solution": "Developed a WebGL-based 3D modeling tool integrated with real-time rendering.",
      "solutionImage": "https://picsum.photos/100/100?random=7",
      "solutionPoints": [
        "Implemented high-performance 3D rendering",
        "Integrated a vast library of furniture and decor",
        "Optimized app performance for smooth UX"
      ]
    },
    {
      "logo": "https://picsum.photos/150/40?random=2",
      "projectName": "Arrive - Design Your Dream Home",
      "subtitle": "Highly Customizable Interior Design Themes",
      "clientInfo": [
        { "label": "Client", "value": "LulaMix" },
        { "label": "Vertical", "value": "Interior Design" },
        { "label": "Product", "value": "Home Customization App" },
        { "label": "Industry", "value": "Home & Living" },
        { "label": "Company size", "value": "101-500 employees" }
      ],
      "businessRequirement": "Enable users to visualize and customize home designs effortlessly.",
      "features": [
        "3D home design simulation",
        "Customizable interior themes",
        "Furniture and decor recommendations"
      ],
      "featureImage": "https://picsum.photos/300/200?random=7",
      "challenge": "Providing realistic 3D renderings with minimal processing power.",
      "design": "A clean and immersive UI with drag-and-drop customization.",
      "designImage": "https://picsum.photos/100/100?random=7",
      "solution": "Developed a WebGL-based 3D modeling tool integrated with real-time rendering.",
      "solutionImage": "https://picsum.photos/100/100?random=7",
      "solutionPoints": [
        "Implemented high-performance 3D rendering",
        "Integrated a vast library of furniture and decor",
        "Optimized app performance for smooth UX"
      ]
    },
    {
      "logo": "https://picsum.photos/150/40?random=2",
      "projectName": "Arrive - Design Your Dream Home",
      "subtitle": "Highly Customizable Interior Design Themes",
      "clientInfo": [
        { "label": "Client", "value": "LulaMix" },
        { "label": "Vertical", "value": "Interior Design" },
        { "label": "Product", "value": "Home Customization App" },
        { "label": "Industry", "value": "Home & Living" },
        { "label": "Company size", "value": "101-500 employees" }
      ],
      "businessRequirement": "Enable users to visualize and customize home designs effortlessly.",
      "features": [
        "3D home design simulation",
        "Customizable interior themes",
        "Furniture and decor recommendations"
      ],
      "featureImage": "https://picsum.photos/300/200?random=7",
      "challenge": "Providing realistic 3D renderings with minimal processing power.",
      "design": "A clean and immersive UI with drag-and-drop customization.",
      "designImage": "https://picsum.photos/100/100?random=7",
      "solution": "Developed a WebGL-based 3D modeling tool integrated with real-time rendering.",
      "solutionImage": "https://picsum.photos/100/100?random=7",
      "solutionPoints": [
        "Implemented high-performance 3D rendering",
        "Integrated a vast library of furniture and decor",
        "Optimized app performance for smooth UX"
      ]
    },
    {
      "logo": "https://picsum.photos/150/40?random=2",
      "projectName": "Arrive - Design Your Dream Home",
      "subtitle": "Highly Customizable Interior Design Themes",
      "clientInfo": [
        { "label": "Client", "value": "LulaMix" },
        { "label": "Vertical", "value": "Interior Design" },
        { "label": "Product", "value": "Home Customization App" },
        { "label": "Industry", "value": "Home & Living" },
        { "label": "Company size", "value": "101-500 employees" }
      ],
      "businessRequirement": "Enable users to visualize and customize home designs effortlessly.",
      "features": [
        "3D home design simulation",
        "Customizable interior themes",
        "Furniture and decor recommendations"
      ],
      "featureImage": "https://picsum.photos/300/200?random=7",
      "challenge": "Providing realistic 3D renderings with minimal processing power.",
      "design": "A clean and immersive UI with drag-and-drop customization.",
      "designImage": "https://picsum.photos/100/100?random=7",
      "solution": "Developed a WebGL-based 3D modeling tool integrated with real-time rendering.",
      "solutionImage": "https://picsum.photos/100/100?random=7",
      "solutionPoints": [
        "Implemented high-performance 3D rendering",
        "Integrated a vast library of furniture and decor",
        "Optimized app performance for smooth UX"
      ]
    },

    {
      "logo": "https://picsum.photos/150/40?random=3",
      "projectName": "DYT - Social Engagement Hub",
      "subtitle": "Your go-to platform for social growth",
      "clientInfo": [
        { "label": "Client", "value": "DYT Media" },
        { "label": "Vertical", "value": "Social Networking" },
        { "label": "Product", "value": "Social Engagement Platform" },
        { "label": "Industry", "value": "Digital Media" },
        { "label": "Company size", "value": "201-500 employees" }
      ],
      "businessRequirement": "Enhance user engagement with AI-driven content discovery and social networking.",
      "features": [
        "AI-driven content curation",
        "Real-time social interactions",
        "Influencer collaboration tools"
      ],
      "featureImage": "https://picsum.photos/300/200?random=8",
      "challenge": "Keeping users engaged in a competitive social media landscape.",
      "design": "A visually dynamic interface with personalized content feeds.",
      "designImage": "https://picsum.photos/100/100?random=8",
      "solution": "Developed an AI-powered platform that enhances user interactions and engagement.",
      "solutionImage": "https://picsum.photos/100/100?random=8",
      "solutionPoints": [
        "Implemented real-time engagement tracking",
        "Optimized recommendation algorithms",
        "Enhanced social media sharing capabilities"
      ]
    }
  ]
  
  
  const ProductCard = ({ product }) => {
    const navigate=useNavigate();
    return (
      <div
        className="bg-white/80 shadow-lg rounded-xl  flex flex-col gap-4 hover:shadow-xl transition-all z-10"
      >
        <img
          src={product.featureImage}
          alt={product.projectName}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="flex flex-row gap-2 items-center justify-between px-5 py-1">
            <div className='flex-2'>
        <p className="text-gray-800 text-sm font-semibold">{product.projectName}</p>
        <p className="text-gray-500 text-sm">{product.subtitle}</p>
        </div>
        <button 
          onClick={() => {navigate(`/projects`, { state: { project:product } });window.scrollTo({ top: 0, behavior: "smooth" });;}} 
          className="bg-green-500 text-white text-sm py-2 px-4 rounded-2xl self-start hover:bg-green-600 flex-1"
        >
          View Page
        </button>
        </div>
      </div>
    );
  };
  
  const ProductCards = () => {
    return (
      <section className="py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>
    );
  };
  
export default OtherProjects