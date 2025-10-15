import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import Hero from "./Hero";
import About from "./About";
import Highlights from "./Highlights";
import Features from "./Features";
import Showcase from "./Showcase";
import Vehicles from "./Vehicles";
import { faqs } from "@/mocks/faqs";

// Dynamic imports for non-critical components
const UseCases = dynamic(() => import("./UseCases"), {
  loading: () => <div className="h-96 bg-neutral-100 animate-pulse rounded-lg" aria-label="Loading use cases section" />,
});

const Packages = dynamic(() => import("./Packages"), {
  loading: () => <div className="h-96 bg-neutral-100 animate-pulse rounded-lg" aria-label="Loading packages section" />,
});

const Reviews = dynamic(() => import("./Reviews"), {
  loading: () => <div className="h-96 bg-neutral-100 animate-pulse rounded-lg" aria-label="Loading reviews section" />,
});

const FinalCTA = dynamic(() => import("./FinalCTA"), {
  loading: () => <div className="h-64 bg-neutral-100 animate-pulse rounded-lg" aria-label="Loading call to action section" />,
});

const News = dynamic(() => import("./News"), {
  loading: () => <div className="h-96 bg-neutral-100 animate-pulse rounded-lg" aria-label="Loading news section" />,
});

const Faqs = dynamic(() => import("./Faqs"), {
  loading: () => <div className="h-64 bg-neutral-100 animate-pulse rounded-lg" aria-label="Loading FAQ section" />,
});

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Highlights />
      <Features />
      <Showcase />
      <Vehicles />
      <UseCases />
      <Packages />
      <Reviews />
      <FinalCTA />
      <News />
      <Faqs section={faqs[0]} />
    </Layout>
  );
};

export default HomePage;
