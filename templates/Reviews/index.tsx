import Layout from "@/components/Layout";
import Hero from "./Hero";
import Reviews from "../HomePage/Reviews";
import Showcase from "../HomePage/Showcase";

const ReviewsPage = () => {
  return (
    <Layout>
      <Hero />
      <Reviews />
      <Showcase />
    </Layout>
  );
};

export default ReviewsPage;
