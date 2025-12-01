import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { isSwiperLoop } from "../../utils/utils";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SERVICECAROUSEL } from "../../db/db"
import Card from "./Card"


function ServicesCarousel() {

   let contentToRender = SERVICECAROUSEL['cards'];
   let loop = isSwiperLoop(contentToRender.length);

   return (
      <>
         <div style={{ backgroundImage: SERVICECAROUSEL['backgroundImage'] }} className="lg:pt-29 lg:pb-[90px] py-8 relative bg-bottom bg-cover bg-no-repeat">
            <div className="relative z-[1] max-w-screen-xl mx-auto px-4">

               {/* SWIPER INTEGRADO CORRECTAMENTE */}
               <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  loop={loop}
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
                     640: { slidesPerView: (contentToRender.length < 2) ? contentToRender.length : 2 },
                     1024: { slidesPerView: (contentToRender.length < 3) ? contentToRender.length : 3 },
                     1280: { slidesPerView: (contentToRender.length < 4) ? contentToRender.length : 4 },
                  }}
               >
                  {contentToRender.map((item, idx) => (
                     <SwiperSlide key={idx}>
                        <div className="p-2">
                           <Card message={item.cardMessage} subtitle={item.cardSubtitle} flaticon={item.cardflat} />
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </div>
      </>
   )
}

export default ServicesCarousel