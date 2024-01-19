import { useContext, useEffect, useRef } from "react";
// import icons
import { IoMdHome } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
// import sidebar context
import { SidebarContext } from "../Contexs/SidebarContext";

function Header() {
  const currentPage = useLocation().pathname.split("/")[1];
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const headerRef = useRef(null);

  useEffect(() => {
    const changeHeader = () => {
      if (document.documentElement.scrollTop > 10)
        headerRef.current.classList.add("sticky-header");
      else headerRef.current.classList.remove("sticky-header");
    };
    window.addEventListener("scroll", changeHeader);

    return () => window.removeEventListener("scroll", changeHeader);
  }, []);

  return (
    <header
      ref={headerRef}
      className="header rounded-lg p-4 md:p-3 md:pb-1 sticky top-5 z-40 transition-all ease-ease delay-100"
    >
      <div className="flex flex-col space-y-1  md:flex-row md:justify-between md:items-center md:space-y-0">
        {/* header left side */}
        <div className="header-left">
          <div className="flex items-center space-x-2">
            <IoMdHome className="text-lg text-[#87848f]" />
            <span className="capitalize font-bold">/ {currentPage}</span>
          </div>
          <h3 className="my-2 text-lg capitalize">{currentPage}</h3>
        </div>

        {/* header right side */}
        <div className="header-right flex flex-col sm:flex-row sm:justify-between space-y-5 sm:items-center sm:space-y-0 md:space-x-2">
          {/* search box */}
          <div className="search-box rounded-2xl bg-[#0f1535] flex items-center space-x-3 border border-[#e2e8f04d] pl-3 w-full sm:w-[250px]">
            <IoMdSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Type Here..."
              className="header-search-input"
            />
          </div>

          {/* header icons box */}
          <div className="flex items-center justify-end space-x-3">
            {showSidebar ? (
              <MdMenuOpen
                onClick={() => setShowSidebar((prev) => !prev)}
                className="cursor-pointer text-lg xl:hidden"
              />
            ) : (
              <MdOutlineMenu
                onClick={() => setShowSidebar((prev) => !prev)}
                className="cursor-pointer text-lg 2xl:hidden"
              />
            )}
            <IoMdSettings className="cursor-pointer text-lg" />
            <IoMdNotifications className="cursor-pointer text-lg" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
