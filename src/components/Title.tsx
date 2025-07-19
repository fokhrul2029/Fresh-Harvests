interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className="inline-block text-[38px] md:text-[48px] font-medium text-[#212337]">
      {children}
    </div>
  );
};

export default Title;
