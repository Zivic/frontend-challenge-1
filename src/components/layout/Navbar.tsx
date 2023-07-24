import React from "react";
import { useState } from "react";
import useViewport from "../../hooks/useViewport";
const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const { width, isSmallScreen } = useViewport();
  console.log("Small screen: ", isSmallScreen);
  return (
    <>
      <nav
        className="flex left-point absolute right-0 z-20 md:w-7/12 h-16  bg-gradient-to-r from-sidebar-gradient-start to-sidebar-gradient-end
         justify-end px-10 gap-16 text-white custom-border-navbar
         w-full
        "
      >
        {isSmallScreen ? 
          <>
            <button>EXPAND</button>
          </>
          : <>
            <button>Home</button>
            <button>Browse</button>
            <button>Updates</button>
            <button>Pricing</button>
            <button className="custom-button rounded-lg px-10 my-4">
              Sign up
            </button>
          </>
        }
      </nav>
      <div className="absolute left-0 flex flex-row p-10 pl-20 gap-4">
        <img src="/src/assets/Logo.png" alt="Logo.png"></img>
        <img src="/src/assets/Serendipity.svg" alt="Serendipity.svg"></img>
      </div>
    </>
  );
};

export default Navbar;
