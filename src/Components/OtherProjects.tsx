import { projects } from "../Constants/ProjectsData";
import useNavigateWithScroll from "../CustomHooks/customHooks";

const OtherProjects = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6 font-neue">
        Other Projects
      </h2>

      <ProductCards />
    </div>
  );
};


const ProductCard = ({ project }) => {
  const navigateWithScroll = useNavigateWithScroll();
  return (
    <div className="bg-white/80 shadow-lg rounded-xl  flex flex-col gap-4 hover:shadow-xl transition-all z-10">
      <img
        src={project.logo}
        alt={project.projectName}
        className="w-full h-40 object-cover rounded-lg"
      />
      <div className="flex flex-row gap-2 items-center justify-between px-5 py-1">
        <div className="flex-2">
          <p className="text-gray-800 text-sm font-semibold font-agrandir-heavy">
            {project.projectName}
          </p>
          <p className="text-gray-500 text-sm font-agrandir font-bold">{project.subtitle}</p>
        </div>
        <button
          onClick={() => {
            navigateWithScroll(`/projects`, { project: project });
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
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
        {projects.map((project) => (
          <ProductCard project={project} />
        ))}
      </div>
    </section>
  );
};

export default OtherProjects;
