import { Navbar, Footer } from "../components";
import { Hero, About, Explore, Tech, How, Contact } from "../sections";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <How />
      <Tech />
      <Contact />
      <Footer />
    </main>
  );
}
