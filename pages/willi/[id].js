import Head from "next/head";
import { Fragment } from "react";

export const getStaticPaths = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  const paths = data.map((willi) => {
    let id = willi.id.toString();
    return {
      params: { id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await result.json();

  return {
    props: { willi: data },
  };
};

const Info = ({ willi }) => {
  return (
    <Fragment>
      <Head>
        <title>Information</title>
        <meta name="subpage gate metadata" content="Subpage gate content" />
      </Head>
      <div>
        <h1>More Information</h1>
        <p>{willi.name}</p>
        <p>{willi.email}</p>

        <p>{willi.address.street}</p>
        <p>{willi.address.suite}</p>
        <p>{willi.address.city}</p>
        <p>{willi.address.zipcode}</p>
        <p>{willi.phone}</p>
        <p>{willi.website}</p>
        <p>{willi.company.name}</p>
      </div>
    </Fragment>
  );
};

export default Info;
