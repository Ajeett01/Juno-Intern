import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame from "./pages/Frame";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frame />} />
    </Routes>
  );
}
export default App;
