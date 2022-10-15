import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import English from "./English";
import Japanese from "./Japanese";
import SetDefaultLanguage from "./SetDefaultLanguage";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SetDefaultLanguage />} />
        <Route path="/en" element={<English />} />
        <Route path="/jp" element={<Japanese />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
