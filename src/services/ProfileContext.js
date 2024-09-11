import { createContext, useState } from "react";

const ProfileContext = createContext();

function ProfileProvider(props) {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    address: "",
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {props.children}
    </ProfileContext.Provider>
  );
}

export { ProfileProvider };
export default ProfileContext;
