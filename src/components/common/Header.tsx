import { Link } from "react-router";
import type { HeaderProps } from "../../features/requests/types/header";

const Header = (props: HeaderProps) => {
  const { title, description, addBreadCrumbs = false, pageName } = props;
  return (
    <>
      {addBreadCrumbs && (
        <div className="flex flex-wrap gap-2 p-4">
          <Link to="/" className="text-[#60758a] text-base font-medium">
            Requests
          </Link>
          <span className="text-[#60758a] text-base font-medium">/</span>
          <span className="text-[#111418] text-base font-medium">
            {pageName}
          </span>
        </div>
      )}

      <div className="px-4 mb-4">
        <h1 className="text-[32px] font-bold text-[#111418]">{title}</h1>
        <p className="text-sm text-[#60758a]">{description}</p>
      </div>
    </>
  );
};

export default Header;
