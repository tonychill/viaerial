import { FC, useState, FormEvent, BaseSyntheticEvent, LegacyRef, RefObject } from "react";
import Link from "next/link";
import { useKeenSlider } from "keen-slider/react";
import Type from "../Type";

interface CarouselProps {
  media: { src: string; link: string; caption?: string }[];
  mode?: "snap" | "free" | "free-snap" | undefined;
  slidesPerView?: number;
  dots?: boolean;
  loop?: boolean;
}

const Carousel: FC<CarouselProps> = ({ media, mode, slidesPerView = 1, dots, loop = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop,
    mode,
    slidesPerView,
    spacing: 16,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });
  function handleSliderPrev(event: BaseSyntheticEvent) {
    event.preventDefault();
    if (slider !== undefined && "prev" in slider) {
      slider.prev();
    }
  }
  function handleSliderNext(event: BaseSyntheticEvent) {
    event.stopPropagation();
    if (slider !== undefined && "next" in slider) {
      slider.next();
    }
  }
  /** TODO: Remove the follwoing comment when yout carousel work is done
   * Changed overflow ino navigation-wrapper (1st div) and keen-slider__slide div.
   */
  return (
    <>
      <div className="navigation-wrapper relative h-full w-full">
        <div ref={sliderRef} className="keen-slider overflow-visible h-full rounded-md">
          {media.map((image, idx) => (
            <div key={idx} className="keen-slider__slide number-slide overflow-visible">
              <div className="w-full h-full">
                <Link href={image.link}>
                  <a>
                    <div className=" h-full md:pt-[66.66667%] relative bg-center bg-no-repeat">
                      <div className="absolute inset-0 flex h-full items-center justify-center rounded-xl shadow-md">
                        <img src={image.src} alt="yacht" className=" x01 rounded-xl  h-full w-full inset-0 static object-cover" />
                      </div>
                    </div>
                    <div className="ml-1 mt-2">
                      <Type variant="title">{image.caption}</Type>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {false && (
          <>
            <ArrowLeft onClick={(e: BaseSyntheticEvent) => handleSliderPrev(e)} disabled={slider.details().size < 1} />
            <ArrowRight onClick={(e: BaseSyntheticEvent) => handleSliderNext(e)} disabled={slider.details().size < 1} />
          </>
        )}
      </div>
      {slider && slider.details().size > 1 && dots !== false && (
        <div className="dots">
          {/* TODO: get the indicies of all the sliders as an array and pass them to the folowing JSX
          so that they are able to be mapped. Basically remove the ...Array mumbojumbo.  */}
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
interface ArrowProps {
  disabled: boolean;
  onClick: (e: BaseSyntheticEvent) => void;
}
//TODO: Add Icon (type=arrow-prev) component to replace the follwoing svg's
function ArrowLeft(props: ArrowProps) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg onClick={props.onClick} className={"arrow arrow--left" + disabeld} viewBox="0 0 24 24">
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  );
}

function ArrowRight(props: ArrowProps) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg onClick={props.onClick} className={"arrow arrow--right" + disabeld} viewBox="0 0 24 24">
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  );
}
export default Carousel;
/**
 *     position: absolute;
    display: flex;
    padding: 10px 0;
    justify-content: center;
    z-index: 9999999;
    width: 100%;
    bottom: 60px;
 */
