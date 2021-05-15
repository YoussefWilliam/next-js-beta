import Head from "next/head";
import { Fragment } from "react";

const Willi = () => {
  return (
    <Fragment>
      <Head>
        <title>Willi's List</title>
        <meta name="subpage gate metadata" content="Subpage gate content" />
      </Head>
      <div>
        <h1>This is the subpages gate</h1>
      </div>
    </Fragment>
  );
};

export default Willi;
