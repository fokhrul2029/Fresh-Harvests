import { MdOutlineFavorite } from "react-icons/md";
import logo from "../../../assets/logo.png";
import { HiShoppingCart } from "react-icons/hi";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4  ">
        <div className="flex items-center h-[100px]">
          <div className="flex justify-between items-center gap-4 w-full">
            <Link to={"/"}>
              <img src={logo} className="w-[174px]" alt="" />
            </Link>

            <ul className="lg:flex items-center gap-16 hidden text-[#4A4A52]">
              <li className="text-base cursor-pointer">Home</li>
              <li className="text-base cursor-pointer">Shop </li>
              <li className="text-base cursor-pointer">About us </li>
              <li className="text-base cursor-pointer">Blog </li>
            </ul>
            <ul className="lg:flex items-center gap-16 hidden">
              <li className="flex items-center gap-2 cursor-pointer">
                <MdOutlineFavorite />
                <span>Favorites</span>
              </li>
              <li className="flex items-center gap-2 cursor-pointer">
                <HiShoppingCart />
                <span>Cart</span>
              </li>

              <li className="border py-3 px-6 rounded cursor-pointer font-semibold border-gray-500 text-gray-600">
                Sign In
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
