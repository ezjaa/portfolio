const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-4 bg-gray-100 border-b border-gray-300">
      <a href="/" className="flex justify-center items-center gap-2">
        <div className="w-12 h-12 overflow-hidden flex justify-center items-center rounded-full">
          <img
            src="https://picsum.photos/200"
            alt="foto profil"
            className="w-full"
          />
        </div>
        <div className="leading-4">
          <h1 className="text-[1rem] text-gray-900 font-bold">Muhamad Reza</h1>
          <p className="text-[0.8rem] text-gray-800">Freelancer</p>
        </div>
      </a>

      <nav className="md:block hidden">
        <ul className="flex justify-center items-center gap-3 text-[0.9rem]">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
