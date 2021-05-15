import Head from "next/head";
import { Fragment } from "react";
import styles from "../../styles/Willi.module.css";

export const getStaticProps = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();

  return {
    props: { willis: data },
  };
};

const Willi = ({ willis }) => {
  return (
    <Fragment>
      <Head>
        <title>Willi's List</title>
        <meta name="subpage gate metadata" content="Subpage gate content" />
      </Head>
      <div>
        <h1>All Willi's friends</h1>
        {willis.map((willi) => (
          <div key={willi.id}>
            <a className={styles.name}>
              <h4>{willi.name}</h4>
            </a>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Willi;
