interface CardProps {
  counter: {
    time: number;
    label: string;
  };
}

const Card: React.FC<CardProps> = ({ counter }) => {
  const { time, label } = counter;
  return (
    <div className="flex flex-col bg-white rounded-[10px] w-[98px] h-[122px] justify-center items-center">
      <h1 className="text-[#212337] text-[40px] tracking-tight ">{time}</h1>
      <span className="text-lg tracking-tight text-[#4A4A52]">{label}</span>
    </div>
  );
};

export default Card;
