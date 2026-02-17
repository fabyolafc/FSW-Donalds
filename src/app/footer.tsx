import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-gray-100 py-6">
        <div className="flex flex-col items-center gap-3 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Fabyola Campos</p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/fabyola-campos"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://github.com/fabyolafc"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.instagram.com/fabyolacampos"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-black"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
