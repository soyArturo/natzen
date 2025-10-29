import Logo from "@/assets/images/logos/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Container } from "./Container";
import { NavLink } from "./NavLink";

const navigation = [
  { name: "Nosotros", href: "#aboutus" },
  { name: "Servicios", href: "#services" },
  { name: "Proyectos", href: "#proyects" },
  { name: "Clientes", href: "#clients" },
  { name: "Presencia", href: "#presence" },
  { name: "Contacto", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="bg-white">
      <Container>
        <div className="pt-8 md:py-16">
          <img src={Logo} alt="Grupo Natzen" className="mx-auto h-24 w-auto" />
          <nav
            className="hidden md:mt-10 md:block md:text-sm"
            aria-label="quick links"
          >
            <div className="hidden md:-my-1 md:flex md:justify-center md:gap-x-6">
              {navigation.map((item) => (
                <NavLink key={item.href} href={item.href} type="footer">
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link to="#" className="group" aria-label="TaxPal on X">
              <FaXTwitter className="h-6 w-6 fill-slate-700 group-hover:fill-primary" />
            </Link>
            <Link
              to="https://www.facebook.com/natzen.energia/"
              target="_blank"
              className="group"
              aria-label="Natzen on Facebook"
            >
              <FaFacebook className="h-6 w-6 fill-slate-700 group-hover:fill-primary" />
            </Link>
            <Link to="#" className="group" aria-label="TaxPal on GitHub">
              <FaInstagram className="h-6 w-6 fill-slate-700 group-hover:fill-primary" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-black sm:mt-0">
            &copy; {new Date().getFullYear()} Grupo Natzen. Todos los
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};
