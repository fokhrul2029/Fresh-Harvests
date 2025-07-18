interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <p className="inline-block text-[14px] text-[#4A4A52] max-w-[448px] leading-6">
      {children}{" "}
    </p>
  );
};

export default Layout;
