import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Home from "./pages/Home";
import ImageGallery from "./ImageGallery";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<ImageGallery/>}/>
      </Routes>
    </Router>
  );
}

export default App;
