import Layout from "@/components/Layout";
import Hero from "./Hero";
import Team from "../About/Team";
import { members } from "@/mocks/members";
import Values from "../About/Values";
import Showcase from "../HomePage/Showcase";

const TeamPage = () => {
  return (
    <Layout>
      <Hero />
      <Team members={members} />
      <Values />
      <Showcase />
    </Layout>
  );
};

export default TeamPage;
