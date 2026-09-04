import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/routing/Home";
import { About } from "./pages/routing/About";
import { NotFound } from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>hello everyone about</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;