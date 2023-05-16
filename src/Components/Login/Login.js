import React ,{ useState ,useContext }from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import { useNavigate,Link } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';


function Login() {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const {Firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
  const handleSubmition = (e)=>{
    e.preventDefault()
    Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate("/")
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <div className='loginDiv'>
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmition}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
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
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>

        </div>
        <div className='signUp'>
          <p>Create a new account..  <Link to={"/signup"}>Signup</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
