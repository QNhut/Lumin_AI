import { SlArrowDown } from 'react-icons/sl';
import { NavLink, useNavigate } from 'react-router-dom';

import logo from '@/assets/images/logo-lumin.svg';

import styles from './Header.module.scss';

// PLA PLA PLA

export default function Header() {
  const navigator = useNavigate();
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo} onClick={() => navigator('/')}>
          <img src={logo} alt="Logo" />
        </div>
        <nav className={styles.menu}>
          <NavLink to="/products" className={styles.link}>
            Products
            <SlArrowDown className={styles.icon} />
          </NavLink>
          <NavLink to="/capabilities" className={styles.link}>
            Capabilities
            <SlArrowDown className={styles.icon} />
          </NavLink>
          <NavLink to="/solutions" className={styles.link}>
            Solutions
            <SlArrowDown className={styles.icon} />
          </NavLink>
          <NavLink to="/learn_Discover" className={styles.link}>
            Learn & Discover
            <SlArrowDown className={styles.icon} />
          </NavLink>
          <NavLink to="/pricing" className={styles.link}>
            Pricing
          </NavLink>
        </nav>
      </div>
      <div className={styles.actions}>
        <NavLink to="/token-demo" className={styles.requestDemo}>
          Design Tokens
        </NavLink>
        <span className={styles.separator} />
        <button className={styles.btn}>Try for free</button>
      </div>
    </header>
  );
}
