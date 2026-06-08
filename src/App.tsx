import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseLearning from "./pages/CourseLearning";
import Homework from "./pages/Homework";
import Solution from "./pages/Solution";
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";

export default function App() {
  return (
    <Router>
      <ParticleBg />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseLearning />} />
        <Route path="/course/:id/homework" element={<Homework />} />
        <Route path="/course/:id/solution" element={<Solution />} />
      </Routes>
    </Router>
  );
}
