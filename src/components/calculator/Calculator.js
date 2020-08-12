import React, { useState } from "react";
import Button from "../button/Button";
import Scientificbutton from "../scientificButton/ScientificButton";
import commafy from "../utils/commafy";
import "./Calculator.css";

const Calculator = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  let num;

  const handleButtonPress = (content) => () => {
    num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (content === "+") {
      if (operator !== null) {
        setOperator(operator);
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }
    if (content === "−") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("−");
      return;
    }
    if (content === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("×");
      return;
    }
    if (content === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("÷");
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  return (
    <div className="App">
      <div className="top">
        <div className="memory">
         
        </div>
      </div>

      <div className="display" id="test-display">
        {memory}
        {operator}
        {commafy(value)}
      </div>

      <div className="outer-buttons">
        <div className="scientific-buttons">
          <Scientificbutton content="(" type="s_function" />
          <Scientificbutton content=")" type="s_function" />
          <Scientificbutton content="mc" type="s_function" />
          <Scientificbutton content="m+" type="s_function" />
          <Scientificbutton content="m-" type="s_function" />
          <Scientificbutton content="mr" type="s_function" />
          <Scientificbutton content="x!" type="s_function" />
          <Scientificbutton content="sin" type="s_function" />
          <Scientificbutton content="cos" type="s_function" />
          <Scientificbutton content="tan" type="s_function" />
          <Scientificbutton content="e" type="s_function" />
          <Scientificbutton content="EE" type="s_function" />
          <Scientificbutton content="Rad" type="s_function" />
          <Scientificbutton content="sinh" type="s_function" />
          <Scientificbutton content="cosh" type="s_function" />
          <Scientificbutton content="tanh" type="s_function" />
        </div>
        <div className="buttons">
          <Button
            onButtonClick={handleButtonPress}
            content="AC"
            type="function"
            id="test-ac"
          />
          <Button
            onButtonClick={handleButtonPress}
            content="±"
            type="function"
          />
          <Button
            onButtonClick={handleButtonPress}
            content="%"
            type="function"
            id="test-modulus"
          />
          <Button
            onButtonClick={handleButtonPress}
            content="÷"
            type="operator"
            id="test-division"
          />
          <Button
            onButtonClick={handleButtonPress}
            id="test-seven"
            content="7"
          />
          <Button
            onButtonClick={handleButtonPress}
            id="test-eight"
            content="8"
          />
          <Button
            onButtonClick={handleButtonPress}
            id="test-nine"
            content="9"
          />
          <Button
            onButtonClick={handleButtonPress}
            content="×"
            type="operator"
            id="test-multiply"
          />
          <Button
            onButtonClick={handleButtonPress}
            id="test-four"
            content="4"
          />
          <Button
            onButtonClick={handleButtonPress}
            id="test-five"
            content="5"
          />
          <Button onButtonClick={handleButtonPress} id="test-six" content="6" />
          <Button
            onButtonClick={handleButtonPress}
            content="−"
            type="operator"
            id="test-minus"
          />
          <Button onButtonClick={handleButtonPress} id="test-one" content="1" />
          <Button onButtonClick={handleButtonPress} id="test-two" content="2" />
          <Button
            onButtonClick={handleButtonPress}
            id="test-three"
            content="3"
          />
          <Button
            onButtonClick={handleButtonPress}
            content="+"
            type="operator"
            id="test-plus"
          />
          <Button onButtonClick={handleButtonPress} content="0" />
          <Button onButtonClick={handleButtonPress} content="." />
          <Button
            onButtonClick={handleButtonPress}
            content="="
            type="operator"
            id="test-equal"
          />
        </div>
      </div>

      <div className="bottom" />
    </div>
  );
};

export default Calculator;
