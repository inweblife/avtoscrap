import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>

        <div className={styles.col}>
          <p className={styles.brand}>Коли за скрап София</p>
          <p className={styles.tagline}>
            Лицензиран рециклатор на ИУМПС.<br />
            Работим 7 дни от 08:00 до 20:00.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Навигация</p>
          <ul className={styles.navList}>
            <li><Link href="/">Начало</Link></li>
            <li><Link href="/about">За нас</Link></li>
            <li><Link href="/services">Услуги</Link></li>
            <li><Link href="/blog">Блог</Link></li>
            <li><Link href="/contact">Контакти</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Контакти</p>
          <ul className={styles.navList}>
            <li><a href="tel:+359885701660">0885 70 16 60</a></li>
            <li><a href="mailto:cars@ecometal.bg">cars@ecometal.bg</a></li>
            <li>
              <a href="https://www.facebook.com/ecometal/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
          </ul>
          <address className={styles.address}>
            ул. Свети Георги Победоносец №1а,<br />
            кв. Кремиковци, София 1849
          </address>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>&copy; {currentYear} Коли за скрап София. Всички права запазени.</p>
        <p className={styles.credit}>
          <a href="https://inweblife.pages.dev/" target="_blank" rel="noopener noreferrer">
            <strong>Изработка на уебсайт и оптимизация</strong>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
