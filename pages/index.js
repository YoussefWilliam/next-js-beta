import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Willi's List | Home</title>
        <meta name="Home metadata" content="Homepage component" />
      </Head>
      <div>
        <div>
          <h1 className={styles.title}>⚓ Anchor page ⚓</h1>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quod molestiae repellendus eaque fuga quae itaque iure dicta debitis
            eius, cum vero esse eveniet porro tempore, cumque nobis culpa iste?
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quod molestiae repellendus eaque fuga quae itaque iure dicta debitis
            eius, cum vero esse eveniet porro tempore, cumque nobis culpa iste?
          </p>
        </div>
        <Link href="/willi">
          <a className={styles.btn}> See Willi's lists 📚 </a>
        </Link>
      </div>
    </Fragment>
  );
}
