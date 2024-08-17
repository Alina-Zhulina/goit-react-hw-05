import { NavLink } from "react-router-dom";
import css from "./NavLink.module.css";

const NavItem = ({ to, children }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? css.active : css.link)}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
