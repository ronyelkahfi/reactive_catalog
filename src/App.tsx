import { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routers>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/store" element={<Store />}></Route>
        </Routes>
      </Routers>
    </div>
  );
}

export default App;
