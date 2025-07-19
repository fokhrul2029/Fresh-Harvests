import img from "../../../../assets/logo.png";
import storeImg from "../../../../assets/app-store.png";
import payment from "../../../../assets/payment.png";
import QuickLinks from "../components/QuickLinks";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";

const TopFooter: React.FC = () => {
  const quickLinks1 = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "About us", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Demo Blog", href: "#" },
  ];

  const quickLinks2 = [
    { label: "Support", href: "#" },
    { label: "Cart", href: "#" },
    { label: "Sign in", href: "#" },
    { label: "Register", href: "#" },
  ];

  return (
    <div className="border-b pb-6 border-[#D9D9D9]">
      <div className="grid grid-cols-4 md:grid-cols-11 gap-8">
        <div className="flex flex-col justify-between col-span-4">
          <img className="max-w-[230px]" src={img} alt="" />
          <div className="md:flex flex-col gap-3 hidden">
            <strong>Download App</strong>
            <img className="max-w-[295px]" src={storeImg} alt="" />
          </div>
        </div>
        <QuickLinks title="Quick links 1" links={quickLinks1} />
        <QuickLinks title="Quick links 1" links={quickLinks2} />
        <div className="grid-cols-2 md:col-span-3">
          <h3 className="text-lg font-medium text-[#212337] mb-3">
            Contact us
          </h3>
          <ul className="space-y-3">
            <li>
              <a
                href=""
                className="text-sm text-[#4A4A52] hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
              >
                <BsTelephone className="text-[#749B3F]" />
                <span>1234 5678 90</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-[#4A4A52] hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
              >
                <CiMail className="text-[#749B3F]" />
                <span>Freshharvests@gmail.com</span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-sm text-[#4A4A52] hover:text-gray-900 transition-colors duration-200 flex items-center gap-1"
              >
                <IoLocationOutline className="text-[#749B3F]" />
                <span>Tanjung Sari Street, Pontianak, Indonesia </span>
              </a>
            </li>
            <li className="hidden md:flex  flex-col justify-between pt-3">
              <div className="flex flex-col gap-3">
                <strong>Accepted Payment Methods:</strong>
                <img className="max-w-[295px]" src={payment} alt="" />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden flex-col sm:flex-row gap-6 col-span-4">
          <div className="flex flex-col gap-3">
            <strong>Accepted Payment Methods:</strong>
            <img className="max-w-[295px]" src={payment} alt="" />
          </div>
          <div className="flex flex-col gap-3">
            <strong>Download App</strong>
            <img className="max-w-[295px]" src={storeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
