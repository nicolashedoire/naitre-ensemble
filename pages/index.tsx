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
          <span>leslierichardn@gmail.com</span>
        </header>
        <div className={styles.menu}>
          <ul>
            <li>Qui suis-je ?</li>
            <li>Me contacter</li>
          </ul>
        </div>
        <div className={styles.presentation}>
          <h1 className={styles.title}>Mon savoir faire</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            architecto quis voluptatem corporis eius. Fuga enim eveniet quam
            architecto nesciunt obcaecati harum ab accusantium debitis fugiat.
            Excepturi nulla neque inventore! Numquam cupiditate autem obcaecati,
            reprehenderit nihil blanditiis illo sunt minus nostrum ipsa
            molestias impedit odio libero est odit delectus voluptate doloribus,
            consequuntur officiis! Nemo cumque quaerat laborum labore.
            Perspiciatis, in! Maiores quam pariatur cum adipisci minima error,
            aspernatur explicabo, esse quaerat, ipsum nulla. Possimus at
            recusandae dolorum, labore animi maxime itaque neque aperiam
            voluptates corporis temporibus quia harum. Tempore, harum. Quasi
            eveniet officiis nesciunt voluptate assumenda aperiam cum omnis iste
            qui dolore laudantium sint possimus facilis nisi sapiente ipsa
            suscipit modi, sit voluptatum deleniti odio. Porro alias sed ut
            assumenda. Libero dolores voluptate cupiditate, sapiente voluptas
            itaque incidunt voluptatum, veniam saepe sunt ratione dolorem
            expedita perspiciatis omnis temporibus aliquam quos! Porro cum
            temporibus nulla eum magni esse praesentium dignissimos
            exercitationem. Blanditiis facilis quasi, sint natus expedita non
            repellendus nobis maiores officiis cum nihil dolorum possimus modi
            quos culpa. Voluptatem repudiandae dicta esse consectetur obcaecati
            voluptatibus magni et, reiciendis dolorem aliquid? Voluptas in optio
            fugiat, ratione placeat quidem ipsam odio totam? Recusandae
            veritatis sequi est incidunt quis necessitatibus pariatur ipsa nam
            suscipit facere! Odio eos officiis numquam ipsam nostrum. Quod,
            eligendi? Facilis et numquam fugiat laudantium cum magnam
            perspiciatis illo velit sed eos hic culpa quo, modi quaerat impedit
            ad. Voluptas maxime tempore soluta delectus labore voluptatibus sit
            doloribus aliquam dolores! Neque incidunt corrupti odio fuga
            molestiae. Laudantium totam quasi pariatur aspernatur earum
            provident sequi eaque quibusdam nesciunt minima, officiis in,
            recusandae soluta eligendi magnam ad necessitatibus sit beatae
            facilis dignissimos! Similique, enim. Temporibus odio nisi aliquam
            vero consectetur, pariatur eligendi inventore laboriosam accusamus
            quam amet alias, itaque rem iusto hic laborum? Corrupti perferendis
            dolorum amet quidem ullam nam fugit quisquam.
          </p>
          <h1 className={styles.title}>Mes offres</h1>
          <div className={styles.gridContainer}>
            <div className={styles.card}>Offre 1</div>
            <div className={styles.card}>Offre 2</div>
            <div className={styles.card}>Offre 3</div>
            <div className={styles.card}>Offre 4</div>
          </div>
        </div>
        <div className={styles.grid}>
          <ContactForm />
        </div>
      </main>
    </div>
  );
}
