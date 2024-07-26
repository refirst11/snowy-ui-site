import { Route, Routes } from "react-router-dom";
import Installation from "./pages/Installation";
import Animation1 from "./pages/Animation1";
import Animation2 from "./pages/Animation2";
import Animation3 from "./pages/Animation3";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Installation />} />
      <Route path="/animation1" element={<Animation1 />} />
      <Route path="/animation2" element={<Animation2 />} />
      <Route path="/animation3" element={<Animation3 />} />
    </Routes>
  );
};

export default App;
