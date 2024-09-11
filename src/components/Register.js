
import profileStyles from "../styles/profile.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import ProfileContext from "../services/ProfileContext";
import { useContext } from "react";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { profile,setProfile } = useContext(ProfileContext); // Access the context
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userProfile = { name, email, address };
   // Save data to context
   setProfile(userProfile);

   // Redirect to profile page
   navigate("/profile");
  };

  return (
    <div className={profileStyles.profileFormContainer}>
      <h2>Profile Information</h2>
      <form onSubmit={handleSubmit}>
        <div className={profileStyles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={profileStyles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={profileStyles.formGroup}>
          <label htmlFor="Address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className={profileStyles.saveBtn}>
          Save Profile
        </button>
      </form>
    </div>
  );
};

export default Register;
