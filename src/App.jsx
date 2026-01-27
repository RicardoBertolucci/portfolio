import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
