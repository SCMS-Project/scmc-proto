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
      dispatch({ type: "LOGOUT" })
      navigate('/')
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLoggedIn) {
    return <div>Loading...</div>;
  }

  console.log(36, state);
  

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <div className="profile__main-container">
        <p><strong>Username:</strong>{` ${user?.firstName} ${user?.lastName}`}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        {/* <p><strong>DOB:</strong> January 1, 2023</p> */}
      </div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Profile;
