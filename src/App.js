import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import English from "./English";
import Japanese from "./Japanese";
import SetDefaultLanguage from "./SetDefaultLanguage";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <h1>Haiku Helper</h1>
      </header>
      <Routes>
        <Route path="/" element={<SetDefaultLanguage />} />
        <Route path="/en" element={<English />} />
        <Route path="/jp" element={<Japanese />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
