import Layout from "@/components/Layout";
import Hero from "./Hero";
import About from "./About";
import Highlights from "./Highlights";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Highlights />
    </Layout>
  );
};

export default HomePage;
