import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, NavLink } from "react-router-dom";
import { thunkSignup } from "../../redux/session";
import '../Welcome/Welcome.css'
import stock_dj from '../../../public/stock_dj.mp4'
import './SignupForm.css'

function SignupFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
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
        <div className="content3">
          {errors.length > 0 &&
            errors.map((message) => <p key={message}>{message}</p>)}
          {errors.server && <p>{errors.server}</p>}
          <form onSubmit={handleSubmit} className="signupForm">
            <h1 style={{ marginBottom: 0, color: 'rgb(250, 246, 0)' }}>Sign Up</h1>
            <NavLink style={{color: 'white'}} to={'/login'}>Already signed up?</NavLink>
            <label style={{ color: 'rgb(250, 246, 0)' }}>
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
            <label style={{ color: 'rgb(250, 246, 0)' }}>
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="inputs"
              />
            </label>
            {errors.username && <p>{errors.username}</p>}
            <label style={{ color: 'rgb(250, 246, 0)' }}>
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
            <label style={{ color: 'rgb(250, 246, 0)' }}>
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="inputs"
              />
            </label>
            {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
            <button type="submit" className="loginButton">Sign Up</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupFormPage;
