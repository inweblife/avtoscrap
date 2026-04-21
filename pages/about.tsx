import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/About.module.css";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>За нас | Коли за скрап София</title>
        <meta
          name="description"
          content="Лицензиран център за изкупуване и бракуване на коли в София. Над 100 000 обработени автомобила. Безплатен транспорт, плащане в брой и удостоверение за дерегистрация на място."
        />
        <meta
          name="keywords"
          content="коли за скрап София, изкупуване на коли, бракуване на автомобили, лицензиран център за разкомплектоване"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL || "https://kolizascrap.vercel.app"}/about`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL || "https://kolizascrap.vercel.app"}/about`} />
        <meta property="og:title" content="За нас | Коли за скрап София" />
        <meta property="og:description" content="Лицензиран център за изкупуване и бракуване на коли в София. Над 100 000 обработени автомобила. Безплатен транспорт и плащане в брой." />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL || "https://kolizascrap.vercel.app"}/carsold.webp`} />
      </Head>

      <main className={styles.main}>
        <h1>Нашата работа говори най-добре за нас</h1>
        <div className="picture">
          <Image
            src="/carsold.webp"
            alt="След преработка на над 100 000 коли за скрап в София"
            width={500}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />

          <h3>Вече преработихме над 100 000 автомобила за скрап</h3>
        </div>
      </main>

      <section className={styles.text}>
        <div className={styles.paragraph}>
          <p>
            <Link href="/blog/izkupuvane-na-koli-za-scrap" style={{ textDecoration: "none", color: "inherit" }}>
              <strong>Изкупуваме автомобили за скрап</strong>
            </Link>{" "}
            повече от 20 години и за това време се усъвършенствахме да работим
            по начин съобразен изцяло с удобствата на клиента.
          </p>

          <p>
            За това време успяхме да преработим над 100 000 коли за скрап, които
            преминаха през разкомплектоване и рециклиране от шредерната ни
            инсталация до новия живот на шредираната скрап в металообработващата
            индустрия.
          </p>

          <p>
            От момента, в който влезете в комуникация с нас, независимо дали сте
            ни се обадили по телефона или сте ни писали на поща, или в чата на
            месинджър, ние вече работим за Вас.
          </p>

          <p>
            За да може да оценим Вашият автомобил ние питаме за марка, модел,
            година на производство, тип на двигател - дизел или бензин, тип на
            купе - седан, хечбек или комби, както и за местонахождение.
            Изкупуваме и автомобили с технически проблеми -{" "}
            <a href="https://kolazascrap.com/blog/dizelovi-koli-gtp/" target="_blank" rel="noopener noreferrer">
              <strong>дизелови коли и проблеми с гтп</strong>
            </a>{" "}
            или{" "}
            <a href="https://kolazascrap.com/blog/benzinovi-koli-problem-s-gtp/" target="_blank" rel="noopener noreferrer">
              <strong>бензинови коли проблеми с вредните емисии</strong>
            </a>
            {" "}също намират добра цена при нас.
          </p>

          <p>
            След като ни дадете тези данни, ние оценяваме Вашата стара кола на
            момента и уточняваме всички останали детайли, които могат да
            повлияят върху цената - липсващи части, окомплектовка, експлоатация,
            състояние и др. Прочетете повече за{" "}
            <Link href="/blog/kolko-struva-kola-za-scrap" style={{ textDecoration: "none", color: "inherit" }}>
              <strong>колко струва кола за скрап</strong>
            </Link>
            {" "}в нашия блог.
          </p>

          <p>
            Ние няма да Ви подведем със скрити такси, както правят други като
            транспорт, отбив и др. Онова, което сме се договорили и обявили като
            цена, точно него Ви заплащаме в брой или с банков превод, в удобен
            за Вас начин, стига колата да е в онова състояние, в което сте
            обявили.
          </p>

          <p>
            За да върнете кола за скрап при нас е достатъчно да имате един от
            двата талона на колата и да представите Ваш документ, като лице,
            което връща колата. От наша страна ще издадем{" "}
              <Link href="/blog/dokumenti-za-brakuvane-na-kola" style={{ textDecoration: "none", color: "inherit" }}>
                  <strong>документ за бракуване на кола</strong>
              </Link>
            . Това е важно по-късно при дерегистрация на МПС.
          </p>

          <p>
            Обслужваме София, както и близките села около столицата в радиус 50
            километра, като нашите Пътни помощи успяват да достигнат всяка една
            точка, където има възможност да бъде качен автомобила на платформата
            за извозване.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
