import { useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import "./LoginForm.css";
import '../Welcome/Welcome.css'
import stock_dj from '../../../public/stock_dj.mp4'

function LoginFormPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/djdle" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/djdle");
    }
  };

  return (
    <>
      <div className="homepageMain">
        <video src={stock_dj} id="video" autoPlay loop muted></video>
        <div className="content2">
          {errors.length > 0 &&
            errors.map((message) => <p key={message}>{message}</p>)}
          <form onSubmit={handleSubmit} className="loginForm">
            <h1 style={{marginBottom: 0, color: 'rgb(250, 246, 0)'}}>Log In</h1>
            <NavLink style={{color: 'white'}} to={'/signup'}>Not signed up?</NavLink>
            <label style={{color: 'rgb(250, 246, 0)'}}>
              Email
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="inputs"
              />
            </label>
            {errors.email && <p>{errors.email}</p>}
            <label style={{color: 'rgb(250, 246, 0)'}}>
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="inputs"
              />
            </label>
            {errors.password && <p>{errors.password}</p>}
            <button type="submit" className="loginButton">Log In</button>
            <p style={{color: "white", textDecoration: 'underline', cursor: 'pointer'}} onClick={() => {
              setEmail('demo@aa.io');
              setPassword('password')
            }}>Login as Demo User</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginFormPage;
