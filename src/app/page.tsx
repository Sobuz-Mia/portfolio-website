import Hero from "./components/modules/Hero";
import Navbar from "./components/modules/Navbar";

export default function Home() {
  return (
    <main className="max-w-[1440px] w-full mx-auto">
      <Navbar />
      <Hero />
    </main>
  );
}
