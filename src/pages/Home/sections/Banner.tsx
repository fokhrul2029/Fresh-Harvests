import Block from "../../../components/Block";
import Layout from "../../../components/Layout";

const Banner: React.FC = () => {
  return (
    <div className="pt-[178px] max-w-[1200px] mx-auto px-4 bg-[#FFFFFF1F]">
      <div className="max-w-[660px] flex flex-col gap-8 items-start">
        <Block>Welcome to Fresh Harvest</Block>
        <h1 className="text-[80px] font-semibold text-[#212337]">
          Fresh Fruits and Vegetables
        </h1>
        <Layout>
          At Fresh Harvests, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables
        </Layout>
        <button className="py-4 px-8 rounded-lg bg-[#FF6A1A] text-lg font-semibold text-white cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
