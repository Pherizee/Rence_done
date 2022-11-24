import Container from "./styled/Container";
import {
  FooterContainer,
  FooterLogo,
  FooterNav,
  Discover,
  FooterBottom,
  SocialLinks,
} from "./styled/Footer";
import { PrimaryBtn } from "./styled/Button";
import LogoImg from "../assets/images/Rence logo.png";
import Appstore from "../assets/images/appstore.png";
import Playstore from "../assets/images/playstore.png";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <Container>
        <FooterContainer>
          <FooterLogo>
            <img src={LogoImg} alt="'Rence" />
          </FooterLogo>
          <FooterNav>
            <ul>
              <h3>Company</h3>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Mobile</a>
              </li>
            </ul>
            <ul>
              <h3>Contact</h3>
              <li>
                <a href="#">Help{"/"}FAQ</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
            </ul>
            <ul>
              <h3>More</h3>
              <li>
                <a href="#">Upcoming</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
            </ul>
          </FooterNav>
          <Discover>
            <SocialLinks>
              <li>
                <a href="#">
                  <FiInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedinIn />
                </a>
              </li>
            </SocialLinks>
            <h3>Discover our app</h3>
            <div className="download">
              <PrimaryBtn icon={Appstore} text="Get on Appstore" />
              <PrimaryBtn icon={Playstore} text="Get on Playstore" />
            </div>
          </Discover>
        </FooterContainer>
        <FooterBottom>
          <small>All rights reserved @smooth.com</small>
        </FooterBottom>
      </Container>
    </footer>
  );
};

export default Footer;
