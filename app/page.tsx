import { Hero, Modules } from "@components/page-sections";

export default function Home() {
  return (
    <main className="bg-neutral-100 h-screen w-screen overflow-x-hidden">
      <Hero />
      <Modules />
    </main>
  );
}
