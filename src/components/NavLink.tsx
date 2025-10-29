import clsx from "clsx";
import { Link } from "react-scroll";

export const NavLink = ({
  href,
  children,
  type = "top",
}: {
  href: string;
  children: React.ReactNode;
  type: string;
}) => {
  return (
    <Link
      to={href}
      className={clsx(
        "inline-block rounded-lg px-2 py-1 text-sm hover:bg-primary-darker",
        type === "top" ? "text-white" : "text-black hover:text-white"
      )}
    >
      {children}
    </Link>
  );
};
