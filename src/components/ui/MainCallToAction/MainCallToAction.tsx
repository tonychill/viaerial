import { FC, useState } from "react";
import Button from "../../core/Button";
import Section from "../../core/Section";
import Type from "../../core/Type";
import Link from "../../core/Link";
import Modal from "../../core/Modal";
// import SignUp from "../Forms/SignUp/index";

interface MainCallToActionProps {}
const MainCallToAction: FC<MainCallToActionProps> = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    // <div
    //   className="-mt-8 mb-8 flex items-center h-128"
    //   style={{
    //     backgroundImage: "url(https://rccl-h.assetsadobe.com/is/image/content/dam/royal/content/destinations/vanuatu-fiji/vanuatu-fiji-cabanas.jpg?$750x667$)",
    //     backgroundPosition: "50% 50%",
    //     backgroundSize: "cover",
    //   }}
    // >
    <div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div className="relative z-30 text-white bg-opacity-50 mx-4 md:mx-auto md:w-full max-w-7xl  ">
        <div className="-mt-40  ">
          <div className="justify-self-start max-w-3xl">
            <Section>
              <Type variant="shout" color="#fff">
                Discover, earn rewards and enjoy amazing experiences!
              </Type>
            </Section>
            <Section>
              <Type variant="base" color="#fff">
                With tony you can discover discover great experiences, people, create and book trips, and enjoy your experiences like never before. Sign up
                today and get up to 50,000 coins that you can use towards your next trip!
              </Type>
            </Section>
            <Section>
              <div className="$wrapper flex flex-row items-center">
                <div className="flex">
                  <Button variant="secondary" text="Join the club." onClick={toggleModalOpen} />
                </div>
                <div className="ml-8">
                  <Link href="/help/1vDbUQkuG3VyTC4Az40Pfo" text="Learn more" icon="arrow-r" color="#fff" iconPlacement="right" />
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src="https://tonyimgs.s3.amazonaws.com/DJI_0140_1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute z-10 bg-gray-900 bg-opacity-20 w-full h-full shadow-inner top-0 left-0"></div>
      <Modal open={isModalOpen} toggleModal={toggleModalOpen}>
        {/* <SignUp /> */}
      </Modal>
    </div>
  );
  function toggleModalOpen() {
    setModalOpen(!isModalOpen);
  }
};

export default MainCallToAction;

/*** Notes ***
 * Notes go here.
 */
