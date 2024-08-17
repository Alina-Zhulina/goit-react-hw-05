import NavItem from "../NavLink/NavLink";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.headerNav}>
      <div className={css.wrapper}>
        <nav>
          <ul className={css.nav}>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/movies">Movies</NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
