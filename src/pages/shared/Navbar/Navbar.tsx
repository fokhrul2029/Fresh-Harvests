import { MdOutlineFavorite } from "react-icons/md";
import logo from "../../../assets/logo.png";
import { HiShoppingCart } from "react-icons/hi";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4  bg-amber-100">
        <div className="flex items-center h-[100px]">
          <div className="flex justify-between items-center gap-4 w-full">
            <img src={logo} className="w-[174px]" alt="" />

            <ul className="flex items-center gap-16">
              <li className="text-base">Home</li>
              <li className="text-base">Shop </li>
              <li className="text-base">About us </li>
              <li className="text-base">Blog </li>
            </ul>
            <ul className="flex items-center gap-16">
              <li className="flex items-center gap-2 text-white">
                <MdOutlineFavorite />
                <span>Favorites</span>
              </li>
              <li className="flex items-center gap-2 text-white">
                <HiShoppingCart />
                <span>Cart</span>
              </li>

              <li className="border border-white py-3 px-6 rounded text-white cursor-pointer">
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
