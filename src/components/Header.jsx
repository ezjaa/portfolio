const Header = () => {
  return (
    <header class="w-full px-4 py-4 bg-gray-100/30 backdrop-blur-md fixed top-0 left-0 shadow-md z-50">
      <nav class="w-5xl max-w-full mx-auto text-[0.9rem] flex justify-center md:justify-end items-center gap-4">
        <a href="#">About</a>
        <a href="#project">Project</a>
        <a href="#skill">Skill</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
