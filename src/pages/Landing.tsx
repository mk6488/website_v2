import Footer from "../components/sections/Footer";
import ForWho from "../components/sections/ForWho";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Pillars from "../components/sections/Pillars";
import Progression from "../components/sections/Progression";
import Testimonials from "../components/sections/Testimonials";
import TrainingOptions from "../components/sections/TrainingOptions";

function Landing() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Hero />
      <Pillars />
      <ForWho />
      <Progression />
      <HowItWorks />
      <TrainingOptions />
      <Testimonials />
      <Footer />
    </main>
  );
}

export default Landing;
