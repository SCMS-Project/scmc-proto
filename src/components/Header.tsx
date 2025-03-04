import React, { useState } from "react";
import educationIcon from "../assets/images/education-icon.svg";
import { UserIcon } from "../components/svgs/UserIcon";
import LoginModal from "../components/LoginModal";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  
  const {state, dispatch} = useAppContext();
  console.log(12, {email, password});
  

  const handleLoginModalClose = () => {
    setIsLoginModalOpen((prevState) => !prevState)
  }

  const handleSignInClick = () => {
    setIsLoginModalOpen(false);
  }

  const handleGoToHomePage = () => {
    navigate('/')
  }

  return (
    <div className="header">
      <div className="header__logo" role="button" onClick={handleGoToHomePage}>
        <img src={educationIcon} alt="education-icon" />
      </div>
      <div className="header__main-container">
        <div className="header__main-container__navigation-menu">
          <button
            className="header__main-container__navigation-menu__menu-button"
          >
            Courses
          </button>
          <button
            className="header__main-container__navigation-menu__menu-button"
          >
            About
          </button>
          <button
            className="header__main-container__navigation-menu__menu-button"

          >
            Guide
          </button>
          <button
            className="header__main-container__navigation-menu__menu-button"
          >
            Exams
          </button>
          <button
            className="header__main-container__navigation-menu__menu-button"
          >
            Support
          </button>
        </div>
        <div className="header__main-container__button-container">
          {/* <div
            className="header__main-container__button-container__user-button"
            role="button"
          >
            <span style={{ marginTop: '2px' }}>STUDENT</span>
          </div>
          <div
            className="header__main-container__button-container__user-button"
            role="button"
          >
            <span style={{ marginTop: '2px' }}>LECTURER</span>
          </div> */}
          <button
          className="header__main-container__button-container__user-button"
            onClick={() => setIsLoginModalOpen(true)}
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
    </div>
  );
};

export default Header;