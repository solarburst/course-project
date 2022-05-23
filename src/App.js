import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Введите валидные данные");
    } else {
      let bmi = weight / ((height / 100) * (height / 100));
      setBMI(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("У вас недостаточная масса тела");
      }

      if (bmi >= 18.5 && bmi < 25) {
        setMessage("У вас нормальная масса тела");
      }

      if (bmi >= 25 && bmi < 30) {
        setMessage("У вас избыточная масса тела");
      }

      if (bmi > 30) {
        setMessage("У вас ожирение");
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <Section />
      <div className="bmi-container">
        <h2 className="center">Калькулятор ИМТ</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Вес (в кг)</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Рост (в см)</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Подтвердить
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Ваш ИМТ: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
