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
      <div className="max-w-[1200px] mx-auto px-4">
        <Product />
        <About />
      </div>
      <FruitBundle />
      <div className="max-w-[1200px] mx-auto px-4">
        <Testimonial />
        <HarvestBlog />
      </div>
    </div>
  );
};

export default Home;
