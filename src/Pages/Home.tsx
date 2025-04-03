import React from 'react';
import { ServiceCard } from '../Components/Servicecard';
import GifImage from '../assets/AI.gif'
import WhyChooseUs from '../Components/WhyChooseUs';
import { ChefronCard, ChefronCardText } from '../Components/ChefronCard';
import ProcessWeFollow from '../Components/ProcessWeFollow';
import TechStackPage from '../Components/TechStack';
import { Faq } from '../Components/faq';
import { Contact } from 'lucide-react';
import { Contactus } from '../Components/Contactus';
import PastProjects from '../Components/PastProjects';
const ServicesSection = () => {


  return (
    <>
    <section className="py-16 relative overflow-hidden">
      {/* Radial gradient background */}
      <div 
        className="absolute top-1/3 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-60 z-0"
        style={{
          background: "radial-gradient(circle at top right, yellow, rgba(240, 249, 255, 0.4))"
        }}
      >
        </div>
<div 
        className="absolute z-0 left-1/2 -top-1/6 rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-80 z-0"
        style={{
          background: "radial-gradient(circle at top right, purple, rgba(240, 249, 255, 0.4))"
        }}
      >
        </div>
<div 
        className="absolute z-0 left-2/3  rounded-full blur-3xl inset-0 h-100 w-100 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 opacity-80 z-0"
        style={{
          background: "radial-gradient(circle at top right, blue, rgba(240, 249, 255, 0.4))"
        }}
      >
        </div>


      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Heading section */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-5  items-center">
          <h2 className="text-5xl col-span-3 md:text-6xl font-bold text-blue-600 mb-2">
            Software That <span className="text-teal-500">Fits,</span><br />
            Made Just For <span className="text-teal-500">You.</span>
          </h2>
          {/* Placeholder for your custom image */}
          <div className="opacity-90 col-span-2">
           <img src={GifImage} alt="Placeholder" className="w-full h-full object-cover " />
          </div>
        </div>

        <ServiceCardContainer />

      </div>
    </section>
    <section className="py-16 relative overflow-hidden">
    <WhyChooseUs />
    <ProcessWeFollow/>
    <PastProjects/>
    <TechStackPage/>
    <Contactus/> 
    <Faq/>
    </section>
    </>
  );
};

export const ServiceCardContainer = () => {
  const services = [
    {
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quaerat",
      iconPlaceholder: "</>"
    },
    {
      title: "App Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quaerat",
      iconPlaceholder: "<📱>"
    },
    {
      title: "Blockchain Dev",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quaerat",
      iconPlaceholder: "⛓️"
    },
    {
      title: "Code Outsource",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quaerat",
      iconPlaceholder: "⚙️"
    },
    {
      title: "Backend Dev",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quaerat",
      iconPlaceholder: "{ }"
    },
    {
      title: "AI Integration",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit quaerat",
      iconPlaceholder: "🤖"
    }
  ];
  return(
          <div className="bg-white/80 bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-semibold text-blue-700 text-center mb-8">Services That We Offer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                iconPlaceholder={service.iconPlaceholder}
                gradientDirection={index % 2 === 0 ? 'ltr' : 'rtl'}
              />
            ))}
          </div>
        </div>
  );
}
export default ServicesSection;