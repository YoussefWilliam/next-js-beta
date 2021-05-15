import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>My navbar list</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/subpages/lists">
        <a>Lists</a>
      </Link>
    </nav>
  );
};

export default Navbar;
