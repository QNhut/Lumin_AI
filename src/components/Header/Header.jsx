import { useNavigate } from 'react-router-dom';

import logo from './logo.png';

import styles from './Header.module.scss';

export default function Header() {
  const navigator = useNavigate();
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__left}>
        <div className={styles.navbar__logo} onClick={() => navigator('/')}>
          <img src={logo} alt="Logo" />
        </div>
        <nav className={styles.navbar__menu}>
          <NavLink to="/products" className={styles.navbar__link}>
            Products
            <SlArrowDown className="navbar__icon" />
          </NavLink>
          <NavLink to="/capabilities" className={styles.navbar__link}>
            Capabilities
            <SlArrowDown className="navbar__icon" />
          </NavLink>
          <NavLink to="/solutions" className={styles.navbar__link}>
            Solutions
            <SlArrowDown className="navbar__icon" />
          </NavLink>
          <NavLink to="/learn_Discover" className={styles.navbar__link}>
            Learn & Discover
            <SlArrowDown className="navbar__icon" />
          </NavLink>
          <NavLink to="/pricing" className={styles.navbar__link}>
            Pricing
          </NavLink>
        </nav>
      </div>
      <div className={styles.navbar__actions}>
        <NavLink to="/request" className={styles.navbar__link}>
          Request a demo
        </NavLink>
        <h3>|</h3>
        <button className={styles.btn}>Try for free</button>
      </div>
    </header>
  );
}
