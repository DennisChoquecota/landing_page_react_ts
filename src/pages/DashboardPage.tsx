import React, { useEffect, useState } from "react";
import NavbarAdmin from "@/components/navbar/NavbarAdmin";
import ResponsiveDrawer from "@/components/menu/ResponsiveDrawer";
import { motion } from "framer-motion";
import TreeMenu from "@/components/menu/TreeMenu";
import { MENULINKS } from "@/db/db";

export function DashboardPage() {
   const [drawerOpen, setDrawerOpen] = useState(true);
   const [isMobile, setIsMobile] = useState(false);
   const drawerWidth:number = 200;

   useEffect(() => {
      //QUERY PARA ESTABLECER isMobile
      const mediaQuery = window.matchMedia("(max-width: 720px)");
      const handleResize = () => setIsMobile(mediaQuery.matches);
      handleResize();
      mediaQuery.addEventListener("change", handleResize);
      return () => mediaQuery.removeEventListener("change", handleResize);
   }, []);

   return (
      <>
         <NavbarAdmin setDrawerOpen={() => setDrawerOpen((prev) => !prev)} />

         <div className="flex">
            {/* Drawer visible o no según modo */}
            <ResponsiveDrawer
               isOpen={drawerOpen}
               onClose={() => setDrawerOpen(false)}
               isMobile={isMobile}
               drawerWidth={drawerWidth}
            >
               <nav className="flex flex-col space-y-2">
                  <TreeMenu node={MENULINKS} />
                  <a href="#">🏠 Inicio</a>
                  <a href="#">📁 Archivos</a>
                  <a href="#">⚙️ Configuración</a>
               </nav>
            </ResponsiveDrawer>

            {/* Contenido principal */}
            <motion.main
               className="flex-1 p-6"
               animate={{
                  marginLeft: !isMobile && drawerOpen ? drawerWidth : 0,
               }}
               transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >

               <h1 className="text-xl font-bold">Contenido principal</h1>
               <p>
                  En pantallas grandes, este contenido se empuja. En pantallas pequeñas,
                  el drawer se sobrepone.
               </p>

            </motion.main>
         </div>
      </>
   );
};

