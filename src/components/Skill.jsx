const Skill = () => {
  const skills = [
    "HTML",
    "CSS",
    "Tailwind",
    "Javascript",
    "React",
    "NextJs",
    "NodeJs",
    "ExpressJs",
    "MySQL",
    "PostgreSQL",
  ];
  return (
    <section id="skill">
      <h2 className="text-lg font-bold md:text-center">Skill &amp; Alat</h2>
      <p className="text-sm text-gray-700 mt-4 md:w-[35rem] md:text-center mx-auto block">
        Skill sekaligus Alat yang sering saya gunakan. Saya terus belajar untuk
        meningkatkan skill atau keahlian saya di bidang pengembangan web.
      </p>
      <div className="w-[30rem] max-w-full mx-auto mt-4 md:text-center flex justify-center items-center flex-wrap gap-2">
        {skills.map((item, index) => {
          return (
            <span
              key={index}
              className="bg-gray-100 border-gray-300 rounded-md shadow-xs shadow-gray-300 font-bold px-2 py-1 border text-medium text-gray-700 text-xs"
            >
              {item}
            </span>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
