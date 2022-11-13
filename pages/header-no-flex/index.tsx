import Image from "next/image";
import { cl } from "../../utils/classList";
import s from "./styles.module.css";

export default function HeaderNoFlex() {
  () => {};
  return (
    <nav className={s.nav}>
      <Image src="https://unsplash.it/40" alt="logo" />
      <ul className={s.nav_optionsList}>
        <li className={s.nav_optionsItem}>
          <a href="#">Home</a>
        </li>
        <li className={s.nav_optionsItem}>
          <a href="#">About</a>
        </li>
        <li className={s.nav_optionsItem}>
          <a href="#">Blog</a>
        </li>
        <li className={s.nav_optionsItem}>
          <a href="#">Pricing</a>
        </li>
        <li className={s.nav_optionsItem}>
          <a href="#">Pricing</a>
        </li>
        <li className={s.nav_optionsItem}>
          <a href="#">Contact</a>
        </li>
      </ul>

      <ul className={s.nav_loginList}>
        <li className={s.nav_loginItem}>
          <a href="#">Login</a>
        </li>
        <li className={s.nav_loginItem}>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
}
