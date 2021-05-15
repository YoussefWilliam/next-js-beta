import Link from "next/link";

const ERROR_PAGE = () => {
  return (
    <div className="not-found">
      <h1>Ooooopppsss....🚨 </h1>
      <h1>This page can not be found</h1>
      <p>Go back to the Home page</p>
      <Link href="/">
        <a>Home Page</a>
      </Link>
    </div>
  );
};

export default ERROR_PAGE;
