import { FC } from "react";
import Carousel from "../../core/Carousel";
import s from "./Media.module.css";

interface MediaProps {
  type: "single" | "multi";
  media: { src: any; link: any }[] | string;
  mode?: "snap" | "free" | "free-snap" | undefined;
  slidesPerView?: number;
  dots?: boolean;
  loop?: boolean;
}

const Media: FC<MediaProps> = ({ media, type, mode, slidesPerView, dots, loop }) => {
  return (
    <div className="cn:media sm:overflow-hidden flex h-full">
      <div className="m-auto w-full ">
        <div className=" pt-[66.666667%] relative bg-center bg-no-repeat w-full">
          <div className="absolute inset-0 h-full w-full   ">{renderSwitch(type)}</div>
        </div>
      </div>
    </div>
  );
  //TODO: The renderSwitch function seem uneccessary due to the fact that its redundant. A signle image will always not be a multi.
  function renderSwitch(type: string) {
    switch (type) {
      case "single":
        return <>{typeof media === "string" ? <img src={media} /> : null}</>;
      case "multi":
        return <>{Array.isArray(media) ? <Carousel dots={dots} loop={loop} slidesPerView={slidesPerView} mode={mode} media={media} /> : null}</>;
    }
  }
};

export default Media;
