const Project = () => {
  return (
    <section id="project" className="w-full py-8 my-8 border-y-2 border-gray-300">
      <h2 className="text-lg font-bold md:text-center">Proyek</h2>
      <p className="text-sm text-gray-700 mt-4 md:w-[35rem] md:text-center mx-auto block">
        Sebagian kecil proyek website yang pernah saya kerjakan. Sebagaian
        bersama tim dan sebagian di kerjakan secara Fullstack.
      </p>
      <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="w-full max-w-full border border-gray-300 bg-gray-100 rounded-2xl shadow-md shadow-gray-300">
          <div className="w-full h-[12rem] flex justify-center items-center overflow-hidden rounded-t-2xl">
            <img
              src="/portfolio/website_portofolio.png"
              alt="Website Portofolio"
              className="w-full object-center object-cover"
            />
          </div>
          <div className="px-4 py-4">
            <h3 className="text-md font-semibold text-gray-800">
              Website Portofolio
            </h3>
            <p className="text-sm text-gray-700 text-justify line-clamp-3">
              Membangun website portofolio menggunakan HTML, Tailwind CSS, dan
              Javascript
            </p>
            <div className="border-y border-gray-300 mt-2 py-2">
              <p className="text-xs text-gray-700">
                <strong>Peran : </strong>Fullstack
              </p>
              <p className="text-xs text-gray-700">
                <strong>Teknologi: </strong>React, Tailwind
              </p>
            </div>
            <div className="flex justify-end items-center gap-1 mt-2">
              <a
                href="https://ezjaa.github.io/portfolio/"
                className="px-4 py-1 bg-blue-500 text-xs text-gray-100 font-medium rounded-2xl"
              >
                Live Preview
              </a>
              <p
                href="#"
                className="px-4 py-1 bg-blue-500 text-xs text-gray-100 font-medium rounded-2xl"
              >
                Expand
              </p>
              <p
                href="#"
                className="px-4 py-1 bg-blue-500 text-xs text-gray-100 font-medium rounded-2xl"
              >
                Share
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
