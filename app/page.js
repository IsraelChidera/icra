import { Navbar, Footer } from "../components";
import { Hero, About, Explore, Tech } from "../sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Tech />
    </main>
  );
}
