import Head from "next/head";
import styles from "../styles/Home.module.scss";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import ContactForm from "../forms/contactForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Naitre ensemble</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <PhoneIcon style={{ marginLeft: "10px", marginRight: "2px" }} />
          <span>06 44 76 55 88</span>
          <MailIcon style={{ marginLeft: "10px", marginRight: "2px" }} />
          <span>contact@gmail.com</span>
        </header>
        <div className={styles.menu}>
          <ul>
            <li>Qui suis-je ?</li>
            <li>Me contacter</li>
          </ul>
        </div>
        <div className={styles.grid}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
