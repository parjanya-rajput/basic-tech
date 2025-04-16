import React from "react";
import ServicesSection, { ServiceCardContainer } from "./Home";
import OtherProjects from "../Components/OtherProjects";
import ProcessWeFollow from "../Components/ProcessWeFollow";
import { Contactus } from "../Components/Contactus";
import { Faq } from "../Components/faq";
import AboutImage from "../assets/About.png";
export const AboutUs = () => {
  return (
    <section className="py-16 relative overflow-hidden">
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
      <AboutUsCard />
      <div className="max-w-5xl mx-auto my-4">
        {" "}
        <ServiceCardContainer />
      </div>
      <OtherProjects />
      <ProcessWeFollow />
      <Contactus />
      <Faq />
    </section>
  );
};

const AboutUsCard = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 py-4 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6 text-center font-neue">
          About Us.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={AboutImage}
            alt="Team collaboration"
            className="w-56 h-56 object-cover rounded-lg"
          />
          <div className="text-gray-700 text-lg leading-relaxed font-agrandir">
            <p>
              We are a company founded by 10x engineers from top tech firms like
              Google, Meta, LinkedIn, and Microsoft. With deep technical
              expertise and experience building products used by millions, we
              understand technology at its core.
            </p>
            <p className="mt-4">
              Unlike traditional IT consultancies that rely on subpar talent,
              leading to buggy, delayed, and over-budget projects, we take a
              different approach. We believe AI is amplifying individual impact
              to an unprecedented degree—enabling elite engineers to build
              high-quality solutions directly for businesses while earning at
              par with Big Tech.
            </p>
          </div>
        </div>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          Our mission is to leverage AI and top-tier engineering talent to
          deliver IT solutions that are faster, more cost-effective, and far
          superior in quality. If you are looking for 10x engineers to build
          your next IT product/startup, you should consider us.
        </p>
      </div>
    </div>
  );
};
