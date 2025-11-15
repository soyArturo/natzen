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
        "inline-block rounded-lg px-2 py-1 text-sm cursor-pointer ",
        type === "top" ? "text-white hover:bg-primary-darker" : "text-black "
      )}
    >
      {children}
    </Link>
  );
};
