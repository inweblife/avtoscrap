import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Error.module.css";

const ServerError: React.FC = () => {
  return (
    <>
      <Head>
        <title>Вътрешна грешка | Коли за скрап</title>
        <meta
          name="description"
          content="Възникна вътрешна грешка. Моля, опитайте отново по-късно."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
      </Head>

      <main className={styles.errorContainer}>
        <div className={styles.errorCode}>500</div>
        <h1 className={styles.errorTitle}>Вътрешна грешка на сървъра</h1>
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
