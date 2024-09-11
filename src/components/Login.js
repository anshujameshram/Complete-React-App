import { useRef, useState, useContext } from "react";
import loginStyles from "../styles/login.module.css";
import axios from "axios";
import AuthContext from "../services/AuthContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

  const unameRef = useRef();
  const pwordRef = useRef();

  const [unameErr, setUnameErr] = useState("");
  const [pwordErr, setPwordErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let isFormValid = validateForm();
    if (isFormValid) {
      login();
    }
  };

  const login = () => {
    let uname = unameRef.current.value;
    let pword = pwordRef.current.value;
    // axios
    //   .post("http://localhost:5000/freshkart/login", {
    //     uname,
    //     pword,
    //   })
    //   .then(
    //     (res) => {
    //       setIsLoggedIn(true);
    //       navigate("/home");
    //     },
    //     (err) => {
    //         toast.error("Invalid Credentials", {theme: "colored", autoClose: 3000});
    //     }
    //   );
    if (uname === "harry" && pword === "potter") {
      setIsLoggedIn(true);
      navigate("/home");
    } else {
      toast.error("Invalid Credentials", { theme: "colored", autoClose: 3000 });
    }
  };

  const validateForm = () => {
    let isValid = false;
    let uname = unameRef.current.value;
    let pword = pwordRef.current.value;

    // // Check username
    // if (uname === "") {
    //   setUnameErr("Username is required");
    //   isValid = false; // Set form as invalid if username is empty
    // } else {
    //   setUnameErr(""); // Clear the error if the username is valid
    // }

    // // Check password
    // if (pword === "") {
    //   setPwordErr("Password is required");
    //   isValid = false; // Set form as invalid if password is empty
    // } else {
    //   setPwordErr(""); // Clear the error if the password is valid
    // }

    if(uname === "" && pword==="")
    {
        setUnameErr("Username is required");
        setPwordErr("Password is required");
    }
    else if (uname.trim() === "") {
      setUnameErr("Username is required");
    } else if (pword.trim() === "") {
      setUnameErr("");
      setPwordErr("Password is required");
    } else {
      isValid = true;
      setUnameErr("");
      setPwordErr("");
    }
    return isValid;
  };
  const handleUnameChange = () => {
    if (unameRef.current.value.trim() !== "") {
      setUnameErr("");
    }
  };

  const handlePwordChange = () => {
    if (pwordRef.current.value.trim() !== "") {
      setPwordErr("");
    }
  };
  return (
    <div className={loginStyles.loginContainer}>
      <ToastContainer />
      <div className={loginStyles.heading}>Login</div>
      <div className={loginStyles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={loginStyles.formGroup}>
            <label htmlFor="uname">Username</label>
            <input type="text" name="uname" ref={unameRef}  onChange={handleUnameChange}/>
            {unameErr.length > 0 ? (
              <span className={loginStyles.error}>{unameErr}</span>
            ) : null}
          </div>
          <div className={loginStyles.formGroup}>
            <label htmlFor="pword">Password</label>
            <input type="password" name="pword" ref={pwordRef} onChange={handlePwordChange}/>
            {pwordErr.length > 0 ? (
              <span className={loginStyles.error}>{pwordErr}</span>
            ) : null}
          </div>
          <button className={loginStyles.loginBtn} type="submit">
            Login
          </button>
          <NavLink to="/register">  <div className={loginStyles.registerLink}>Register</div></NavLink>
        </form>
      </div>
    </div>
  );
};
export default Login;
