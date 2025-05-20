import Layout from "@/components/Layout";
import Hero from "./Hero";

type Vehicle = {
  image: string;
  vehicle: string;
  name: string;
  description: string;
  range: string;
  top_speed: string;
  mph: string;
  slug: string;
};

type VehiclePageProps = {
  vehicle: Vehicle;
};

const VehiclePage = ({ vehicle }: VehiclePageProps) => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default VehiclePage;
