import { useState } from "react";
import Block from "../../../components/Block";
import Layout from "../../../components/Layout";
import Title from "../../../components/Title";
import Card from "../../../components/Card";
import {
  useGetCategoryQuery,
  useGetProductsQuery,
} from "../../../redux/api/apiSlice";

const Product: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(
    "6751516f9c52879c1fde6558"
  );

  const {
    data: tabs,
    isLoading: tabsLoading,
    error: tabsError,
  } = useGetCategoryQuery("");

  const { data, isLoading, error } = useGetProductsQuery("");

  return (
    <div className="pt-16">
      <div className="flex flex-col items-center gap-4 text-center pb-6">
        <Block>Our Products</Block>
        <Title>Our Fresh Products</Title>
        <Layout>
          We pride ourselves on offering a wide variety of fresh and flavorful
          fruits, vegetables, and salad ingredients.
        </Layout>
        <div className="flex items-center gap-6 py-1">
          {tabsLoading ? (
            <h1>Loading</h1>
          ) : tabsError ? (
            <h1>Something went wrong. Please try later!</h1>
          ) : (
            tabs?.data?.map((tab: any) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md text-lg  font-medium transition-all duration-200 cursor-pointer border ${
                  activeTab === tab.id
                    ? "bg-[#749B3F] text-white border-[#749B3F]"
                    : "text-[#A6A6A6] border-[#D9D9D9] hover:text-white hover:bg-[#749B3F]"
                }`}
              >
                {tab.categoryName}
              </button>
            ))
          )}
        </div>
      </div>
      <div className="gird grid-cols-2 md:grid-cols-4 gap-6 py-4 justify-between text-center">
        {isLoading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          (() => {
            const filteredProducts = data?.data?.filter(
              (product: any) => product.categoryId === activeTab
            );
            const productsToShow = filteredProducts?.slice(0, 8);

            return productsToShow && productsToShow.length > 0 ? (
              productsToShow.map((product: any) => (
                <Card product={product} key={product.id} />
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <h2 className="text-xl text-gray-500">
                  No products exist for this category
                </h2>
              </div>
            );
          })()
        )}
      </div>
    </div>
  );
};

export default Product;
