import { useState } from "react";
import Container from "./styled/Container";
import { ForMobile, ForDesktop } from "./styled/DevicePreference";
import { Logo, StyledHeader, StyledNav } from "./styled/Header";
import { PrimaryBtn, IconBtn } from "./styled/Button";
import Download from "./Download";
import LogoImg from "../assets/images/Rence logo.png";
import MenuIcon from "../assets/images/Menu.png";
import CloseIcon from "../assets/images/close.png";
import HomeIcon from "../assets/images/home.png";
import OffersIcon from "../assets/images/offers.png";
import FaqIcon from "../assets/images/faqs.png";
import AboutIcon from "../assets/images/about.png";
import Overlay from "./styled/Overlay";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNav = () => {
    setIsNavOpen(true);
    document.body.classList.add("lock-scroll");
  };
  const closeNav = () => {
    setIsNavOpen(false);
    document.body.classList.remove("lock-scroll");
  };

  return (
    <>
      <StyledHeader>
        <Container>
          <Overlay className={isNavOpen ? `open` : ``} onClick={closeNav} />
          <Logo>
            <img src={LogoImg} alt="'Rence" />
          </Logo>
          <StyledNav className={isNavOpen ? `open` : ``}>
            <ForMobile>
              <IconBtn onClick={closeNav}>
                <img src={CloseIcon} alt="" />
              </IconBtn>
            </ForMobile>
            <ul role="list">
              <li>
                <a href="#" className="active">
                  <ForMobile>
                    <img src={HomeIcon} alt="" />
                  </ForMobile>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <ForMobile>
                    <img src={OffersIcon} alt="" />
                  </ForMobile>
                  <span>Offers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <ForMobile>
                    <img src={FaqIcon} alt="" />
                  </ForMobile>
                  <span>FAQs</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <ForMobile>
                    <img src={AboutIcon} alt="" />
                  </ForMobile>
                  <span>About Us</span>
                </a>
              </li>
            </ul>
            <ForMobile>
              <Download />
            </ForMobile>
          </StyledNav>
          <ForDesktop>
            <PrimaryBtn text="Sign Up" />
          </ForDesktop>
          <ForMobile>
            <IconBtn onClick={openNav}>
              <img src={MenuIcon} alt="" />
            </IconBtn>
          </ForMobile>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
