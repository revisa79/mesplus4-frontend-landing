import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
//import Logo from "@/assets/Teradyne-logo.png";
import Logo from "@/assets/MESPlusLogo-removebg-preview.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage,selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const navbarBackground = isTopOfPage ? "bg-white" : "bg-gray-20 drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/*LEFT SIDE*/}
            {/*<img src={Logo} alt="logo" />*/}
            <img src={Logo} alt="logo" className="w-28 h-auto border-4 border-blue-700 rounded-tl-xl rounded-bl-xl rounded-br-xl opacity-80" />
            {/*RIGHT SIDE*/}{/* When desktop screen */}
            {isAboveMediumScreens ? (   
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-base`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
                <a href="http://35.206.223.102:8080" target="_blank" rel="noopener noreferrer">
                  <p>Sign In</p>
                </a>
                <ActionButton setSelectedPage={setSelectedPage}>Get an Access</ActionButton>
              </div>
            </div>        
            ) : (
             <button 
                className="rounded-md bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className="h-6 w-6 text-white" />
             </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={(value) => {
                    setSelectedPage(value);
                    setIsMenuToggled(false); // Close the menu
                  }}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={(value) => {
                    setSelectedPage(value);
                    setIsMenuToggled(false); // Close the menu
                  }}
                />
                <Link
                  page="Our Services"
                  selectedPage={selectedPage}
                  setSelectedPage={(value) => {
                    setSelectedPage(value);
                    setIsMenuToggled(false); // Close the menu
                  }}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={(value) => {
                    setSelectedPage(value);
                    setIsMenuToggled(false); // Close the menu
                  }}
                />
              </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
