import React, { useEffect, useState } from "react";
import educationIcon from "../assets/images/education-icon.svg";
import { NavIcon } from "../components/svgs/NavIcon"
import { UserIcon } from "../components/svgs/UserIcon";
import LoginModal from "../components/LoginModal";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import axiosInstance from "../api/axiosInstance";
import { AUTH_LOG_IN } from "../api/APIUrls";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false)

  const navigate = useNavigate();

  const { state, dispatch } = useAppContext();
  const {user} = state;
  
  const handleUserIconClick = () => {
    if (state.user) {
      navigate('/profile');
    } else {
      setIsLoginModalOpen(true);
    }
  }

  const handleLoginModalClose = () => {
    setIsLoginModalOpen((prevState) => !prevState);
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

  const handleSignInClick = async () => {
    try {
      const response = await axiosInstance.post(AUTH_LOG_IN, {
        email,
        password,
      })
      setIsLoginModalOpen(false);

      const userData = response.data.data.user;
      const token = response.data.data.accessToken;

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(userData));
      dispatch({ type: 'SET_USER', payload: userData })
      setIsLoggedIn(true);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (state.user) {
      setIsLoggedIn(true);
    }
  }, [user]);


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
            onClick={handleUserIconClick}
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
          navigate={navigate}
        />
      )}
    </div>
  );
};

export default Header;