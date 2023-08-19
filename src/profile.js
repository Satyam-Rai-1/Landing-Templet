import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "./logout";
import LoginButton from "./login";

const Profile = () => {

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <LoginButton/>
        <LogoutButton/>
      </div>
    )
  );
};

export default Profile;