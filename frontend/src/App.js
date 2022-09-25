import "./App.css";
import FirstPage from "./components/FirstPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ObjList from "./components/SecondPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/obj-list" element={<ObjList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
