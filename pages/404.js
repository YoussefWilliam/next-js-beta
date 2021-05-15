import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ERROR_PAGE = () => {
  const [counter, setCounter] = useState(3);

  const rounter = useRouter();

  useEffect(() => {
    counter > 0 &&
      setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
  }, [counter]);

  useEffect(() => {
    setTimeout(() => {
      rounter.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Ooooopppsss....🚨 </h1>
      <h1>This page can not be found</h1>
      <h2>
        Wait {counter} secound(s) and you will be redirected back to Home Page
      </h2>
      <h1> OR 🙇‍♀️</h1>
      <p>Go back to the Home page</p>
      <Link href="/">
        <a>Home Page</a>
      </Link>
    </div>
  );
};

export default ERROR_PAGE;
