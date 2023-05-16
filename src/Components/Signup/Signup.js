import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../store/FirebaseContext";
// import Firebase from '../../firebase/config';
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { useNavigate,Link } from "react-router-dom";

export default function Signup() {
  const history = useNavigate();
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [phoneNbr, setPhoneNbr] = useState();
  const [password, setPassword] = useState();
  const { Firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: userName }).then(() => {
          Firebase.firestore()
            .collection("users")
            .add({
              id: result.user.uid,
              username: userName,
              phone: phoneNbr,
              email: email,
            })
            .then(() => {
              history("/Login");
            });
        });
      });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <div className="signUp">
          <img width="200px" height="200px" src={Logo}></img>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Username</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <br />
            <label htmlFor="fname">Email</label>
            <br />
            <input
              className="input"
              type="email"
              id="fname"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <label htmlFor="lname">Phone</label>
            <br />
            <input
              className="input"
              type="number"
              id="lname"
              name="phone"
              value={phoneNbr}
              onChange={(e) => {
                setPhoneNbr(e.target.value);
              }}
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input
              className="input"
              type="password"
              id="lname"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <br />
            <button>Signup</button>
          </form>
        </div>
        <div className='loginLink'>
          <p>Already have an account..  <Link to={"/login"}>Login</Link></p>
        </div>
      </div>
    </div>
  );
}
