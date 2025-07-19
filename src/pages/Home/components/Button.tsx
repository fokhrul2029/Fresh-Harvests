interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div className="text-lg font-semibold text-[#FF6A1A] border border-[#FF6A1A] py-4 px-8 rounded-lg inline-block cursor-pointer hover:text-white hover:bg-[#FF6A1A] transition-all">
      {children}
    </div>
  );
};

export default Button;
