import { useState } from "react";
import { Header } from "./components/Header";
import { Calculadora } from "./components/Calculadora";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Calculadora />
    </>
  );
}

export default App;
