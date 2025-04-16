import React from 'react';
import challengeImage from '../assets/default_challenge.svg.png';
import designImage from '../assets/default_design.svg.png';
import solutionImage from '../assets/default_solution.svg fill.png';
import TechStackPage from '../Components/TechStack';
import ProcessWeFollow from '../Components/ProcessWeFollow';
import { Contactus } from '../Components/Contactus';
import { Faq } from '../Components/faq';
import OtherProjects from '../Components/OtherProjects';
import { useLocation } from 'react-router-dom';
import { projects } from '../Constants/ProjectsData';

// const defaultProjectData = {
//   "logo": "https://picsum.photos/150/40?random=1",
//   "projectName": "UrbanMatch - The Journey of Love",
//   "subtitle": "Where Love Meets Marriage",
//   "clientInfo": [
//     { "label": "Client", "value": "UrbanMatch Inc." },
//     { "label": "Vertical", "value": "Social Networking" },
//     { "label": "Product", "value": "Matchmaking App" },
//     { "label": "Industry", "value": "Community & Relationships" },
//     { "label": "Company size", "value": "51-200 employees" }
//   ],
//   "businessRequirement": "Create a modern matchmaking platform with AI-based compatibility scoring.",
//   "features": [
//     "AI-powered matchmaking",
//     "Secure and private messaging",
//     "Advanced profile customization"
//   ],
//   "featureImage": "https://picsum.photos/300/200?random=6",
//   "challenge": "Balancing user privacy with data-driven matchmaking analytics.",
//   "design": "A sleek, intuitive interface with personalized recommendations.",
//   "designImage": "https://picsum.photos/100/100?random=6",
//   "solution": "Developed a scalable platform with real-time chat and AI-driven matchmaking.",
//   "solutionImage": "https://picsum.photos/100/100?random=6",
//   "solutionPoints": [
//     "Integrated AI compatibility scoring",
//     "Ensured GDPR-compliant data security",
//     "Optimized user engagement with personalized suggestions"
//   ]
// }
// Glass Effect Style
export const glassEffect = "backdrop-blur-lg bg-white/50 border border-white/30 shadow-xl rounded-lg";

// Header Section Component
export const HeaderSection = ({ logo, projectName, subtitle }: { logo: string; projectName: string; subtitle: string }) => (
  <div className="text-center mb-10 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-100/60 to-white/60 backdrop-blur-sm">
    <div className="flex justify-center mb-6">
      <img src={logo} alt="Company Logo" className="h-10" />
    </div>
    <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 font-neue">{projectName}</h1>
    <h2 className="text-2xl text-cyan-500 font-medium font-neue">{subtitle}</h2>
  </div>
);

// Client Info Section Component
export const ClientInfoSection = ({ clientInfo }: { clientInfo: { label: string; value: string }[] }) => (
  <div className={`grid grid-cols-2 md:grid-cols-5 gap-3 mb-10 border-b-2 border-white/60 rounded-lg ${glassEffect}`}>
    {clientInfo.map((item, index) => (
      <div key={index} className="p-4 text-center">
        <div className="text-blue-600 font-bold text-sm mb-1">{item.label}</div>
        <div className="text-gray-700 text-sm">{item.value}</div>
      </div>
    ))}
  </div>
);

// Business Requirement Section Component
export const BusinessRequirementSection = ({ businessRequirement }: { businessRequirement: string }) => (
  <div className="mb-12">
    <h3 className="text-2xl text-blue-600 font-bold text-center mb-4">Business Requirement</h3>
    <div className={`p-6 rounded-xl ${glassEffect}`}>
      <p className="text-gray-700 leading-relaxed">{businessRequirement}</p>
    </div>
  </div>
);

// Features Section Component
export const FeaturesSection = ({ features, featureImage }: { features: string[]; featureImage: string }) => (
  <div className="mb-12">
    <div className={`p-6 rounded-xl ${glassEffect} grid grid-cols-1 md:grid-cols-3 gap-6`}>
      <div>
        <h3 className="text-2xl text-blue-600 font-bold mb-4">Features</h3>
        <div className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="text-gray-700">• {feature}</div>
          ))}
        </div>
      </div>
      <div className="gap-4 md:gap-6 mt-8 col-span-2 items-center flex justify-center">
        <img src={featureImage} alt="Feature" className="rounded-lg shadow-md object-cover w-96 h-auto" />
      </div>
    </div>
  </div>
);

// Challenge Section Component
export const ChallengeSection = ({ challenge }: { challenge: string }) => (
  <div className="mb-12">
    <div className={`p-6 rounded-xl ${glassEffect}`}>
      <h3 className="text-2xl text-blue-600 font-bold text-center mb-4">The Challenge</h3>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img src={challengeImage} alt="Challenge Icon" className="w-60 h-60" />
        <div className="w-full md:w-3/5">
          <p className="text-gray-700 leading-relaxed mb-4">{challenge}</p>
        </div>
      </div>
    </div>
  </div>
);

// Design Section Component
export const DesignSection = ({ design }: { design: string }) => (
  <div className="mb-12">
    <div className={`p-6 rounded-xl ${glassEffect}`}>
      <h3 className="text-2xl text-blue-600 font-bold text-center mb-4">The Design</h3>
      <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
        <img src={designImage} alt="Design Icon" className="w-60 h-60 object-cover" />
        <div className="w-full md:w-3/5 mr-auto">
          <p className="text-gray-700 leading-relaxed mb-4">{design}</p>
        </div>
      </div>
    </div>
  </div>
);

// Solution Section Component
export const SolutionSection = ({ solution, solutionPoints }: { solution: string; solutionPoints: string[] }) => (
  <div className="mb-12">
    <div className={`p-6 rounded-xl ${glassEffect}`}>
      <h3 className="text-2xl text-blue-600 font-bold text-center mb-4">The Solution</h3>
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <img src={solutionImage} alt="Solution Icon" className="w-60 h-60 object-cover" />
        <div className="w-full md:w-3/5">
          <p className="text-gray-700 leading-relaxed mb-4">{solution}</p>
          <div className="space-y-2">
            {solutionPoints.map((point, index) => (
              <div key={index} className="text-gray-700">• {point}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Main Component
const ProjectCaseStudy = () => {
  const location = useLocation();
  const Projdata = location.state;
  const data = Projdata?.project ?? projects[0];
  console.log("Project Data:", data);
  return (
    <div className="relative  min-h-screen">
      <div
        className="absolute top-1/6 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))",
        }}
      ></div>
      <div
        className="absolute z-0 left-1/2 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))",
        }}
      ></div>
      <div
        className="absolute z-0 right-0 top-1/3 rounded-full blur-3xl h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))",
        }}
      ></div>
      <div
        className="absolute z-0 left-0 top-2/3 rounded-full blur-3xl h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))",
        }}
      ></div>
      <div
        className="absolute z-0 right-0 bottom-1/12 rounded-full blur-3xl h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-50 z-0"
        style={{
          background:
            "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))",
        }}
      ></div>
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <HeaderSection logo={data?.logo} projectName={data.projectName} subtitle={data.subtitle} />
        <ClientInfoSection clientInfo={data.clientInfo} />
        <BusinessRequirementSection businessRequirement={data.businessRequirement} />
        <FeaturesSection features={data.features} featureImage={data.featureImage} />
        <ChallengeSection challenge={data.challenge} />
        <DesignSection design={data.design} />
        <SolutionSection solution={data.solution} solutionPoints={data.solutionPoints} />
        <TechStackPage />
        <ProcessWeFollow />
        <OtherProjects />
        <Contactus />
        <Faq />
      </div>
    </div>
  )
}

export default ProjectCaseStudy;