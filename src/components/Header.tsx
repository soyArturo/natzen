import Logo from "@/assets/images/logos/logo_white.png";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Container } from "./Container";
import { NavLink } from "./NavLink";

const navigation = [
  { name: "Nosotros", href: "aboutus" },
  { name: "Servicios", href: "services" },
  { name: "Proyectos", href: "proyects" },
  { name: "Clientes", href: "clients" },
  { name: "Presencia", href: "presence" },
  { name: "Contacto", href: "contact" },
];

function MobileNavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <PopoverButton as={ScrollLink} to={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return open ? (
    <FaTimes className="h-8 w-8 text-white" />
  ) : (
    <FaBars className="h-8 w-8 text-white" />
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-10 w-10 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        {navigation.map((item) => (
          <MobileNavLink key={item.href} href={item.href}>
            {item.name}
          </MobileNavLink>
        ))}
      </PopoverPanel>
    </Popover>
  );
}

export const Header = () => {
  return (
    <header className="bg-transparent py-5">
      <Container>
        <nav className="relative z-50 flex items-center justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link to="#" aria-label="Home">
              <img src={Logo} alt="Grupo Natzen" className="h-20 w-auto" />
            </Link>
          </div>
          <div className="flex items-center md:gap-x-12">
            <div className="hidden md:flex md:gap-x-6">
              {navigation.map((item) => (
                <NavLink key={item.href} href={item.href} type="top">
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
