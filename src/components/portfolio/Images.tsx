// import { div } from "motion/react-client";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIODATA } from "../../db/db";

import { type MouseEvent } from "react";
import { createPortal } from "react-dom";
import "../Components.css";
// import SwiperModalGallery from "./SwiperModalGallery";
import Modal from "../../Modal";

import useClickOutside from "../../hooks/useClickOutside";
import GalleryModal from "./GalleryModal";

interface Images {
  filterActive: string;
}

export default function Images({ filterActive }: Images) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useClickOutside(false);

  const handleShowModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsComponentVisible(true);
  };

  return (
    <>
      {isComponentVisible === true
        ? createPortal(
            <Modal
              modalRef={ref}
              onClose={() => setIsComponentVisible(false)}
              children={<GalleryModal />}
            />,
            document.getElementById("root")!
          )
        : null}

      <AnimatePresence>
        {PORTFOLIODATA.items.map((content, index) =>
          filterActive === "all" || filterActive === content.filter ? (
            <motion.li
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`${content.filter} md:w-[300px] z-[1] max-w-screen-xl  px-4 `}
            >
              {content.images.map((image, ind) => (
                <div
                  className={`group ${ind !== 1 ? "py-7.5 " : ""}`}
                  key={ind}
                >
                  <div className="z-[0] relative overflow-hidden before:content-[''] before:absolute before:left-0 before:top-0 before:size-0 before:z-[1] before:duration-500 before:opacity-50 duration-500 group-hover:duration-500 before:bg-[linear-gradient(45deg,_#ff5ea5_5%,_#00becf_100%)] group-hover:before:size-full after:content-[''] after:absolute after:right-0  after:bottom-0 after:size-0 after:z-[1] after:opacity-50 after:duration-500 after:bg-[linear-gradient(45deg,_#ff5ea5_5%,_#00becf_100%)] group-hover:after:size-full">
                    <img
                      className="group-hover:scale-125 duration-500 w-full md:w-[300px] xl:h-[261px]"
                      src={image.image}
                      alt="/"
                    />
                    <div className="absolute left-0 bottom-0 size-full text-center z-10 invisible group-hover:visible group-hover:duration-500">
                      <div className="absolute top-1/2 left-1/2 w-full h-auto p-0 px-2.5 list-none transform -translate-x-1/2 -translate-y-1/2">
                        <div className="!overflow-hidden">
                          <button
                            onClick={handleShowModal}
                            className="cursor-pointer fa-regular fa-image text-amber-50 text-3xl"
                          ></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.li>
          ) : null
        )}
      </AnimatePresence>
    </>
  );
}
