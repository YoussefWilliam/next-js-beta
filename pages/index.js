import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div >
        <h1>My homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod
          molestiae repellendus eaque fuga quae itaque iure dicta debitis eius,
          cum vero esse eveniet porro tempore, cumque nobis culpa iste?
        </p>
      </div>
      <Link href="/subpages/lists">Check other pages lists</Link>
    </div>
  );
}
