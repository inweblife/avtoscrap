import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Error.module.css";

const ServerError: React.FC = () => {
  return (
    <>
      <Head>
        <title>Внутрешна грешка | Коли за скрап</title>
        <meta
          name="description"
          content="Възникна внутрешна грешка. Моля, опитайте отново по-късно."
        />
        <meta name="robots" content="noindex" />
      </Head>

      <main className={styles.errorContainer}>
        <div className={styles.errorCode}>500</div>
        <h1 className={styles.errorTitle}>Внутрешна грешка на сървъра</h1>
        <p className={styles.errorMessage}>
          Извиняваме се, но възникна неочаквана грешка. Моля опитайте отново по-късно
          или свържете се с нас.
        </p>

        <div className={styles.errorActions}>
          <Link href="/" className={styles.homeButton}>
            Назад на начало
          </Link>
          <Link href="/contact" className={styles.contactButton}>
            Свържете се с нас
          </Link>
        </div>
      </main>
    </>
  );
};

export default ServerError;
