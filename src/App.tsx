import { Route, Routes } from "react-router-dom";
import Installation from "./pages/Installation";
import Animation1 from "./pages/Animation1";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Installation />} />
      <Route path="/animation1" element={<Animation1 />} />
    </Routes>
  );
};

export default App;
