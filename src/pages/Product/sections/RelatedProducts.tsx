import Block from "../../../components/Block";
import Card from "../../../components/Card";
import Layout from "../../../components/Layout";
import Title from "../../../components/Title";
import { useGetProductsQuery } from "../../../redux/api/apiSlice";

const RelatedProducts: React.FC = () => {
  const { data, isLoading, error } = useGetProductsQuery("");

  return (
    <div className="py-28">
      <div className="flex flex-col gap-4 items-center text-center">
        <Block>Our Products</Block>
        <Title>Related products</Title>
        <Layout>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid
          corporis ratione porro eaque animi at odio error magni blanditiis
          aspernatur, eos harum eveniet corrupti. Maiores nemo ea amet eveniet.
        </Layout>
      </div>
      <div className="pt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center gap-6">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          data.data
            .slice(0, 4)
            .map((product: any) => <Card product={product} />)
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
