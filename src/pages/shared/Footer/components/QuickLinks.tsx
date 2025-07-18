interface LinkItem {
  label: string;
  href: string;
}

interface QuickLinksProps {
  title: string;
  links: LinkItem[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ title, links }) => {
  return (
    <div className="grid-cols-1 md:col-span-2">
      <h3 className="text-lg font-medium text-[#212337] mb-3">{title}</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-sm text-[#4A4A52] hover:text-gray-900 transition-colors duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
