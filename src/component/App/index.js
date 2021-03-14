import React, { useState, useEffect } from "react";
import Button from "../Button";
import { Container, Display, ButtonContainer, Window } from "./styles/app";
const App = () => {
  const [oldValue, setOldValue] = useState(null);
  const [value, setValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [decimal, setDecimal] = useState(false);
  useEffect(() => {
    alert(
      "❗❗❗Уучлаарай, Хариуг гаргахдаа зөвхөн тэнцүүгийн тэмдэг ашиглана уу!❗❗❗"
    );
  }, []);
  const handleClick = (content) => {
    // console.table({
    //   time: "start",
    //   value: value,
    //   oldValue: oldValue,
    //   operator: operator,
    // });
    if (content === "C") {
      setValue(0);
      setOldValue(null);
      setOperator(null);
      setDecimal(false);
      return;
    }
    if (content === "±") {
      setValue(value * -1);
      return;
    }
    if (content === "%") {
      setValue(value / 100);
      return;
    }
    if (content === "÷") {
      if (operator !== null && value !== null) {
        if (operator === "+") {
          setValue(oldValue + value);
        }
        if (operator === "-") {
          setValue(oldValue - value);
        }
        if (operator === "*") {
          setValue(oldValue * value);
        }
        if (operator === "/") {
          setValue(oldValue / value);
        }
      } else if (operator === null && value) {
        setOldValue(value);
        setOperator("/");
        setValue(null);
      }
      setOperator("/");
      // console.table({
      //   time: "end",
      //   value: value,
      //   oldValue: oldValue,
      //   operator: operator,
      // });
      return;
    }
    if (content === "×") {
      if (operator !== null && value !== null) {
        if (operator === "+") {
          setValue(oldValue + value);
        }
        if (operator === "-") {
          setValue(oldValue - value);
        }
        if (operator === "*") {
          setValue(oldValue * value);
        }
        if (operator === "/") {
          setValue(oldValue / value);
        }
      } else if (operator === null && value) {
        setOldValue(value);
        setValue(null);
      }
      setOperator("*");
      return;
    }
    if (content === "-") {
      if (operator !== null && value !== null) {
        if (operator === "+") {
          setValue(oldValue + value);
        }
        if (operator === "-") {
          setValue(oldValue - value);
        }
        if (operator === "*") {
          setValue(oldValue * value);
        }
        if (operator === "/") {
          setValue(oldValue / value);
        }
      } else if (operator === null && value) {
        setOldValue(value);
        setValue(null);
      }
      setOperator("-");
      return;
    }
    if (content === "+") {
      if (operator !== null && value !== null) {
        if (operator === "+") {
          setValue(oldValue + value);
        }
        if (operator === "-") {
          setValue(oldValue - value);
        }
        if (operator === "*") {
          setValue(oldValue * value);
        }
        if (operator === "/") {
          setValue(oldValue / value);
        }
      } else if (operator === null && value !== null) {
        setOldValue(value);
        setValue(null);
      }
      setOperator("+");
      return;
    }
    if (content === "=") {
      if (operator !== null && value !== null) {
        if (operator === "+") {
          setValue(oldValue + value);
        }
        if (operator === "-") {
          setValue(oldValue - value);
        }
        if (operator === "*") {
          setValue(oldValue * value);
        }
        if (operator === "/") {
          setValue(oldValue / value);
        }
      }
      setOperator(null);
      setOldValue(null);
      return;
    }
    if (content === ".") {
      if (value.toString().includes(".")) {
        return;
      }
      setDecimal(true);
      return;
    }
    // work with numbers
    let num = parseFloat(content);
    if (value !== null) {
      if (decimal) {
        const multiplied = num / 10;
        console.log("num", num * 0.1);
        console.log("multiplied", multiplied);
        console.log("res", multiplied + value);
        setValue(multiplied + value);
        setDecimal(false);
        return;
      }
      if (value.toString().includes(".")) {
        const power = value.toString().substring(value.toString().indexOf("."))
          .length;
        console.log("power", power);
        setValue(value + num * 0.1 ** power);
        return;
      }
      setValue(value * 10 + num);
      return;
    } else {
      if (decimal) {
        setValue(num * 0.1);
        return;
      }
      setValue(num);
      return;
    }
  };
  const result = () => {
    const res = value !== null ? value : oldValue;
    if (decimal) {
      return res + ".";
    } else {
      return res;
    }
  };
  return (
    <Window>
      <Container>
        <Display>{result()}</Display>
        <ButtonContainer>
          <Button content={"C"} handleClick={handleClick} />
          <Button content={"±"} handleClick={handleClick} />
          <Button content={"%"} handleClick={handleClick} />
          <Button content={"÷"} handleClick={handleClick} />
          <Button content={"7"} handleClick={handleClick} />
          <Button content={"8"} handleClick={handleClick} />
          <Button content={"9"} handleClick={handleClick} />
          <Button content={"×"} handleClick={handleClick} />
          <Button content={"4"} handleClick={handleClick} />
          <Button content={"5"} handleClick={handleClick} />
          <Button content={"6"} handleClick={handleClick} />
          <Button content={"-"} handleClick={handleClick} />
          <Button content={"1"} handleClick={handleClick} />
          <Button content={"2"} handleClick={handleClick} />
          <Button content={"3"} handleClick={handleClick} />
          <Button content={"+"} handleClick={handleClick} />
          <Button content={"0"} handleClick={handleClick} />
          <Button content={"."} handleClick={handleClick} />
          <Button content={"="} handleClick={handleClick} />
        </ButtonContainer>
      </Container>
    </Window>
  );
};

export default App;
