import { Navbar, Footer } from "../components";
import { Hero, About } from "../sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
