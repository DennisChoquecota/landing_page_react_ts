import ImgCarousel from "./ImgCarousel";
import OurProTeam from "./OurProTeam";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CAROUSELDATA } from "../../db/db";

import "../Components.css";
import "./Carousel.css";
import { isSwiperLoop } from "../../utils/utils";

interface CarouselProps {
  variant: "imgcarousel" | "teamcarousel";
}

const variants = {
  h3hide: {
    imgcarousel: "hidden",
    teamcarousel: "text-lg font-bold mb-2.5 font-nunito text-black",
  },
};

function Carousel({ variant }: CarouselProps) {
  let minLength = 4;

  const contentToRender =
    variant === "imgcarousel"
      ? CAROUSELDATA.carrouselContent.map((content, index) => (
        <ImgCarousel
          key={index}
          message={content.carrMessage}
          img={content.carrImg}
          subtitle={content.carrSubtl}
          flaticon={content.carrFlat}
        />
      ))
      : CAROUSELDATA.ourProTeamCont.map((content, index) => (
        <OurProTeam
          key={index}
          img={content.optImg}
          name={content.optName}
          specialty={content.optSpecialty}
        />
      ));

  if (variant !== "imgcarousel") {
    minLength = 5;
  }

  let loop = isSwiperLoop(contentToRender.length, minLength);

  return (
    <div
      style={{ backgroundImage: CAROUSELDATA["backgroundImage"], }}
      className={`${variant === "imgcarousel" ? "lg:py-20" : "lg:py-10"} py-8 relative bg-[position:bottom,_top] bg-no-repeat after:content-[''] after:absolute after:bg-white after:opacity-70 after:top-0 after:left-0 after:size-full bg-[length:100%]`}
      id="servicios"
    >
      <div className="relative z-[1] max-w-screen-xl mx-auto px-4">

        <div className="text-center">
          <h2 className={`${CAROUSELDATA.titleColor === "" ? "text-primary" : CAROUSELDATA.titleColor} lg:text-4xl text-3xl font-extrabold mb-2.5 font-nunito`}>
            {CAROUSELDATA.title[variant]}
          </h2>
          <h3 className={`${variants.h3hide[variant]}`}>
            {CAROUSELDATA.text[variant]}
          </h3>
          <div>
            <i className={`${CAROUSELDATA.iconColor === "" ? "text-primary" : CAROUSELDATA.iconColor} ${CAROUSELDATA.icon} text-4.5xl`}></i>
          </div>
          <p className={`${CAROUSELDATA.descriptionsColor === "" ? "text-black" : CAROUSELDATA.descriptionsColor} mx-auto max-w-[700px] pt-2.5 text-[#494949] mb-5`}>
            {CAROUSELDATA.descriptions[variant]}
          </p>
        </div>

        {/* SWIPER INTEGRADO CORRECTAMENTE */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={loop}
          style={{
            // Colores de navegación personalizados
            //@ts-ignore
            "--swiper-navigation-color": "#FFA5A5",
            "--swiper-pagination-color": "#FFA5A5",
          }}
          spaceBetween={16}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: {
              slidesPerView:
                contentToRender.length < 2 ? contentToRender.length : 2,
            },
            1024: {
              slidesPerView:
                contentToRender.length < 3 ? contentToRender.length : 3,
            },
            1280: {
              slidesPerView:
                contentToRender.length < 4
                  ? contentToRender.length
                  : variant === "imgcarousel"
                    ? 4
                    : 5,
            },
          }}
        >
          {contentToRender.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-2">{item}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousel;
