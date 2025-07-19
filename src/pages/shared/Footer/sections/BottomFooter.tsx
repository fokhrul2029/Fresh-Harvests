import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const BottomFooter: React.FC = () => {
  return (
    <div className="py-8 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-4">
      <p className="text-sx font-medium text-[#212337]">
        © Copyright 2024, All Rights Reserved by Banana Studio
      </p>
      <div className="flex gap-4 items-center">
        <a
          href="#"
          className="w-8 h-8 rounded-full bg-[#212337] flex items-center justify-center"
        >
          <FaTwitter className="text-white" />
        </a>
        <a
          href="#"
          className="w-8 h-8 rounded-full bg-[#212337] flex items-center justify-center"
        >
          <FaFacebook className="text-white" />
        </a>
        <a
          href="#"
          className="w-8 h-8 rounded-full bg-[#212337] flex items-center justify-center"
        >
          <FaInstagram className="text-white" />
        </a>
      </div>
    </div>
  );
};

export default BottomFooter;
