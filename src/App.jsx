import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="w-3xl max-w-full px-2 mx-auto border-l border-r border-gray-300">
        <section className="w-full px-2 py-8">
          <h2 className="text-md text-gray-900 font-semibold">
            Yoo Halo Semuanyaaa!
          </h2>
          <p className="text-sm text-gray-800 font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
            expedita possimus inventore, repellat esse sed!
          </p>
          <a
            href="#project"
            className="block w-40 text-sm text-center bg-blue-500 text-gray-100 mt-8 rounded-4xl py-1"
          >
            View Project
          </a>
        </section>

        <section className="w-full px-2 py-8 relative flex flex-col justify-center items-center text-center mb-4 border-t border-gray-300">
          {/* background */}
          <div className="absolute inset-0 -z-10 bg-cover bg-center opacity-25 overflow-hidden flex justify-center items-center mt-4">
            <img
              src="https://picsum.photos/500"
              alt="background tentang saya"
              className="w-full h-full"
            />
          </div>
          <img
            src="https://picsum.photos/200"
            alt=""
            className="mb-8 w-sm max-w-full"
          />
          <h2 className="text-md text-gray-900 font-semibold">
            Sedikit Tentang Saya
          </h2>
          <p className="text-sm text-gray-800 font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            sed recusandae sunt repudiandae! Enim quibusdam consequuntur sit
            esse id atque ullam. Laboriosam, placeat dolorem culpa praesentium
            alias in earum. A! Nam deleniti maxime modi, porro totam libero
            provident doloremque dignissimos. Dignissimos adipisci repellendus
            accusantium. Nisi culpa quos id delectus dolore sint iure laborum ea
            voluptates cupiditate quam mollitia, quidem consequatur!
          </p>
        </section>

        <section className="w-full px-2 py-8 relative border-t border-gray-300">
          <h2 className="text-md text-gray-900 font-semibold text-center mb-8">
            Project
          </h2>
          <div className="w-md max-w-full flex justify-center items-center flex-col gap-4 mx-auto">
            <div className="bg-gray-100 rounded-xl shadow shadow-gray-300/40 border border-gray-300">
              <img
                src="https://picsum.photos/200"
                alt="web"
                className="w-full h-50 rounded-t-xl"
              />
              <div className="w-full px-4 py-4">
                <h3 className="font-medium text-gray-800 text-sm">
                  Website Portofolio
                </h3>
                <p className="font-normal text-gray-700 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  aliquid aperiam, quidem dolorum id voluptatum.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
