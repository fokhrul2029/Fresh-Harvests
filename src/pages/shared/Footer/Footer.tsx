import BottomFooter from "./sections/BottomFooter";
import TopFooter from "./sections/TopFooter";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F6F6] pt-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <TopFooter />
        <BottomFooter />
      </div>
    </footer>
  );
};

export default Footer;
