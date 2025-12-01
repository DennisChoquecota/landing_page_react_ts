import { HEADER } from "../../db/db";
import SocialHeader from "./SocialHeader";
import "../Components.css";

function Header() {
  return (
    <>
      <div
        className={`text-white md:block hidden py-[11px] px-[50px] ${
          HEADER.bg === "" ? "bg-primary" : HEADER.bg
        }`}
        id="inicio"
      >
        <div className="container">
          <div className="flex flex-wrap justify-between">
            <div className="float-left">
              <ul className="flex gap-1.5">
                <li className="mr-3.75 inline-block">
                  <i className="fa-solid fa-phone mr-1.25"></i>
                  <a href={`tel:${HEADER.cellphone}`}>{HEADER.cellphone}</a>
                </li>
                <li className="mr-3.75 inline-block">
                  <i className="fa-solid fa-location-dot mr-1.25"></i>
                  {HEADER.location}
                </li>
              </ul>
            </div>
            <div className="topbar-social float-right">
              <ul className="flex">
                {HEADER.items.map((content, index) => (
                  <SocialHeader
                    key={index}
                    url={content.socialRef}
                    icon={content.socialIcon}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
