import { FaYoutube, FaInstagram, FaFacebook, FaSpotify, FaMobile } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/citygate.au/", icon: <FaInstagram /> },
  { href: "https://www.youtube.com/c/CitygateFellowshipChurch", icon: <FaYoutube /> },
  { href: "https://www.facebook.com/citygatefellowship/", icon: <FaFacebook /> },
  { href: "https://open.spotify.com/artist/6TPbJ773kpCHNXJEbesPmF?si=_2weBKfjRoqx1EOlE167JQ", icon: <FaSpotify /> },
  { href: "https://tithely.app.link/citygate-fellowship-church", icon: <FaMobile /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          ©Citygate Fellowship Church {new Date().getFullYear()}. All rights reserved
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-[#fdf0e0]"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
