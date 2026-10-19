import { NavLink } from "react-router";
import { useAuth } from "../auth/AuthContext";
//import { usePage } from "./PageContext";

/** Navbar with site navigation links */
export default function Navbar() {
  const { token, logout } = useAuth();
  // const { setPage } = usePage();
  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        {/* <a onClick={() => setPage("activities")}>Activities</a> */}
        <NavLink
          to="/activities"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Activities
        </NavLink>
        <NavLink
          to="/routines"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Routines
        </NavLink>
        {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login
            </NavLink>

            {/* <a onClick={() => setPage("register")}>Register</a>
            <a onClick={() => setPage("login")}>Login</a> */}
          </>
        )}
      </nav>
    </header>
  );
}
