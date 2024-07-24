import React, { useState } from 'react';
import "../App.css";
import logo from '../Asserts/image/logo.PNG';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Helmet>
        <meta name="description" content="Responsive Navbar with SEO using React.js" />
      </Helmet>
      <NavbarContainer>
        <Nav>
        <Logo href="#">
    <img src={logo} alt="Logo" />
  </Logo>
          <MenuIcon onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </MenuIcon>
          <NavMenu className={isMenuOpen ? 'active' : ''}>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/media">Media</NavLink>
            <NavLink to="/cases">Cases</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </NavMenu>
          <ContactInfo>
            <ContactItem>
              <FontAwesomeIcon icon={faPhone} />
              <PhoneNumber>+91 0000000000</PhoneNumber>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faEnvelope} />
              <Email href="mailto:example@gmail.com">demo@gmail.com</Email>
            </ContactItem>
          </ContactInfo>
        </Nav>
      </NavbarContainer>
    </>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  position: fixed;
  top: 20px;
  left: 50px;
  width: 80%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  color: black;
  border: 2px solid white;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    left: 0;
    padding: 0.5rem;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  text-decoration: none;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: -100%;
    width: 100%;
    transition: left 0.3s ease;

    &.active {
      left: 0;
    }
  }
`;

const NavLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    color: #ccc;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #32CD32;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PhoneNumber = styled.span`
  color: #32CD32;
  font-weight: 600;
`;

const Email = styled.a`
  color: #32CD32;
  font-weight: 600;
  text-decoration: none;
  &:hover {
  color: #ccc;
  }
`;
