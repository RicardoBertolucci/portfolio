import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Contact from "./pages/Contact/Contact.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
          <Home />
          <About />   
          <Projects />
          <Contact />
      </main>
    </>
  );
}

export default App;
