import { Github, Facebook, Instagram, LinkedinIcon } from "lucide-react";

const Card = ({children}) => {
  return (
    <div className="bg-gray-100 border-gray-300 rounded-md shadow-xs shadow-gray-300 font-bold p-1 border text-medium text-gray-700 text-xs">
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-gray-800 px-4 py-4 text-gray-100">
      <div className="w-full flex flex-col md:flex-row justify-around items-start gap-6 mt-4">
        <div className="flex justify-center items-center gap-4 pr-8">
          <div className="w-15 h-15 rounded-xl bg-blue-500 flex justify-center items-center overflow-hidden flex-none">
            <img
              src="/portfolio/foto_profile.webp"
              alt=""
              className="w-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-md">Muhamad Reza</span>
            <span className="text-xs">
              Seorang Pelajar
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm">Layanan</span>
          <ul>
            <li className="text-xs font-light">Web Development</li>
            <li className="text-xs font-light">UI Design</li>
            <li className="text-xs font-light">Backend Development</li>
            <li className="text-xs font-light">API Integration</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm">Sosial</span>
          <ul className="flex gap-4 mt-2">
            <li className="text-xs font-light">
              <a href="/" target="_blank">
                <Card className="p-2">
                  <Github size={20} />
                </Card>
              </a>
            </li>
            <li className="text-xs font-light">
              <a href="/" target="_blank">
                <Card className="p-2">
                  <Instagram size={20} />
                </Card>
              </a>
            </li>

            <li className="text-xs font-light">
              <a href="/" target="_blank">
                <Card className="p-2">
                  <Facebook size={20} />
                </Card>
              </a>
            </li>
            <li className="text-xs font-light">
              <a href="/" target="_blank">
                <Card className="p-2">
                  <LinkedinIcon size={20} />
                </Card>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-sm">Alamat</span>
          <div className="flex flex-col">
            <span className="text-xs font-light">
              Kab.Sukabumi, Jawa Barat, Indonesia
            </span>
            <span className="text-xs font-light">reza200606@gmail.com</span>
          </div>
        </div>
      </div>

      <span className="text-[0.6rem] tracking-widest font-light mt-8 block w-full text-center px-8 py-4 border-y border-gray-100">
        &copy;
        <b>
          <a href="/about">Muhamad Reza</a>
        </b>{" "}
        2026. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
