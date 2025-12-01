import { CARD } from "../../db/db";
import Button from "../Button";

import "../Components.css";

interface cardProps {
  subtitle: string;
  message: string;
  flaticon: string;
}

function Card(props: cardProps) {
  return (
    <div className="lg:col-span-3 md:col-span-6 col-span-12 md:mb-8 cursor-default">
      <div className={`${CARD.bg === "" ? "bg-white": CARD.bg} pb-8.5 pt-6 text-center relative duration-500 hover:shadow-2xl hover:translate-y-[-18px]`}>
        <div className="w-20 mb-2.5 inline-block text-center p-2">
          <span className={`${CARD.colorIcon === "" ? "text-primary": CARD.colorIcon} icon-cell`}>
            <i className={`${props.flaticon} text-6xl align-middle`}></i>
          </span>
        </div>
        <div className="overflow-hidden">
          <h3 className={`${CARD.subtitle === "" ? "text-primary": CARD.subtitle} text-lg mb-2.5 font-bold font-nunito`}>
            {props.subtitle}
          </h3>
          <p className={`${CARD.message === "" ? "text-black": CARD.message} mb-6`}>{props.message}</p>
          <Button href="#" variant="secondary">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
