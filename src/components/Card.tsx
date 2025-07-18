import { Link } from "react-router";

const Card: React.FC = () => {
  return (
    <Link
      to="/hello"
      className="bg-white rounded-[20px] shadow-2xs hover:shadow-2xl shadow-[#092B5E0F] p-4 max-w-[282px] cursor-pointer inline-block"
    >
      <div className="bg-gray-50 rounded-lg py-[10px] px-3 flex justify-center cursor-pointer">
        <img
          src="https://i.ibb.co.com/RcLP3xZ/Onion.png"
          alt="Mushroom"
          className="flex items-center max-w-[258px] h-[208px] object-cover"
        />
      </div>

      <div className="text-center pt-3 flex flex-col gap-3">
        <h3 className="font-medium text-lg text-[#212337]">Mushroom</h3>
        <p className="text-[#4A4A52] text-lg">$2.3/kg</p>

        <button
          onClick={(e) => e.preventDefault()}
          className="w-full bg-white border border-[#D9D9D9] text-[#212337] py-3 rounded-lg text-lg font-medium hover:bg-[#FF6A1A] transition-colors cursor-pointer hover:text-white"
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default Card;
