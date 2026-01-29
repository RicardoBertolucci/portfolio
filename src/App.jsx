import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
          <Home />
          <About />
      </main>
    </>
  );
}

export default App;
