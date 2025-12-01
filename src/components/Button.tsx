import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "react";
import { BANNERDATA } from "../db/db";

const button = cva(
  "btn-animated font-semibold sm:px-7.5 px-5 py-2.5 sm:py-3.75 transition-all duration-300 mr-5 cursor-pointer",
  {
    variants: {
      variant: {
        primary: BANNERDATA.bgColorBtnOne === "" ? "bg-primary": BANNERDATA.bgColorBtnOne,
        secondary: BANNERDATA.bgColorBtnTwo === "" ? "bg-[#00becf]": BANNERDATA.bgColorBtnTwo,
      },
      textColor: {
        primary: BANNERDATA.textBtnColorOne === "" ? "text-white": BANNERDATA.textBtnColorOne,
        secondary: BANNERDATA.textBtnColorTwo === "" ? "text-black": BANNERDATA.textBtnColorTwo,
      },
      text: {
        small: "text-[12px]",
        medium: "text-[16px]",
        large: "text-[24px]",
      },
      width: {
        full: "w-full",
      },
      heigth: {
        full: "sm",
      },
      
    },
  }
);
interface ButtonHref{
  href?: string;
}
type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  VariantProps<typeof button> & ButtonHref ;

function Button({ variant, text, width,textColor, children, ...vast }: ButtonProps) {
  return (
    <button className={button({ variant, text, width, textColor })} {...vast}>
      {children}
    </button>
  );
}

export default Button;
