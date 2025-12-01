import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { isSwiperLoop } from "../../utils/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { CAROUSELFOOT } from "../../db/db";
import CarouselFooter from "./CarouselFooter";

function CarouselFoot() {
  let loop = isSwiperLoop(CAROUSELFOOT.length);

  return (
    <div className="">
      <div className="container-fluid p-0">
        <div className="flex">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            style={{
              // Colores de navegación personalizados
              //@ts-ignore
              "--swiper-navigation-color": "#FFA5A5",
              "--swiper-pagination-color": "#FFA5A5",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={loop}
            slidesPerView={4} // Ajusta según diseño y responsive
            breakpoints={{
              640: {
                // sm (>= 640px)
                slidesPerView: 4,
              },
              800: {
                // lg (>= 1024px)
                slidesPerView: 10,
              },
            }}
            className="dots-none owl-none owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-btn-center-lr owl-btn-1 mfp-gallery" // O cualquier clase que quieras para estilos
          >
            {CAROUSELFOOT.map((content, index) => (
              <SwiperSlide key={index}>
                <div className="p-1">
                  <CarouselFooter ref={content.carrRef} img={content.carrImg} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CarouselFoot;
