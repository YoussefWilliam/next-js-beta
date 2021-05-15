import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div >
        <h1>My homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quod
          molestiae repellendus eaque fuga quae itaque iure dicta debitis eius,
          cum vero esse eveniet porro tempore, cumque nobis culpa iste?
        </p>
      </div>
      <Footer />
    </div>
  );
}
