import React, { useEffect, useState, useCallback } from "react";
import { firebaseApp, database } from "./firebase";
import { getDatabase, ref, get, child } from "firebase/database";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [bmi, setBMI] = useState("");
  const [message, setMessage] = useState("");
  const [params, setParams] = useState();

  const fetchBmi = useCallback(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `${gender}/${age}/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          const data = snapshot.val();
          setParams(data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [age, gender]);

  const calculateBmi = () => {
    if (params) {
      const { veryLow, low, normal, high, veryHigh } = params;

      if (weight <= 0 || height <= 0 || age <= 0 || age >= 18) {
        alert("Введите валидные данные");
      } else {
        let bmi = weight / ((height / 100) * (height / 100));
        setBMI(bmi.toFixed(1));

        if (bmi < veryLow) {
          setMessage(
            `Ваш пол: ${gender}. Ваш возраст: ${age}. У вас критически недостаточный вес`
          );
        }

        if (bmi >= veryLow && bmi < low) {
          setMessage(
            `Ваш пол: ${gender}. Ваш возраст: ${age}. У вас недостаточный вес`
          );
        }

        if (bmi >= low && bmi < high) {
          setMessage(
            `Ваш пол: ${gender}. Ваш возраст: ${age}. У вас нормальный вес`
          );
        }

        if (bmi >= high && bmi < veryHigh) {
          setMessage(
            `Ваш пол: ${gender}. Ваш возраст: ${age}. У вас лишний вес`
          );
        }

        if (bmi > veryHigh) {
          setMessage(`Ваш пол: ${gender}. Ваш возраст: ${age}. У вас ожирение`);
        }
      }
    }
  };

  useEffect(() => {
    fetchBmi();
  }, [gender, age, height, weight, fetchBmi]);

  console.log("params", params);

  return (
    <div className="App">
      <Header />
      <Section />
      <div className="bmi-container">
        <h2 className="center">Калькулятор ИМТ</h2>
        {/* <form onSubmit={calcBmi}> */}
        <div>
          <label>Пол</label>
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option selected value>
              Выберите пол
            </option>
            <option>F</option>
            <option>M</option>
          </select>
        </div>
        <div>
          <label>Возраст</label>
          <input value={age} onChange={(event) => setAge(event.target.value)} />
        </div>
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
          <button className="btn" onClick={calculateBmi}>
            Подтвердить
          </button>
        </div>
        {/* </form> */}

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
