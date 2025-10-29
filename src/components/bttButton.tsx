import { FaWhatsapp } from "react-icons/fa6";

const BttButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <span
      className={`fixed bottom-6 right-6 items-center justify-center h-12 w-12 bg-primary-darker rounded-full p-2 z-50 cursor-pointer animate-fade-in transition-opacity duration-400 ease-in-out flex animate-bounceIn hover:bg-primary`}
      style={{ animation: "fadeIn 0.3s" }}
      onClick={scrollToTop}
    >
      <FaWhatsapp className="h-6 w-6 text-white" />
    </span>
  );
};

export default BttButton;
