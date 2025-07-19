import Hero from "./sections/Hero";
import RelatedProducts from "./sections/RelatedProducts";

const Product: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Hero />
      <RelatedProducts />
    </div>
  );
};

export default Product;
