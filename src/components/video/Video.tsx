import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VIDEO } from "../../db/db";

export default function Video() {
  const [showModal, setShowModal] = useState(false);

  // Cierra con ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* MODAL CON ANIMACIÓN */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-700/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/rICXf0UH7Cg?autoplay=1"
                title="YouTube video player"
                
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 hover:bg-opacity-75 px-3 rounded"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECCIÓN PRINCIPAL */}
      <div
        style={{ backgroundImage: "url('/images/background/bg1.jpg')" }}
        className="lg:py-[150px] py-13.5 relative bg-fixed bg-cover section-full video-presentation overlay-black-dark bg-img-fix after:content-[''] after:absolute after:bg-black after:opacity-80 after:top-0 after:left-0 after:size-full after:z-[1]"
      >
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 text-center z-[2]">
              <h2 className={`${VIDEO.titleColor === "" ? "text-white" : VIDEO.titleColor} lg:text-4.5xl text-3xl mb-6.25 font-extrabold font-nunito`}>
                {VIDEO.title}
              </h2>
              <p className={`${VIDEO.textColor === "" ? "text-white" : VIDEO.textColor} max-w-[700px] m-auto text-white`}>
                {VIDEO.text}
              </p>
              <div className="video-play-icon mt-13.5 bg-fixed">
                <button
                  onClick={() => setShowModal(true)}
                  className="size-[90px] rounded-full text-center leading-[95px] shadow-[0_0_0_10px_rgba(255,255,255,.2)] text-white hover:duration-500 hover:shadow-[0_0_0_10px_rgba(255,255,255,.1),0_0_0_20px_rgba(255,255,255,.1)] bg-[rgba(255,255,255,.5)] border-2 border-white block text-4.75xl mx-auto transition-all cursor-pointer"
                >
                  <i className="ti-control-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
