import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Link from "next/link";
import blogPosts from "../data/blog-posts.json";

export default function Home() {

  return (
    <>
      <Head>
        <title>Коли за скрап София</title>
        <meta
          name="description"
          content="Коли за скрап София. Изкупуване на автомобили за скрап. Калкулатор за скрап автомобили онлайн. "
        />
        <meta
          name="keywords"
          content="Коли за скрап София, Изкупуване на коли, автомобили за скрап"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"} />
        <meta name="google-site-verification" content="o3yDWZaFGvq8nSbZFsW2kJnBTWBvjgYuVkIS_8vihgQ" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"} />
        <meta property="og:title" content="Коли за скрап София" />
        <meta property="og:description" content="Коли за скрап София. Изкупуване на автомобили за скрап. Калкулатор за скрап автомобили онлайн." />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL || "https://example.com"}/mercedes.webp`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Коли за скрап София",
              "description": "Изкупуване на автомобили за скрап в София и областта. Безплатен транспорт и документи за бракуване.",
              "telephone": "+359885701660",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Свети Георги Победоносец №1а",
                "addressLocality": "София",
                "addressRegion": "Кремиковци",
                "postalCode": "1849",
                "addressCountry": "BG"
              },
              "areaServed": [
                { "@type": "City", "name": "София" },
                { "@type": "City", "name": "Пловдив" },
                { "@type": "City", "name": "Варна" },
                { "@type": "City", "name": "Бургас" },
                { "@type": "Country", "name": "България" }
              ],
              "priceRange": "$$",
              "openingHours": "Mo-Su 08:00-20:00"
            })
          }}
        />
      </Head>
      <main className={styles.main}>
        <div className="picture">
          <Image
            src="/mercedes.webp"
            alt="Автомобили за скрап в София - Изкупуване на стари и повредени коли"
            width={500}
            height={300}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />

          <h1>Автомобили за скрап София</h1>
          <h3 className={styles.first_paragraph}>
            Изкупуване на автомобили в град София и областта.
          </h3>
        </div>
      </main>
      <section className={styles.text}>
        <div className={styles.paragraph}>
          <p>
            Ние сме лицензиран търговец на{" "}
            <a href="/about" style={{ textDecoration: "none", color: "inherit" }}>
              <strong>коли за скрап</strong>
            </a>{" "}
            - търговско дружество опериращо на територията на град София, чиято
            основна дейност е изкупуване на автомобили за скрап.
          </p>

          <p>
            Търсим всякакви коли - излезли от употреба, дерегистрирани, ударени,
            блъснати, изоставен, стари и др. МПС-та за скрап.{" "}
          </p>

          <p>
            Всеки сам може да провери{" "}
            <a href="https://kolazascrap.com/blog/kolko-struva-kola-za-scrap/" target="_blank" rel="noopener noreferrer">
              <strong>колко струва кола за скрап</strong>
            </a>{" "}
            в калкулатора ни за оценка на скрап автомобили. Крайната оценка и
            офертата, която ще получите, когато предадете колата си при нас се
            извършва онлайн, на момента, само с едно телефонно обаждане по
            телефона или ако пишете в чата ни.
          </p>

          <section className={styles.btn}>
            <a href="tel:+359885701660" aria-label="Обадете се на 0885 70 16 60">0885 70 16 60</a>
          </section>

          <p>
            Ние работим всеки ден от 8 сутринта до 20 вечерта, без почивен ден и
            сме в състояние да извозим всеки автомобил в рамките на деня, в
            който сте се записали при нас.
          </p>

          <p>
            За всяка една кола, която купуваме, издаваме{" "}
            <a href="/services" style={{ textDecoration: "none", color: "inherit" }}>
              <strong>документи за бракуване</strong>
            </a>
            , с които по-късно бързо и лесно ще отпишете колата от КАТ,
            съответно - Общината, за да бъде снета от отчет.
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
            <a href="https://kolazascrap.com/koli-za-scrap-sofia/">
              <strong>Изкупуваме коли за скрап в град София</strong>
            </a>
            , както и близките села около столицата в радиус 50 километра, като
            нашите Пътни помощи успяват да достигнат всяка една точка, където
            има възможност да бъде качен автомобила на платформата за извозване.
            Обслужваме още градовете{" "}
            <a href="https://kolazascrap.com/koli-za-scrap-plovdiv/">
              <strong>Пловдив</strong>
            </a>
            ,{" "}
            <a href="https://kolazascrap.com/koli-za-scrap-varna/">
              <strong>Варна</strong>
            </a>
            , Бургас и въобще цяла България.
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
            Вас начин{" "}
            <a href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
              <strong>за връзка с нас</strong>
            </a>{" "}
            - може да ни се обадите по телефона, може да ни пишете в месинджър
            или чрез имейл на пощата. Преди това, обаче, е необходимо да се
            приготвите с малко данни за Вашия автомобил - марка, модел, година
            на производство, тип на двигателя - дизел или бензин, купе - седан,
            хечбек или комби, както и местонахождение.             Осигуряваме всичко
            необходимо за{" "}
            <a href="https://kolazascrap.com/blog/brakuvane-na-avtomobil/" target="_blank" rel="noopener noreferrer">
              <strong>бракуване на автомобила.</strong>
            </a>
          </p>
          <style jsx>{`
            p {
              margin-top: 0;
            }
          `}</style>
        </div>
      </section>

      <section className={styles.blogSection}>
        <h2>Блог</h2>
        <p className={styles.blogIntro}>Последни публикации и полезни статии за автомобилите за скрап</p>

        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.blogCardWrapper}>
              <Link href={`/blog/${post.slug}`}>
                <a className={styles.blogCardLink} aria-label={`Прочети: ${post.title}`} />
              </Link>
              {post.image && (
                <div className={styles.cardImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={250}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </div>
              )}
              <div className={styles.cardContent}>
                <h3>{post.title}</h3>
                <p
                  className={styles.blogExcerpt}
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <Link href={`/blog/${post.slug}`}>
                  <a className={styles.readMore}>Прочетете повече →</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
