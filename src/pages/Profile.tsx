import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();

  const { user } = state;

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (state.user) {
      setIsLoggedIn(true);
    } else {
      navigate("/");
    }
  }, [state.user, navigate]);

  const handleSignOut = async () => {
    try {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile">
      <div className="profile__header">
        <h1 className="profile__title">User Profile</h1>
        <p className="profile__description">
          Welcome to your profile page. Here you can view your details.
        </p>
      </div>
      
      <div className="profile__main-container">
        <div className="profile__info">
          <div className="profile__info-item">
            <strong className="profile__info-item-label">Username:</strong> {`${user?.firstName} ${user?.lastName}`}
          </div>
          <div className="profile__info-item">
            <strong className="profile__info-item-label">Email:</strong> {user?.email}
          </div>
          <div className="profile__info-item">
            <strong className="profile__info-item-label">Date of Birth:</strong> {user?.dateOfBirth}
          </div>
          <div className="profile__info-item">
            <strong className="profile__info-item-label">Address:</strong> {user?.address}
          </div>
          <div className="profile__info-item">
            <strong className="profile__info-item-label">NIC:</strong> {user?.nicNumber}
          </div>
          <div className="profile__info-item">
            <strong className="profile__info-item-label">Phone Number:</strong> {user?.phoneNumber}
          </div>
        </div>

        <button className="profile__signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
