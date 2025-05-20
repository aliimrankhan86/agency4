import Layout from "@/components/Layout";
import Hero from "./Hero";
import Intro from "./Intro";
import Values from "./Values";
import Vision from "./Vision";
import Showcase from "../HomePage/Showcase";

const AboutPage = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Values />
      <Vision />
      <Showcase />
    </Layout>
  );
};

export default AboutPage;
