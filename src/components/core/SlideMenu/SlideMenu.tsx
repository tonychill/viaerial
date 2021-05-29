import { FC, Children, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import Icon from "../Icons";
import SideBar from "../../ui/Sidebar";

interface SlideProps {
  type?: "search";
  open?: boolean;
  title?: string;
  header?: string;
  toggleSlider?: () => void;
}
let portal: HTMLElement;
const SlideMenu: FC<SlideProps> = ({ open = false, toggleSlider }) => {
  const [isMounted, setMountState] = useState(false);

  // const childArray = Children.toArray(children);
  useEffect(() => {
    setMountState(true);
    portal = document.getElementById("slider-portal")!;
    // console.log(portal);
    // ready = isMounted && portal;
    // console.log(ready);
    // if (window !== undefined && open === true) {
    //   addScreenOverlay();
    // }
    if (!open) removeScreenOverlay();
  }, []);
  //{childArray[1] ?? childArray[0]}
  return portal
    ? createPortal(
        <div
          className={`${
            open ? null : "translate-x-full"
          } p-4 min-h-screen z-50 fixed inset-y-0 right-0 bg-white w-full transition duration-200 space-y-6 transform ease-in-out`}
        >
          <header className="p-4 flex-none  border-gray-600-opacity-10  z-10 flex items-center ">
            {/* <div className="flex-auto flex hover:items-center min-w-0 ">{header ?? childArray[1] ? childArray[0] : null}</div> */}
            <div className="absolute top-6 right-6">
              <Button variant="close" icon={<Icon variant="close2" />} onClick={toggleSlider} />
            </div>
          </header>
          <main className="flex-auto md:mt-24">
            <SideBar />
          </main>
        </div>,
        portal
      )
    : null;

  function addScreenOverlay() {
    const pageBody = document.body;
    pageBody.style.overflow = "hidden";
  }

  function removeScreenOverlay() {
    document.body.style.cssText = "";
  }
};

export default SlideMenu;
