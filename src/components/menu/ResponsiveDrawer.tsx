import React from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";

interface ResponsiveDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isMobile: boolean;
  drawerWidth: number;
};

const ResponsiveDrawer = ({
  isOpen,
  onClose,
  children,
  isMobile,
  drawerWidth,
}: ResponsiveDrawerProps) => {

  const drawerVariants: Variants = {
    hidden: { x: -drawerWidth },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    exit: {
      x: -drawerWidth,
      transition: { duration: 0.2 },
    },
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay solo para móviles */}
          {isMobile && (
            <motion.div
              className="fixed inset-0 bg-black z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={onClose}
            />
          )}

          {/* Drawer: fijo en mobile, relativo en desktop */}
          <motion.aside
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${isMobile
              ? "fixed top-0 left-0 h-full w-64 bg-white p-4 shadow-lg z-50 overflow-y-auto"
              : "fixed h-screen bg-gray-100 border-r border-b-[64px] p-4 shadow-inner overflow-y-auto"
              }`}
            style={
              {
                zIndex: isMobile ? 50 : undefined,
                width: !isMobile ? `${drawerWidth}px` : undefined
              }
            }
          >
            {isMobile ?
              <div className="flex justify-end">
                <button
                  className="mb-4 text-gray-600 hover:text-black"
                  onClick={onClose}
                >
                  ✕
                </button>
              </div>
              : null}
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveDrawer;
