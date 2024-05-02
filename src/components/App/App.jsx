import { useEffect, useState } from "react";

import "./App.css";
import Header from "../Header/Header";
import Title from "../Title/Title";
import AboutMe from "../AboutMe/AboutMe";

function App() {
  const [testNumber, updateTestNumber] = useState("7");

  useEffect(() => {
    console.log(testNumber);
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="page__content">
        <Title />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
