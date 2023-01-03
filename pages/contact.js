import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Head>
        <title>За контакти | Коли за скрап</title>
        <meta name="description" content="За връзка с нас 0885 70 16 60. Работи без почивен ден от 08 до 20, включително събота и неделя. Осигурва безплатен транспорт от място." />
        <meta name="keywords" content="Купува изгодно коли, Най-добри цени за коли, Изкупува всякакви коли" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Контакт с Коли за скрап</h1>
        <div className="picture">
          <Image src="/avtoscrap.webp" alt="cars" width={500} height={300} />

          <h3>Онлайн оценка на Вашата кола веднага</h3>
        </div>
      </main>

      <section className={styles.text}>
        <div className={styles.paragraph}>
          <p>
            Моля да се подготвите с всички данни за Вашата кола, преди да се
            свържете с нас. Необходимо е да знаете марка, модел, година на
            производство, тип на двигател - дизел или бензин, тип на купе -
            хечбек, седан или комби, както и местонахождението на колата.
          </p>

          <p>
            Изберете удобен за Вас начин за контакт с нас - по телефона или в
            чата на Фейсбук. Звъннете или ни пишете.
          </p>

          <p>Ако искате да разговаряте с нас обадете ни се</p>

          <section className={styles.btn}>
        <Link href="tel:0885701660">0885 70 16 60</Link>
      </section>

          <p>
            Ние работим всеки ден от 8 сутринта до 20 вечерта, без почивен ден и
            сме в състояние да извозим всеки автомобил в рамките на деня, в
            който сте се записали при нас.
          </p>

          <p>
          Ако искате да ни пишете в чата на фейсбук
          </p>

          <section className={styles.btn}>
        <Link href="https://www.facebook.com/ecometal/">Facebook чат</Link>
      </section>


          <p>
          Ако предпочитате да ни пишете на имейл, заповядайте
          </p>

          <section className={styles.btn}>
        <Link href="mailto:cars@ecometal.bg">Поща</Link>
      </section>

          <p>
            За да върнете кола за скрап и при нас е достатъчно да имате един от
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
        <Link href="/">За нас</Link>
      </section>
    </>
  );
};

export default Contact;
