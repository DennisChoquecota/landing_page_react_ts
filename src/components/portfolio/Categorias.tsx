import { useState } from "react";
import { PORTFOLIODATA } from "../../db/db";
import "../Components.css"

interface Categorias {
  filterActive: string;
  setFilterActive: (filter: string) => (void);
}

function Categorias({ filterActive, setFilterActive }: Categorias) {

  function handleClick(filter: string) {
    // console.log(filter);
    setFilterActive(filter);
  }

  return (
    <>
      <li data-filter=""
        className=" btn border-none active px-4 !py-0">

        <button onClick={() => { setFilterActive("all"); }}
          className={`  after:content-[''] after:bg-[#00000057] after:h-full after:opacity-20 after:absolute after:right-[-18px] after:top-0 after:w-0.5 after:skew-x-[-20deg] relative font-medium ${filterActive === "all" ? "text-primary" : "text-black cursor-pointer"}`}>
          <span>All</span>
        </button>
      </li>
      {PORTFOLIODATA.items.map((content, index) => (
        <li
          data-filter={content.filter}
          className="btn border-none px-4 !py-0"
          key={index}
        >
          <button onClick={() => { setFilterActive(content.filter); }}
            className={`after:content-[''] after:bg-[#00000057] after:h-full after:opacity-20 after:absolute after:right-[-18px] after:top-0 after:w-0.5 after:skew-x-[-20deg] relative font-medium ${filterActive === content.filter ? "text-primary" : "text-black cursor-pointer"}`}
          >
            <span>{content.name}</span>
          </button>
        </li>
      ))}
    </>
  );
}
export default Categorias;
