import img from "../../../assets/offer-banner.png";
import Block from "../../../components/Block";
import Title from "../../../components/Title";
import Card from "../components/Card";

const FruitBundle: React.FC = () => {
  const counter = [
    { time: 23, label: "Days" },
    { time: 18, label: "Hour" },
    { time: 54, label: "Min" },
    { time: 21, label: "Second" },
  ];
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="bg-cover bg-center"
    >
      <div className="max-w-[1200px] mx-auto px-4 h-[640px] flex items-center">
        <div className="max-w-[835px] flex flex-col gap-2 items-start">
          <Block>Special Offer</Block>
          <h1 className="text-[80px] tracking-tight font-medium text-[#212337] ">
            Seasonal Fruit Bundle
          </h1>
          <Title>
            Discount up to <span className="text-[#FF6A1A]">80% OFF</span>
          </Title>
          <div className="flex gap-6 items-center">
            {counter.map((count: any, i) => (
              <Card key={i} counter={count} />
            ))}
          </div>
          <div className="text-[32px] font-semibold tracking-tight text-white bg-[#176D38] py-4 px-8 rounded-[92px] mt-5">
            CODE : <span className="text-[#FAC714]">FRESH28</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitBundle;
