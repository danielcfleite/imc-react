import { useEffect, useState } from "react";
import styles from "./Calculadora.module.css";

export const Calculadora = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState("0");

  useEffect(() => {
    if (peso !== 0 && altura !== 0) {
      getResultado();
    }
  }, [peso, altura]);

  const getResultado = () => {
    const alturaEmM = altura / 100;
    const IMC = peso / (alturaEmM * alturaEmM);
    setResultado(IMC.toFixed(2));
  };

  const handlePeso = (e) => {
    if (e.target.value.length === 4) {
      return;
    } else {
      setPeso(e.target.value);
    }
  };

  const handleAltura = (e) => {
    if (e.target.value.length === 4) {
      return;
    } else {
      setAltura(e.target.value);
    }
  };

  return (
    <>
      <form className={styles.form}>
        <h1>Coloque sua altura e peso para calcular o IMC</h1>
        <div className={styles.inputContainer}>
          <label>Peso em KG</label>
          <input
            value={peso}
            type="number"
            className={styles.inputNumber}
            onChange={handlePeso}
          />
        </div>
        <div className={styles.inputContainer}>
          <label>Altura em CM</label>
          <input
            type="number"
            className={styles.inputNumber}
            onChange={handleAltura}
            value={altura}
          />
        </div>
        <p>Resultado: {resultado} </p>
      </form>
    </>
  );
};
