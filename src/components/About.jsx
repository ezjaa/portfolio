const About = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center md:flex-row flex-col px-0 md:px-16">
      <div className="w-[20rem] h-[20rem] mx-auto mb-4">
        <img
          src="/portfolio/about.png"
          alt="Foto Profile Muhamad Reza"
          className="w-full object-center"
        />
      </div>
      <div className="w-[30rem] max-w-full">
        <h1 className="text-md text-gray-800 font-semibold">
          Yoo Hello What's Up! I'm <br />
          <strong className="text-2xl text-gray-900">Muhamad Reza</strong>
        </h1>
        <p className="text-sm text-gray-700">
          Saya seorang <strong>Web Developer</strong>. Saya senang memanfaatkan
          waktu luang dengan mempelajari banyak hal, untuk terus memperbaiki
          diri, membangun relasi dan memperluas wawasan agar menjadi lebih baik
          dari versi diri saya kemarin.
        </p>
        <a
          href="#contact"
          className="block w-[11rem] max-w-full bg-blue-500 font-medium text-sm text-center rounded-2xl mt-8 text-gray-100 font-medium py-1"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default About;
