import { useState } from "react";
import Block from "../../../components/Block";
import Layout from "../../../components/Layout";
import Title from "../../../components/Title";
import Card from "../../../components/Card";

const Product: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const tabs = [
    { id: "All", label: "All" },
    { id: "Fruits", label: "Fruits" },
    { id: "Vegetables", label: "Vegetables" },
    { id: "Salad", label: "Salad" },
  ];

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
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md text-lg  font-medium transition-all duration-200 cursor-pointer border ${
                activeTab === tab.id
                  ? "bg-[#749B3F] text-white border-[#749B3F]"
                  : "text-[#A6A6A6] border-[#D9D9D9] hover:text-white hover:bg-[#749B3F]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="gird grid-cols-4 gap-6 py-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Product;
