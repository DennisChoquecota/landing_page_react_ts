import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes } from "react";
import { BANNERDATA } from "../db/db";

const button = cva(
  "btn-animated font-semibold sm:px-7.5 px-5 py-2.5 sm:py-3.75 transition-all duration-300 mr-5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          BANNERDATA.bgColorBtnOne === ""
            ? "bg-primary hover:bg-[#ff4a95] focus:ring-[#ff5ea5] text-white"
            : `${BANNERDATA.bgColorBtnOne} hover:brightness-110`,
        secondary:
          BANNERDATA.bgColorBtnTwo === ""
            ? "bg-[#00becf] hover:bg-[#00a8b8] focus:ring-[#00becf] text-white"
            : `${BANNERDATA.bgColorBtnTwo} hover:brightness-110`,
      },
      textColor: {
        primary:
          BANNERDATA.textBtnColorOne === ""
            ? "text-white"
            : BANNERDATA.textBtnColorOne,
        secondary:
          BANNERDATA.textBtnColorTwo === ""
            ? "text-white"
            : BANNERDATA.textBtnColorTwo,
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
    defaultVariants: {
      variant: "primary",
      text: "medium",
    },
  }
);
interface ButtonHref {
  href?: string;
}
type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  VariantProps<typeof button> &
  ButtonHref;

function Button({
  variant,
  text,
  width,
  textColor,
  children,
  ...vast
}: ButtonProps) {
  return (
    <button className={button({ variant, text, width, textColor })} {...vast}>
      {children}
    </button>
  );
}

export default Button;
