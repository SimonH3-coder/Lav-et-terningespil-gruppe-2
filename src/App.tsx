import React from "react";
import SpillerOgTurer from "./Components/Spiller og turer/Spiller og turer";
import SplineBackground from "./Components/Baggrund/SplineBaggrund";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <SplineBackground />
      <Header />
      <SpillerOgTurer />
    </div>
  );
}

export default App;
