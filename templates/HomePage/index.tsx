import Layout from "@/components/Layout";
import Hero from "./Hero";
import About from "./About";
import Highlights from "./Highlights";
import Vehicles from "./Vehicles";
import Features from "./Features";
import Showcase from "./Showcase";
import Reviews from "./Reviews";
import News from "./News";
import Faqs from "./Faqs";
import { faqs } from "@/mocks/faqs";
import { getSortedArticles } from "@/lib/posts";

const HomePage = () => {
  const news = getSortedArticles();

  return (
    <Layout>
      <Hero />
      <About />
      <Highlights />
      <Vehicles />
      <Features />
      <Showcase />
      <Reviews />
      <News news={news.slice(0, 3)} />
      <Faqs section={faqs[0]} />
    </Layout>
  );
};

export default HomePage;
