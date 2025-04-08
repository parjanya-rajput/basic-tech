import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { BlogPageSlides } from "../../Constants/BlogData";



const BlogsSlider = () => {
  return (
    <section className="text-center py-16 px-6 md:px-20 bg-gradient-to-t from-white to-blue-100">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full max-w-5xl mx-auto"
      >
        {BlogPageSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
                {slide.title}
              </h2>
              <p className="text-gray-600 mt-4">{slide.description}</p>
              <p className="text-blue-600 font-semibold mt-4">Lorem Ipsum Is</p>
              <p className="text-blue-500">
                It Is A Long Established Fact That A Read
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogsSlider;
