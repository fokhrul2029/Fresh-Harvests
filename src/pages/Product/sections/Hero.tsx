import { useParams } from "react-router";
import { useGetProductByIdQuery } from "../../../redux/api/apiSlice";
import Block from "../../../components/Block";
import Title from "../../../components/Title";
import Layout from "../../../components/Layout";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";

const Hero: React.FC = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  if (!id) return <h1>Invalid Product ID</h1>;

  const { data, isLoading, error } = useGetProductByIdQuery(id);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;
  if (!data?.data) return <h1>No product data found</h1>;

  console.log(data.data);
  const { images, productName, price, description } = data?.data;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleInputChange = (e: any) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex gap-4 items-center justify-between py-10">
      <img className="w-[566px]" src={images?.[0]} alt="" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4 items-start">
          <Block>Fruits</Block>

          <Title>{productName}</Title>
          <div className="flex items-center gap-[3px]">
            <FaStar className="text-[#FFB848]" />
            <FaStar className="text-[#FFB848]" />
            <FaStar className="text-[#FFB848]" />
            <FaStar className="text-[#FFB848]" />
            <FaStar className="text-[#FFB848]" />
            <p className="font-medium text-lg">
              5.0 <span className="">(1 review)</span>
            </p>
          </div>
          <h1 className="text-[32px] font-semibold text-[#FF6A1A]">
            ${price}/kg
          </h1>
          <Layout>{description}</Layout>
        </div>
        <div className="flex flex-col gap-4 max-w-md">
          {/* Quantity Section */}
          <div className="flex items-center gap-4">
            <span className="text-[#212337] text-lg font-medium">Quantity</span>
            <div className="flex items-center border border-gray-300 rounded">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 hover:bg-gray-100 text-gray-600"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={handleInputChange}
                className="w-16 text-center py-1 border-none outline-none"
                min="1"
              />
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 hover:bg-gray-100 text-gray-600"
              >
                +
              </button>
            </div>
            <span className="text-gray-500">/kg</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-8 py-4 rounded-lg hover:bg-gray-50 text-[#4A4A52] text-lg font-semibold bg-[#F4F6F6] cursor-pointer">
              <BiHeart size={16} />
              Save as favorite
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-[#FF6A1A] text-white rounded hover:bg-orange-600 cursor-pointer">
              <CgShoppingCart size={16} />
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
