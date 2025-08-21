import Main from "./Components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Applayout from "./Layouts/Applayout";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import PageNotFound from "./Components/PageNotFound";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
