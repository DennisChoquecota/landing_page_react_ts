import { IMGCAROUSEL } from "../../db/db";
import "./Carousel.css"

interface imgCarousel {
    message: string ;
    img: string ;
    subtitle: string ;
    flaticon: string ;
  }

function ImgCarousel  (props : imgCarousel)  {
    return (
        <div className="item cursor-pointer">
            <div className="text-center w-[270px] mx-auto">
                <div className={`${IMGCAROUSEL.iconColor === "" ? "text-primary": IMGCAROUSEL.iconColor} relative px-5 pb-0 pt-5 mb-3.5`}>
                    <img
                        className={`${IMGCAROUSEL.borderColorImg === "" ? "border-white": IMGCAROUSEL.borderColorImg} rounded-full shadow-cardicon block w-full border-[10px]`}
                        src={props.img}
                        alt="pic"
                    />
                    <i className={`${props.flaticon} text-4.75xl size-15.5 rounded-full absolute bottom-2.5 right-2.5 ${IMGCAROUSEL.bgIcon === "" ? "bg-white": IMGCAROUSEL.bgIcon} shadow-xl`}></i>
                </div>
                <div className="p-2">
                    <h6 className={`${IMGCAROUSEL.subtitle === "" ? "text-primary": IMGCAROUSEL.subtitle} uppercase text-lg font-extrabold mb-2.5 font-nunito`}>
                        <a>{props.subtitle}</a>
                    </h6>
                    <p className={`${IMGCAROUSEL.message === "" ? "text-black": IMGCAROUSEL.message} mb-6`}>{props.message}</p>
                </div>
            </div>
        </div>
    )
}

export default ImgCarousel