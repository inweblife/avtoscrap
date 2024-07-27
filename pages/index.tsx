import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Коли за скрап София</title>
        <meta name="description" content="Коли за скрап София. Изкупуване на автомобили за скрап. " />
        <meta name="keywords" content="Коли за скрап София, Изкупуване на коли, автомобили за скрап" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="55EJxgwxLPCdk5rMfhwsUdTXFh0GDDQdMokxR4pYWcs" />
      </Head>
      <main className={styles.main}>
        <div className="picture">
          <Image src="/mercedes.webp" alt="cars" width={500} height={300} style={{
              maxWidth: "100%",
              height: "auto",
            }} />

          <h1>Автомобили за скрап София</h1>
          <h3 className={styles.first_paragraph}>
            Изкупуване на автомобили в град София и областта.
          </h3>
        </div>
      </main>
      <section className={styles.text}>
        <div className={styles.paragraph}>
          <p>
            Ние сме лицензиран търговец на <Link href="/about"><strong>коли за скрап</strong></Link> - търговско дружество опериращо на територията на град София,
            чиято основна дейност е изкупуване на автомобили за скрап.
          </p>

          <p>
            Търсим всякакви коли - излезли от употреба, дерегистрирани, ударени,
            блъснати, изоставен, стари и др. МПС-та за скрап.{" "}
          </p>

          <p>
            Оценката за цената, която ще получите, когато предадете колата си
            при нас се извършва онлайн, на момента, само с едно телефонно
            обаждане по телефона или ако пишете в чата ни.
          </p>
          
          <section className={styles.btn}>
            <Link href="tel:0885701660">0885 70 16 60</Link>
          </section>

          <p>
            Ние работим всеки ден от 8 сутринта до 20 вечерта, без почивен ден и
            сме в състояние да извозим всеки автомобил в рамките на деня, в
            който сте се записали при нас.
          </p>

          <p>
            За всяка една кола, която купуваме, издаваме <Link href="/services"><strong>документи за бракуване</strong></Link>,
            с които по-късно бързо и лесно ще отпишете колата от КАТ, съответно - Общината,
            за да бъде снета от отчет.
          </p>

          <p>
            Заплащаме в брой или по банков път, както Ви е удобно на Вас, още по
            време на взимането на автомобила, без излишно забавяне и досадни
            процедури.
          </p>

          <p>
            За да върнете кола за скрап при нас е достатъчно да имате един от
            двата талона на колата и да представите Ваш документ, като лице,
            което връща колата.
          </p>

          <p>
            Обслужваме София, както и близките села около столицата в радиус 50
            километра, като нашите Пътни помощи успяват да достигнат всяка една
            точка, където има възможност да бъде качен автомобила на платформата
            за извозване.
          </p>
        </div>
      </section>
      <section className={styles.btn}>
        <Link href="/about">За нас</Link>
      </section>

      <section className={styles.last}>
        <div className={styles.item1}>
          <h3 className={styles.heading_services}>Нашите услуги включват</h3>
          <h5 className={styles.plain_text}>
            Безплатен транспорт, взимане от адрес, документ за бракуване важащ
            пред КАТ и др. .
          </h5>
        </div>

      </section>
      <section className={styles.button}>
        <Link href="/services">Услуги</Link>
      </section>

      <section className={styles.text}>
        <div className={styles.paragraph}>
          <p>
            За да бъде оценена Вашата кола, е необходимо да изберете удобен за
            Вас начин <Link href="/contact"><strong>за връзка с нас</strong></Link> - може да ни се обадите по телефона, може
            да ни пишете в месинджър или чрез имейл на пощата. Преди това,
            обаче, е необходимо да се приготвите с малко данни за Вашия
            автомобил - марка, модел, година на производство, тип на двигателя -
            дизел или бензин, купе - седан, хечбек или комби, както и
            местонахождение.
          </p>
          <style jsx>{`
            p {
              margin-top: 0;
            }
          `}</style>
        </div>
      </section>
      <section className={styles.btn}>
        <Link href="/contact">За Контакти</Link>
      </section>
    </>
  );
}
