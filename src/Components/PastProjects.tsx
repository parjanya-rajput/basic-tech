import { useNavigate } from "react-router-dom";
import useNavigateWithScroll from "../CustomHooks/customHooks";
import { projects } from "../Constants/ProjectsData";
// const projects = [
//   {
//     logo: "https://raw.githubusercontent.com/basictech01/kumbh-milan/refs/heads/main/assets/cover.png",
//     projectName: "Kumbh Milan Social matching in Kumbh Mela",
//     subtitle: "Social matching in Kumbh Mela",
//     clientInfo: [
//       { label: "Client", value: "Kumbh Milan Inc." },
//       { label: "Vertical", value: "Social Networking" },
//       { label: "Product", value: "Matchmaking App" },
//       { label: "Industry", value: "Community & Relationships" },
//       { label: "Company size", value: "51-200 employees" },
//     ],
//     businessRequirement:
//       "Create a modern matchmaking platform with AI-based compatibility scoring.",
//     features: [
//       "AI-powered matchmaking",
//       "Secure and private messaging",
//       "Advanced profile customization",
//     ],
//     featureImage: "https://picsum.photos/300/200?random=6",
//     challenge: "Balancing user privacy with data-driven matchmaking analytics.",
//     design: "A sleek, intuitive interface with personalized recommendations.",
//     designImage: "https://picsum.photos/100/100?random=6",
//     solution:
//       "Developed a scalable platform with real-time chat and AI-driven matchmaking.",
//     solutionImage: "https://picsum.photos/100/100?random=6",
//     solutionPoints: [
//       "Integrated AI compatibility scoring",
//       "Ensured GDPR-compliant data security",
//       "Optimized user engagement with personalized suggestions",
//     ],
//   },
//   {
//     logo: "https://picsum.photos/150/40?random=2",
//     projectName: "Arrive - Design Your Dream Home",
//     subtitle: "Highly Customizable Interior Design Themes",
//     clientInfo: [
//       { label: "Client", value: "LulaMix" },
//       { label: "Vertical", value: "Interior Design" },
//       { label: "Product", value: "Home Customization App" },
//       { label: "Industry", value: "Home & Living" },
//       { label: "Company size", value: "101-500 employees" },
//     ],
//     businessRequirement:
//       "Enable users to visualize and customize home designs effortlessly.",
//     features: [
//       "3D home design simulation",
//       "Customizable interior themes",
//       "Furniture and decor recommendations",
//     ],
//     featureImage: "https://picsum.photos/300/200?random=7",
//     challenge:
//       "Providing realistic 3D renderings with minimal processing power.",
//     design: "A clean and immersive UI with drag-and-drop customization.",
//     designImage: "https://picsum.photos/100/100?random=7",
//     solution:
//       "Developed a WebGL-based 3D modeling tool integrated with real-time rendering.",
//     solutionImage: "https://picsum.photos/100/100?random=7",
//     solutionPoints: [
//       "Implemented high-performance 3D rendering",
//       "Integrated a vast library of furniture and decor",
//       "Optimized app performance for smooth UX",
//     ],
//   },
//   {
//     logo: "https://picsum.photos/150/40?random=2",
//     projectName: "Arrive - Design Your Dream Home",
//     subtitle: "Highly Customizable Interior Design Themes",
//     clientInfo: [
//       { label: "Client", value: "LulaMix" },
//       { label: "Vertical", value: "Interior Design" },
//       { label: "Product", value: "Home Customization App" },
//       { label: "Industry", value: "Home & Living" },
//       { label: "Company size", value: "101-500 employees" },
//     ],
//     businessRequirement:
//       "Enable users to visualize and customize home designs effortlessly.",
//     features: [
//       "3D home design simulation",
//       "Customizable interior themes",
//       "Furniture and decor recommendations",
//     ],
//     featureImage: "https://picsum.photos/300/200?random=7",
//     challenge:
//       "Providing realistic 3D renderings with minimal processing power.",
//     design: "A clean and immersive UI with drag-and-drop customization.",
//     designImage: "https://picsum.photos/100/100?random=7",
//     solution:
//       "Developed a WebGL-based 3D modeling tool integrated with real-time rendering.",
//     solutionImage: "https://picsum.photos/100/100?random=7",
//     solutionPoints: [
//       "Implemented high-performance 3D rendering",
//       "Integrated a vast library of furniture and decor",
//       "Optimized app performance for smooth UX",
//     ],
//   },
//   {
//     logo: "https://picsum.photos/150/40?random=2",
//     projectName: "Arrive - Design Your Dream Home",
//     subtitle: "Highly Customizable Interior Design Themes",
//     clientInfo: [
//       { label: "Client", value: "LulaMix" },
//       { label: "Vertical", value: "Interior Design" },
//       { label: "Product", value: "Home Customization App" },
//       { label: "Industry", value: "Home & Living" },
//       { label: "Company size", value: "101-500 employees" },
//     ],
//     businessRequirement:
//       "Enable users to visualize and customize home designs effortlessly.",
//     features: [
//       "3D home design simulation",
//       "Customizable interior themes",
//       "Furniture and decor recommendations",
//     ],
//     featureImage: "https://picsum.photos/300/200?random=7",
//     challenge:
//       "Providing realistic 3D renderings with minimal processing power.",
//     design: "A clean and immersive UI with drag-and-drop customization.",
//     designImage: "https://picsum.photos/100/100?random=7",
//     solution:
//       "Developed a WebGL-based 3D modeling tool integrated with real-time rendering.",
//     solutionImage: "https://picsum.photos/100/100?random=7",
//     solutionPoints: [
//       "Implemented high-performance 3D rendering",
//       "Integrated a vast library of furniture and decor",
//       "Optimized app performance for smooth UX",
//     ],
//   },
//   {
//     logo: "https://picsum.photos/150/40?random=2",
//     projectName: "Arrive - Design Your Dream Home",
//     subtitle: "Highly Customizable Interior Design Themes",
//     clientInfo: [
//       { label: "Client", value: "LulaMix" },
//       { label: "Vertical", value: "Interior Design" },
//       { label: "Product", value: "Home Customization App" },
//       { label: "Industry", value: "Home & Living" },
//       { label: "Company size", value: "101-500 employees" },
//     ],
//     businessRequirement:
//       "Enable users to visualize and customize home designs effortlessly.",
//     features: [
//       "3D home design simulation",
//       "Customizable interior themes",
//       "Furniture and decor recommendations",
//     ],
//     featureImage: "https://picsum.photos/300/200?random=7",
//     challenge:
//       "Providing realistic 3D renderings with minimal processing power.",
//     design: "A clean and immersive UI with drag-and-drop customization.",
//     designImage: "https://picsum.photos/100/100?random=7",
//     solution:
//       "Developed a WebGL-based 3D modeling tool integrated with real-time rendering.",
//     solutionImage: "https://picsum.photos/100/100?random=7",
//     solutionPoints: [
//       "Implemented high-performance 3D rendering",
//       "Integrated a vast library of furniture and decor",
//       "Optimized app performance for smooth UX",
//     ],
//   },

//   {
//     logo: "https://picsum.photos/150/40?random=3",
//     projectName: "DYT - Social Engagement Hub",
//     subtitle: "Your go-to platform for social growth",
//     clientInfo: [
//       { label: "Client", value: "DYT Media" },
//       { label: "Vertical", value: "Social Networking" },
//       { label: "Product", value: "Social Engagement Platform" },
//       { label: "Industry", value: "Digital Media" },
//       { label: "Company size", value: "201-500 employees" },
//     ],
//     businessRequirement:
//       "Enhance user engagement with AI-driven content discovery and social networking.",
//     features: [
//       "AI-driven content curation",
//       "Real-time social interactions",
//       "Influencer collaboration tools",
//     ],
//     featureImage: "https://picsum.photos/300/200?random=8",
//     challenge: "Keeping users engaged in a competitive social media landscape.",
//     design: "A visually dynamic interface with personalized content feeds.",
//     designImage: "https://picsum.photos/100/100?random=8",
//     solution:
//       "Developed an AI-powered platform that enhances user interactions and engagement.",
//     solutionImage: "https://picsum.photos/100/100?random=8",
//     solutionPoints: [
//       "Implemented real-time engagement tracking",
//       "Optimized recommendation algorithms",
//       "Enhanced social media sharing capabilities",
//     ],
//   },
// ];

const PastProjects = () => {
  const navigateWithScroll = useNavigateWithScroll();
  return (
    <section id="PastProject" className="py-10 bg-gradient-to-b from-blue-100 to-green-100 p-4">
      <h2 className="text-center text-2xl font-bold text-blue-600 font-neue">
        Past Projects
      </h2>
      <div className="w-full px-20 mx-auto mt-6 flex flex-col gap-10">
        {/* First Project with Full Background Image */}
        {projects.slice(0, 3).map((project, index) => (
          <div
            onClick={() => {
              navigateWithScroll("/projects", { project });
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="max-h-[50vh] relative rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
          >
            <img
              src={project.logo}
              alt="Project Background"
              className="w-full h-full object-cover "
            />
            {/* Replace the solid overlay with a gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-green-800/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10 text-white max-w-xl">
              <h3 className="text-2xl font-extrabold font-inter">{project.projectName}</h3>
              <p className="mt-2 opacity-90 font-inter">{project.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastProjects;
