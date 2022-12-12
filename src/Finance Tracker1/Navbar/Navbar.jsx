import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useLogout } from "../hooks/useLogout";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const { user } = useContext(UserContext);
  const { logout } = useLogout();

  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li className={styles.title}>myMoney</li>
          {!user && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/Signup">Signup</Link>
              </li>
            </>
          )}
          {user && (
            <>
              <p> {user.displayName} </p>
              <li>
                <button onClick={logout} className="btn">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
