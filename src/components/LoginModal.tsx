import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginModalProps = {
  onLogin: () => void;
  onClose: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
};

const LoginModal: React.FC<LoginModalProps> = ({
  onLogin, onClose, email, setEmail, password, setPassword
}) => {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="modal__main-container">
        <div className="modal__main-container__header">
          <span className="modal__main-container__header__title">Welcome!</span>
          <button
            className="modal__main-container__header__close-button"
            onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal__main-container__body">
          <form>
            <div className="modal__main-container__body__form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="modal__main-container__body__form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="modal__main-container__body_button-group">
              <button className="modal__main-container__body__button-group__forgot-password">
                Forgot Password?
              </button>
              <div>
                <span>
                  {`If you dont have an account, `}
                </span>
                <button
                  className="modal__main-container__body__button-group__forgot-password"
                  onClick={() => {
                    navigate('/registration');
                    onClose();
                  }}
                >
                  Register here
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="modal__main-container__footer">
          <button onClick={onLogin}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;