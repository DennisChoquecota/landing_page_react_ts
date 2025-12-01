import { HEADER } from "../../db/db";

interface socialProps {
  url: string;
  icon: string;
}

function SocialHeader(props: socialProps) {
  return (
    <li className="inline-block">
      <a
        target="_blank"
        href={props.url}
        className={`${
          HEADER.hoverText === "" ? "hover:text-[#320016]" : HEADER.hoverText
        }  duration-500 px-1.5 inline-block`}
      >
        <i className={`fa-brands ${props.icon} ml-2.5`}></i>
      </a>
    </li>
  );
}

export default SocialHeader;
