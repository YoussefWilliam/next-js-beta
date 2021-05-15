import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={80} height={80} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/willi/lists">
        <a>Lists</a>
      </Link>
      <Link href="/badpage">
        <a>404 Page</a>
      </Link>
    </nav>
  );
};

export default Navbar;
