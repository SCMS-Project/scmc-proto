import React, { useState } from "react";
import educationIcon from "../assets/images/education-icon.svg";
import { NavIcon } from "../components/svgs/NavIcon"
import { UserIcon } from "../components/svgs/UserIcon";
import LoginModal from "../components/LoginModal";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false)

  const navigate = useNavigate();

  const { state, dispatch } = useAppContext();
  // console.log(12, { email, password });


  const handleLoginModalClose = () => {
    setIsLoginModalOpen((prevState) => !prevState);
  }

  const handleSignInClick = () => {
    setIsLoginModalOpen(true);
  }

  const handleGoToHomePage = () => {
    navigate('/');
  }

  const handleOpenNavigationMenu = () => {
    setIsNavMenuOpen(true);
  }

  const handleCloseNavigationMenu = () => {
    setIsNavMenuOpen(false); 
  };

  return (
    <div className="header">
      <div className="header__main-container">
        <div className="header__main-container__navigation-menu">
          <button
            className="header__main-container__navigation-menu__button"
            onClick={handleOpenNavigationMenu}>
            <NavIcon />
          </button>
        </div>
        <div
          className="header__main-container__logo"
          role="button"
          onClick={handleGoToHomePage}>
          <img src={educationIcon} alt="education-icon" />
        </div>
        <div className="header__main-container__button-container">
          <button
            className="header__main-container__button-container__user-button"
            onClick={handleSignInClick}
          >
            <UserIcon color={isLoggedIn ? 'Green' : 'Yellow'} />
          </button>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal
          onClose={handleLoginModalClose}
          onLogin={handleSignInClick}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )}
      {isNavMenuOpen && (
        <Navigation
          isNavMenuOpen={isNavMenuOpen}
          onCloseNavigationMenu={handleCloseNavigationMenu}
        />
      )}
    </div>
  );
};

export default Header;