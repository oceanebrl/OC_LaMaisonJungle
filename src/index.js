import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Home />
      <Footer />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
