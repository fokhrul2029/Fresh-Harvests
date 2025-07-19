import Block from "../../../components/Block";
import Layout from "../../../components/Layout";
import img from "../../../assets/offer-product.png";
import appStore from "../../../assets/app-store.png";
import bannerImg from "../../../assets/side-img.png";

const Banner: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "50%",
      }}
      className="pt-[100px] max-w-[1200px] mx-auto px-4 bg-[#FFFFFF1F]"
    >
      <div className="max-w-[660px] flex flex-col gap-8 items-start">
        <Block>Welcome to Fresh Harvest</Block>
        <h1 className="text-[48px] md:text-[80px] font-semibold text-[#212337]">
          Fresh Fruits and Vegetables
        </h1>
        <Layout>
          At Fresh Harvests, we are passionate about providing you with the
          freshest and most flavorful fruits and vegetables
        </Layout>
        <button className="py-4 px-8 rounded-lg bg-[#FF6A1A] text-lg font-semibold text-white cursor-pointer">
          Shop Now
        </button>
        <div className="w-full flex justify-center">
          <img className="w-[400px]" src={img} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <span>Download App:</span>
          <img className="w-[295px]" src={appStore} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
