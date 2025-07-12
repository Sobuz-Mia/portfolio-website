import { Features } from "./components/modules/Features";
import Hero from "./components/modules/Hero";
import Navbar from "./components/modules/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-[1200px] w-full mx-auto">
        <Hero />
        <Features />
      </main>
    </>
  );
}
