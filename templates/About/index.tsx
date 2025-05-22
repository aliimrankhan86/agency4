import Layout from "@/components/Layout";
import Hero from "./Hero";
import Intro from "./Intro";
import Values from "./Values";
import Vision from "./Vision";
import Showcase from "../HomePage/Showcase";
import Team from "./Team";
import Faqs from "../HomePage/Faqs";
import { faqs } from "@/mocks/faqs";
import { members } from "@/mocks/members";

const AboutPage = () => {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Values />
      <Vision />
      <Showcase />
      <Team members={members.slice(0, 3)} />
      <Faqs section={faqs[0]} showMarquee={true} gradientColor="#F5F5F5" />
    </Layout>
  );
};

export default AboutPage;
