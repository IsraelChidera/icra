import { Navbar, Footer } from "../components";
import { Hero, About, Explore } from "../sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Explore />
    </main>
  );
}
