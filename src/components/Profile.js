import { useContext } from "react";
import ProfileContext from "../services/ProfileContext"
import profileStyles from "../styles/profile.module.css";

const Profile = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <div className={profileStyles.profileDisplayContainer}>
      <h2>Profile Details</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Address:</strong> {profile.address}</p>
    </div>
  );
};

export default Profile;
