interface carouselFootProps{
    ref: string;
    img: string;
}

function CarouselFooter (props: carouselFootProps) {
    return (
        <div className="">
            <a href={props.ref} data-source={props.ref} className="mfp-link dlab-media dlab-img-overlay3 after:content-[''] after:absolute relative after:size-0 after:left-2/4 after:top-2/4 after:z-[1] after:opacity-80 after:duration-500 after:bg-[linear-gradient(45deg,_rgba(255,_94,_165,_1)_5%,_rgba(0,_190,_207,_1)_100%);] group-hover:after:size-full group-hover:after:top-0 group-hover:after:left-0" title="Back massage">
                <img src={props.img} alt="/" />
            </a>
        </div>
    )
}

export default CarouselFooter