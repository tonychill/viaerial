import { FC } from "react";
import A from "next/link";
import Icon from "../Icons";
import clsx from "clsx";
import Type from "../Type";

/**
 * @param icon If passed in the string value will be passed to the Icon component where the correct icon will be rendered.
 */
interface LinkProps {
  variant?: "primary" | "secondary" | "menu" | "action" | "mobile";
  className?: string;
  href?: string;
  text: string;
  color?: string;
  icon?: string;
  size?: number;
  iconPlacement?: "right";
  onClick?: (v?: any) => void;
}
const Link: FC<LinkProps> = ({ variant, className, href = "", text, icon = "", iconPlacement, color, onClick }) => {
  switch (variant) {
    case "menu":
      return (
        <A href={href}>
          <a onClick={onClick} className={clsx(className, "flex items-center md:mr-6 font-medium leading-6 text-gray-600 ")}>
            <div className="p-4 bg-blue-300 min-h-[44px] flex justify-between flex-shrink flex-grow flex-row items-center cursor-pointer text-decoration transition duration-300 hover:bg-blue-200 rounded-lg">
              {icon && iconPlacement === undefined ? (
                <div className="mr-3 relative flex self-center flex-col my-2 cursor-pointer list-none">
                  <span>
                    {" "}
                    <Icon variant={icon} />{" "}
                  </span>
                </div>
              ) : null}
              <div className="min-h-0 flex justify-between min-w-0 flex-shrink z-0 flex-row flex-grow items-center">
                <Type variant="base" color={color}>
                  {text}
                </Type>
              </div>
              <div>{/* <span className="ml-4"> {iconPlacement === "right" ? <Icon variant={icon} color="#fff" /> : null}</span> */}</div>
            </div>
          </a>
        </A>
      );
    case "mobile":
      return (
        <A href={href}>
          <a onClick={onClick} className={clsx(className, "flex items-center mx-auto font-medium leading-6 text-gray-600 hover:text-gray-900")}>
            <div className=" flex flex-column  flex-grow items-center justify-items-center cursor-pointer text-decoration transition duration-300 hover:bg-blue-200 rounded-lg">
              <div className="mr-3 relative flex self-center flex-col my-2 cursor-pointer list-none">
                <span> {icon && iconPlacement === undefined ? <Icon variant={icon} /> : null}</span>
              </div>
              <div className="min-h-0 flex justify-between min-w-0 flex-shrink z-0 flex-row flex-grow items-center">
                <Type variant="hint" color={color}>
                  {text}
                </Type>
              </div>
              <div>{/* <span className="ml-4"> {iconPlacement === "right" ? <Icon variant={icon} color="#fff" /> : null}</span> */}</div>
            </div>
          </a>
        </A>
      );
    case "action":
      return (
        <button onClick={onClick} className={clsx("flex items-center mr-6 font-medium leading-6 text-gray-600 ", className)}>
          {icon && iconPlacement === undefined ? <Icon variant={icon} /> : null}
          <Type variant="base" color={color}>
            {text}
          </Type>
          <span className="ml-4"> {iconPlacement === "right" ? <Icon variant={icon} color="#fff" /> : null}</span>
        </button>
      );
    default:
      return (
        <A href={href}>
          <a className={clsx(className, "flex items-center mr-6 font-medium leading-6 text-gray-600 ")}>
            {icon && iconPlacement === undefined ? <Icon variant={icon} /> : null}
            <Type variant="base" color="#fff">
              {text}
            </Type>
            <span className="ml-4"> {iconPlacement === "right" ? <Icon variant={icon} color="#fff" /> : null}</span>
          </a>
        </A>
      );
  }
};

export default Link;
