import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import SideNav from "./Sidenav";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "absolute",
          right: "13vw",
          top: "30%",
          marginLeft: "10rem",
        }}
      >
        <nav className="d-lg-none mobile_menu d-block">
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            size={100}
            duration={0.9}
            rounded
          />
        </nav>
      </div>
      {isOpen ? <SideNav /> : null}
    </>
  );
};

export default MobileMenu;
