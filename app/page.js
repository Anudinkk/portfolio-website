import Experience from "./_components/Experience";
import Hero from "./_components/Hero";
import Heros from "./_components/Heros";
import Intro from "./_components/Intro";
import Technologies from "./_components/Technologies";
import Work from "./_components/Work";


export default function Home() {
  return (
    <div>
      <Heros />
      <div className="md:px-10 lg:px-20">
        <Intro />
        <Technologies />
        <Experience />
        <Work />

      </div>
    </div>
  );
}
