import { FC } from "react";
import Link from "../../core/Link";

interface PrimaryNavLinksProps {
  links: NavLink[];
}

interface NavLink {
  text: string;
  url: string;
  icon?: string;
}

export const PrimaryNavLinks: FC<PrimaryNavLinksProps> = ({ links }) => {
  return (
    <nav className="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0   md:pb-0">
      {links.map((link: NavLink, idx) => (
        <Link key={idx} href={link.url} text={link.text} />
      ))}
    </nav>
  );
};
