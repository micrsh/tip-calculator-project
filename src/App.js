import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  let tip = Number(bill) * ((Number(tip1) + Number(tip2)) / 2 / 100);
  console.log(tip);
  let result = Number(bill) + Number(tip);

  function hanldeReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <BillInput setBill={setBill} bill={bill}>
        How much was the bill ?
      </BillInput>
      <SelectPercentage percentage={tip1} onSelect={setTip1}>
        How this you like the service ?
      </SelectPercentage>
      <SelectPercentage percentage={tip2} onSelect={setTip2}>
        How this your friend like the service ?
      </SelectPercentage>
      {bill && (
        <div>
          <h2>
            {" "}
            You pay ${result} (${bill} + ${tip})
          </h2>
          <button onClick={hanldeReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

function BillInput({ children, setBill, bill }) {
  return (
    <div>
      <p>{children}</p>
      <input
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      ></input>
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <p>{children}</p>
      <select value={percentage} onChange={(e) => onSelect(e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}
