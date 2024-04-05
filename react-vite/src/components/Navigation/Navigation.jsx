import { NavLink } from "react-router-dom";
// import ProfileButton from "./ProfileButton";
import { useDispatch, useSelector } from "react-redux";
import "./Navigation.css";
import { thunkLogout } from "../../redux/session";

function Navigation() {
  const user = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  if (user) {
    return (
      <div className="navButtons">
        <NavLink to="/" style={{textDecoration: 'none', color: "white"}}>Home</NavLink>
        <NavLink to='/djdle' style={{textDecoration: 'none', color: "white"}}>DJdle</NavLink>
        <NavLink to='/' style={{color: "white", textDecoration: "none"}} onClick={() => dispatch(thunkLogout())}>Sign Out</NavLink>
      </div>
    )
  } else {
    return (
      <div>
        <NavLink to="/">Home</NavLink>
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
    )
  }
}

export default Navigation;
