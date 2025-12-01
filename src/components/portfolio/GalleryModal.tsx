import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PORTFOLIODATA } from "../../db/db";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function GalleryModal() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const allImages = PORTFOLIODATA.items.flatMap((item) => item.images);

  let loop = true;
  if (allImages.length <= 4) {
    loop = false;
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Swiper principal */}
      <Swiper
        style={{
          // Colores de navegación personalizados
          //@ts-ignore
          "--swiper-navigation-color": "#FFA5A5",
          "--swiper-pagination-color": "#FFA5A5",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 mb-6"
      >
        {allImages.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={loop}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: allImages.length < 4 ? allImages.length : 4 },
        }}
      >
        {allImages.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.image}
              alt={img.title}
              className="w-full h-auto object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
