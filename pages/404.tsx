import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Error.module.css";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Страната не е намерена | Коли за скрап</title>
        <meta name="description" content="Страната която търсиш не съществува. Върни се към начало." />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <main className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Страната не е намерена</h2>
          <p className={styles.errorMessage}>
            Съжаляваме, но страната която търсиш не съществува или е преместена.
          </p>
          <div className={styles.errorActions}>
            <Link href="/" className={styles.homeButton}>
              Назад към начало
            </Link>
            <Link href="/contact" className={styles.contactButton}>
              Свържи се с нас
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
