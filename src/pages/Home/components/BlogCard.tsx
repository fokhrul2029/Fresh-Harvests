import { FaArrowRightLong } from "react-icons/fa6";
import img from "../../../assets/blog-img.png";

const BlogCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <img className="w-full rounded-[20px]" src={img} alt="" />
      <span className="text-lg text-[#4A4A52]">May 23, 2024</span>
      <h3 className="text-lg font-medium text-[#212337]">
        Mastering Salad Creations: Tips and Tricks for Building Delicious and
        Nutritious Salads"
      </h3>
      <a
        href="#"
        className="flex items-center gap-2 text-lg font-semibold text-[#FF6A1A]"
      >
        <span>Read More</span> <FaArrowRightLong />{" "}
      </a>
    </div>
  );
};

export default BlogCard;
