import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./pages/Create";
import Start from "./pages/Start";
import Home from "./pages/Home";
import { ContextsProvider } from "./components/Contexts";
import Header from "./components/Hedder";

function App() {
  return (
    <ContextsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<Start />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </ContextsProvider>
  );
}

export default App;
