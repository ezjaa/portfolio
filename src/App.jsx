import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Header />
      <main class="w-5xl max-w-full px-4 mx-auto py-8">
        <About />
        <Project />
        <Skill />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
