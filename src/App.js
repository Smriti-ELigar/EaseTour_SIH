import React from "react";
import Navbar from "./components/Navbar";
import EcoFriendlyPlaces from "./components/EcoFriendlyPlaces";
import ExploreByInterests from "./components/ExploreByInterests";
import AccessibilityFeatures from "./components/AccessibilityFeatures";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <EcoFriendlyPlaces />
        <ExploreByInterests />
        <AccessibilityFeatures />
      </main>
      <Footer />
    </div>
  );
}

export default App;

