import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import Features from '~/components/Features';
import HowItWorks from "~/components/HowItWorks";
import Benefits from "~/components/Benefits";
import Testimonials from "~/components/Testimonials";
import Vision from "~/components/Vision";
import GetStarted from "~/components/GetStarted";

export const meta: MetaFunction = () => {
  return [
    { title: "Porsia - Create Your Portfolio with AI Power" },
    { description: "Create your portfolio with AI power" },
  ];
};

export default function Index() {
  return (
    <main className="pt-16">
      <Hero />
      <div id="what-were-building" className="scroll-mt-16">
        <Features />
      </div>
      <div id="how-it-works" className="scroll-mt-16">
        <HowItWorks />
      </div>
      <div id="benefits" className="scroll-mt-16">
        <Benefits />
      </div>
      <div id="vision" className="scroll-mt-16">
        <Vision />
      </div>
      <div id="contact-form" className="scroll-mt-16">
        <GetStarted />
      </div>
    </main>
  );
} 