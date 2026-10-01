import { Banding, Cara, FAQ, Hero, Paket } from "./components/Beranda";
import FormBrief from "./components/FormBrief";

export default function Home() {
  return (
    <main>
      <Hero />
      <Cara />
      <Banding />
      <Paket />
      <FormBrief />
      <FAQ />
    </main>
  );
}
