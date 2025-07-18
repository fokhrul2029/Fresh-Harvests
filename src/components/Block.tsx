interface BlockProps {
  children: React.ReactNode;
}

const Block: React.FC<BlockProps> = ({ children }) => {
  return (
    <div className="text-xl font-medium text-[#749B3F] rounded-lg py-1 px-3 bg-[#749B3F1A] inline-block ">
      {children}
    </div>
  );
};

export default Block;
