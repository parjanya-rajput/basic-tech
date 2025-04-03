import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const heroSlides = [
  {
    title: "Elevate your Digital Presence",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.",
    image: "https://picsum.photos/500/300?random=4",
  },
  {
    title: "Stay Ahead in the Digital World",
    description:
      "Leverage AI and top-tier engineering talent to build fast, cost-effective, and high-quality solutions.",
    image: "https://picsum.photos/500/300?random=3",
  },
];

const HeroSection = () => {
    const navigate=useNavigate();
  return (
    <section className="text-center py-16 px-6 md:px-20">
      <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-6">
        Dive Into Expert Insights, Industry Trends, <br /> And Actionable Strategies.
      </h1>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full max-w-6xl mx-auto"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="p-16">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-left max-w-lg">
                <h2 className="text-xl font-semibold text-blue-600">{slide.title}</h2>
                <p className="text-gray-600 mt-4">{slide.description}</p>
                <button onClick={()=>navigate("/blog")} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                  Read More
                </button>
              </div>
              <div className="w-full md:w-1/2">
                <img src={slide.image} alt={slide.title} className="rounded-lg shadow-md" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
