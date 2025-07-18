import About from "./sections/About";
import Banner from "./sections/Banner";
import FruitBundle from "./sections/FruitBundle";
import HarvestBlog from "./sections/HarvestBlog";
import Product from "./sections/Product";
import Testimonial from "./sections/Testimonial";

const Home: React.FC = () => {
  return (
    <div>
      <Banner />
      <Product />
      <About />
      <FruitBundle />
      <Testimonial />
      <HarvestBlog />
    </div>
  );
};

export default Home;
