import Block from "../../../components/Block";
import Layout from "../../../components/Layout";
import Title from "../../../components/Title";
import Button from "../components/Button";
import img from "../../../assets/about-us.png";

const About: React.FC = () => {
  return (
    <div className="flex justify-between items-center gap-4">
      <img className="w-[686px]" src={img} alt="" />
      <div className="flex flex-col gap-4 items-start">
        <Block>About us</Block>
        <Title>About Fresh Harvest</Title>
        <Layout>
          Welcome to Fresh Harvest, your premier destination for high-quality
          and fresh produce. We are passionate about providing you with the
          finest fruits, vegetables, and salad ingredients to nourish your body
          and delight your taste buds. With a commitment to excellence,
          sustainability, and customer satisfaction, Fresh Harvest is here to
          revolutionize your grocery shopping experience.
        </Layout>
        <Button>Read More</Button>
      </div>
    </div>
  );
};

export default About;
