import { PORTFOLIODATA } from "../../db/db";
import Categorias from "./Categorias";
import Images from "./Images";

import '../Components.css'
import { useState } from "react";

function Portfolio() {
  const [filterActive, setFilterActive] = useState<string>('all');
// console.log(filterActive);
  return (
    <>
      <div
        style={{ backgroundImage: PORTFOLIODATA.backgroundImage }}
        className="lg:py-20 py-8 bg-cover bg-[100%]  relative"
      >
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={`${PORTFOLIODATA.titleColor === "" ? "text-primary" : PORTFOLIODATA.titleColor} text-3xl font-extrabold mb-2.5 font-nunito lg:text-4xl`}>
              { PORTFOLIODATA.title }
            </h2>
            <div className="overflow-hidden">
              {/* <div className="relative inline-block before:content-[''] before:absolute before:top-1/2 before:w-20 before:h-3.75 before:-translate-y-1/2 before:bg-[length:auto_100%] before:bg-no-repeat before:bg-center before:left-auto before:right-13.5 after:content-[''] after:absolute after:top-1/2 after:w-20 after:h-3.75 after:-translate-y-1/2 after:bg-[length:auto_100%] after:bg-no-repeat after:bg-center after:right-auto after:left-13.5"> */}
                <i className={`${PORTFOLIODATA.icon} ${PORTFOLIODATA.iconColor === "" ? "text-primary" : PORTFOLIODATA.iconColor} text-4.5xl`}></i>
              {/* </div> */}
            </div>
            <p className={`${PORTFOLIODATA.textColor === "" ? "text-black" : PORTFOLIODATA.textColor} mx-auto max-w-[700px] pt-2.5 text-[#494949]`}>
              {PORTFOLIODATA.text}
            </p>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="style1 mb-8">
                <ul
                  className="flex justify-center max-sm:flex-wrap"
                  data-toggle="buttons"
                >
                  <Categorias filterActive={filterActive} setFilterActive={setFilterActive}/>
                </ul>
              </div>
            </div>
          </div>
          <div className="before:content-[''] before:table" id="lightgallery">
            <ul
              id="masonry"
              className="relative z-[1] max-w-screen-xl mx-auto px-4 flex"
            >
              <Images filterActive={filterActive}/>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
