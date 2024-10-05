import { useState } from "react";
// import Logo from './mainlogo.png'
import Navbar from "../components/Navbar";
import "./App.css";
import Home from "../components/Home";
import Watchlist from "../components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "../components/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Banner />
                <Home />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
