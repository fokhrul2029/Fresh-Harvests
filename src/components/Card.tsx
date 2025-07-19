import { Link } from "react-router";

interface CardProps {
  product: {
    productName: string;
    price: number;
    id: string;
    images: string[];
  };
}

const Card: React.FC<CardProps> = ({ product }) => {
  const { productName, price, id, images } = product;
  return (
    <Link
      to={`/product/${id}`}
      className="bg-white rounded-[20px] shadow-2xs hover:shadow-2xl shadow-[#092B5E0F] p-4 w-[160px] lg:w-[282px] cursor-pointer inline-block col-span-1"
    >
      <div className="bg-gray-50 rounded-lg py-[10px] px-3 flex justify-center cursor-pointer">
        <img
          src={images[0]}
          alt="Mushroom"
          className="flex items-center max-w-[258px] h-[208px] object-cover"
        />
      </div>

      <div className="text-center pt-3 flex flex-col gap-3">
        <h3 className="font-medium text-lg text-[#212337]">{productName}</h3>
        <p className="text-[#4A4A52] text-lg">${price}/kg</p>

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
