import { useState } from "react";
import "./Carousel.css"

interface imgCarousel {
    img: string;
    name: string;
    specialty: string;
}

function OurProTeam(props: imgCarousel) {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const scale = isHovered ? 1 : 0.6;
    const grayscale = isHovered ? 'grayscale(0)' : 'grayscale(100%)';

    const onMouseEnter = () => {
        setIsHovered(true);
    }
    const onMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div className="item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                transform: `scale(${scale})`,
                filter: `${grayscale}`,
                transition: 'transform 700ms ease, filter 500ms ease'
            }}>
            <div className="relative translate-x-[-50%] top-0 left-2/4 w-[290px] origin-center text-center">
                <div>
                    <img className="size-[300px] rounded-lg" src={props.img} alt="/" />
                </div>
                <div className="p-2.5 text-center ">
                    <h3 className="text-black text-2xl font-bold font-nunito">{props.name}</h3>
                    <span className="font-medium">{props.specialty}</span>
                </div>
            </div>
        </div>
    )
}

export default OurProTeam;
