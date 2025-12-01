import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BANNERDATA } from "@/db/db";
import "./Banner.css";
import "@/components/Components.css";
import Button from "../Button";

function Banner() {
  const [idx, setIdx] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [ishover, setIshover] = useState(false);

  let visibleTimer: ReturnType<typeof setTimeout>;
  let idxTimer: ReturnType<typeof setTimeout>;

  const handleHoverIn = () => {
    setIshover(true);
  }
  const handleHoverOut = () => {
    setIshover(false);
  }

  useEffect(() => {
    setIsVisible(true);

    if (!ishover) {
      visibleTimer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      idxTimer = setTimeout(() => {
        setIdx((prev) => (prev + 1) % BANNERDATA.items.length);
      }, 2500);
    }

    return () => {
      clearTimeout(visibleTimer);
      clearTimeout(idxTimer);
    };
  }, [idx, ishover]);

  return (
    <>
      <div className="bg-white">
        <div className="relative">
          <div
            className="!h-[50vh] lg:!h-[86vh] md:!h-[86vh]"
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  className="swiper-wrapper"
                  //key="fade-box"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 1 }}
                >
                  <div
                    style={{ backgroundImage: BANNERDATA.items[idx].backgroundImage }}
                    className="swiper-slide bg-cover bg-[50%] relative max-lg:after:content-[''] max-lg:after:absolute max-lg:after:left-0 max-lg:after:bottom-0 max-lg:after:size-full max-lg:after:min-h-[400px] max-lg:after:-z-1 max-lg:after:!bg-white max-lg:after:opacity-60"
                  >
                    <div
                      className="px-3.75 relative lg:w-[1200px] md:w-[720px] sm:w-[540px] w-full mx-auto max-md:text-center top-1/2 -translate-y-1/2 /* Mueve el elemento en el eje Y */
                              !h-60vh"
                    >
                      <h1 className={`${BANNERDATA.titleColor === "" ? "text-primary" : BANNERDATA.titleColor} md:text-[65px] sm:text-[50px] text-3xl leading-10 md:leading-[80px] sm:leading-[60px] font-extrabold font-nunito capitalize`}>
                        <span>{BANNERDATA.items[idx].title}</span>
                        <br />
                        <span className="md:pl-[110px] after:content-[''] after:absolute after:bg-primary after:w-20 after:rounded-[3px] after:h-1.25 after:font-extrabold after:left-[1%] after:top-[35%] md:after:block after:hidden">
                          {" "}
                          {BANNERDATA.items[idx].afterTitle}
                        </span>
                      </h1>
                      <p className={`${BANNERDATA.textColor === "" ? "text-[#320016]" : BANNERDATA.textColor} sm:text-lg max-sm:px-4.75 text-xs md:leading-[28px] leading-[15px] font-medium  font-nunito max-w-[700px] py-5`}>
                        {BANNERDATA.items[idx].text}
                      </p>
                      <div className="buttons">
                        <Button
                          href="contact.html"
                          variant="primary"
                          textColor="primary"

                        >
                          {BANNERDATA.textBtnOne}
                        </Button>

                        <Button
                          href="about-us.html"
                          variant="secondary"
                          textColor="secondary"
                        >
                          {BANNERDATA.textBtnTwo}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
