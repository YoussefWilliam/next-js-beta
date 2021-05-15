import Head from "next/head";
import { Fragment } from "react";

const Lists = () => {
  return (
    <Fragment>
      <Head>
        <title>Willi's List | Lists</title>
        <meta name="lists metadata" content="Lists page content" />
      </Head>
      <div>
        <h1>Lists page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ex
          repudiandae voluptatum eligendi, similique dolores corporis corrupti
          reprehenderit molestias, provident iste itaque iure laudantium vero,
          quam recusandae? Labore, rerum tempora.
        </p>
      </div>
    </Fragment>
  );
};

export default Lists;
