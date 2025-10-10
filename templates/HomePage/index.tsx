import Layout from "@/components/Layout";
import Hero from "./Hero";
import About from "./About";
import Highlights from "./Highlights";
import Features from "./Features";
import Showcase from "./Showcase";
import Vehicles from "./Vehicles";
import UseCases from "./UseCases";
import Packages from "./Packages";
import Reviews from "./Reviews";
import FinalCTA from "./FinalCTA";
import News from "./News";
import Faqs from "./Faqs";
import { faqs } from "@/mocks/faqs";

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
