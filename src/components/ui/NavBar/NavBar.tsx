import { GlobalContext } from "../../../context";
import { FC, Fragment, useContext, useState } from "react";
import Link from "../../core/Link";
import { PrimaryNavLinks } from "./PrimaryNavLInks";
import Modal from "../../core/Modal";
import Search from "../Search";
// import SignUp from "../Forms/SignUp/index";
import SignInForm from "../Forms/SignInForm";

interface NavBarProps {
  navLinks: any[];
}
const NavBar: FC<NavBarProps> = ({ navLinks }) => {
  const { currentUser, handleLogOut } = useContext(GlobalContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSignInModalOpen, setSignInModalState] = useState(false);

  return (
    <header className="fixed bg-black top-0 z-50 w-full shadow-md sm:px-8 text-gray-700 body-font xxmotion-safe:animate-fadeIn">
      <div className="container h-20  flex flex-col flex-wrap items-center justify-between  mx-auto md:flex-row max-w-7xl">
        <div className="hidden sm:flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
          <Link href="/" className="text-white" text="VI Aerial Solutions">
            <a>
              <span className="text-xl font-black leading-none text-white select-none logo"></span>
            </a>
          </Link>
        </div>
        <div className="flex-grow ">
          <div className=" flex justify-center sm:justify-start ">{/* <Search /> */}</div>
        </div>
        <div className="hidden sm:flex flex-col md:flex-row">
          <PrimaryNavLinks links={navLinks} />

          {/* <div className="inline-flex items-center justify-center md:justify-end">
            {currentUser ? (
              <Link variant="action" onClick={handleLogOut} text="Sign out" />
            ) : (
              <Fragment>
                <Link variant="action" className="text-white" onClick={toggleSignInModalState} text="Sign in" />
                <Link variant="action" onClick={toggleModal} text="Sign up" />
              </Fragment>
            )}
          </div> */}
        </div>
      </div>
      <Modal open={isModalOpen} toggleModal={toggleModal}>
        {/* <SignUp /> */}
      </Modal>
      <Modal open={isSignInModalOpen} toggleModal={toggleSignInModalState}>
        {/* <SignInForm toggleSignInModalState={toggleSignInModalState} /> */}
      </Modal>
    </header>
  );
  function toggleModal() {
    setModalOpen(!isModalOpen);
  }
  function toggleSignInModalState() {
    setSignInModalState(!isSignInModalOpen);
  }
};

export default NavBar;
