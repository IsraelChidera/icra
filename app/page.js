import { Navbar, Footer } from "../components";
import { Hero, About, Explore, Tech, How } from "../sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Tech />
      <How />
    </main>
  );
}
