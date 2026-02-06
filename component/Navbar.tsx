import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h3 className={styles.title}>Коли за скрап</h3>
        </Link>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.menu_list} ${isOpen ? styles.active : ""}`}>
          <li>
            <Link href="/" onClick={closeMenu}>
              Начало
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              За нас
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={closeMenu}>
              Услуги
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Контакти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
