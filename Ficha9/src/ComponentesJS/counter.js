import React from "react";
import "../ComponentesCSS/counter.css";
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);
  const [mensagem, setMensagem] = useState("");

  const aumentar = () => {
    setCounter((counter) => counter + 1);
    setMensagem("  O contador aumentou  ");
  };
  const diminuir = () => {
    setCounter((counter) => counter - 1);
    setMensagem("  O contador diminuiu  ");
  };
  const reset = () => {
    setCounter(0);
    setMensagem("-");
  };

  return (
    <div className="CounterTeste">
      <h1>React Counter</h1>
      <p className="contagem">{counter} </p>
      <div className="btn__container">
        <button className="control__btn" onClick={aumentar}>
          +
        </button>
        <button className="control__btn" onClick={diminuir}>
          -
        </button>
        <button className="reset" onClick={reset}>
          Reset
        </button>
        <p className="contagem">{mensagem}</p>
      </div>
    </div>
  );
}
