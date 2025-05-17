import Hero from "./components/Hero";
import Problem from "./components/Problem";
import ComparisonChart from "./components/ComparisonChart";
import PortfolioShowcase from "./components/PortfolioShowcase";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Reason from "./components/Reason";
import AboutUs from "./components/AboutUs";
import Message from "./components/Message";

export default function Home() {
  return (
    <main className="max-w-screen overflow-hidden">
      <Hero />
      <Problem />
      <Reason />
      <ComparisonChart />
      <PortfolioShowcase />
      <Testimonials />
      <CTA />
      <Message />
      <AboutUs />
    </main>
  );
}
