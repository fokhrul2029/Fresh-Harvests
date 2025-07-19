import Block from "../../../components/Block";
import Layout from "../../../components/Layout";
import Title from "../../../components/Title";
import BlogCard from "../components/BlogCard";

const HarvestBlog: React.FC = () => {
  return (
    <div className="pb-28">
      <div className="flex flex-col items-center text-center gap-4">
        <Block>Our Blog</Block>
        <Title>Fresh Harvest Blog</Title>
        <Layout>
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
          related to fresh produce, healthy eating, and culinary inspiration.
        </Layout>
      </div>
      <div className="pt-8 flex gap-6 flex-col md:flex-row">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default HarvestBlog;
