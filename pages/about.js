import Head from "next/head";
import { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <Head>
        <title>Willi's List | About</title>
        <meta name="About metadata" content="About page content" />
      </Head>
      <div>
        <h1>About page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo
          quaerat libero aspernatur facere aliquam fugit. Deserunt voluptatem
          dignissimos excepturi nisi, dolor id vitae, tempore obcaecati
          accusantium molestias suscipit aliquid.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illo
          quaerat libero aspernatur facere aliquam fugit. Deserunt voluptatem
          dignissimos excepturi nisi, dolor id vitae, tempore obcaecati
          accusantium molestias suscipit aliquid.
        </p>
      </div>
    </Fragment>
  );
};

export default About;
