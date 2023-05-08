import { useState } from "react";

export default function App() {
  const [monthlyExpenses, setMonthlyExpenses] = useState({
    Jan: "",
    Feb: "",
    Mar: "",
    Apr: "",
    May: "",
    Jun: "",
    Jul: "",
    Aug: "",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  });
  const [predictedExpenses, setPredictedExpenses] = useState({
    Jan: "",
    Feb: "",
    Mar: "",
    Apr: "",
    May: "",
    Jun: "",
    Jul: "",
    Aug: "",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  });
 
  const [nextYearJanExpense, setNextYearJanExpense] = useState("");
  const [nextYearFebExpense, setNextYearFebExpense] = useState("");
  const [nextYearMarExpense, setNextYearMarExpense] = useState("");
  const [nextYearAprExpense, setNextYearAprExpense] = useState("");
  const [nextYearMayExpense, setNextYearMayExpense] = useState("");
  const [nextYearJuneExpense, setNextYearJuneExpense] = useState("");
  const [nextYearJulyExpense, setNextYearJulyExpense] = useState("");
  const [nextYearAugExpense, setNextYearAugExpense] = useState("");
  const [nextYearSepExpense, setNextYearSepExpense] = useState("");
  const [nextYearOctExpense, setNextYearOctExpense] = useState("");
  const [nextYearNovExpense, setNextYearNovExpense] = useState("");
  const [nextYearDecExpense, setNextYearDecExpense] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMonthlyExpenses((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleNextYearJanExpenseChange = (e) => {
    const { value } = e.target;
    setNextYearJanExpense(value);
  };
 
  const handlePredictClick = () => {
    const leastExpense = Math.min(...Object.values(monthlyExpenses));
    const predictedExpenses = {};
    for (const month in monthlyExpenses) {
      predictedExpenses[month] = (monthlyExpenses[month] / leastExpense) ;
    }
    setPredictedExpenses(predictedExpenses);
  };
  const handlePredictClic = () => {
    const NextYear1stRatio = nextYearJanExpense / monthlyExpenses["Jan"]
    setNextYearFebExpense( NextYear1stRatio * monthlyExpenses["Feb"])
    setNextYearMarExpense( NextYear1stRatio * monthlyExpenses["Mar"])
    setNextYearAprExpense( NextYear1stRatio * monthlyExpenses["Apr"])
    setNextYearMayExpense( NextYear1stRatio * monthlyExpenses["May"])
    setNextYearJuneExpense( NextYear1stRatio * monthlyExpenses["Jun"])
    setNextYearJulyExpense( NextYear1stRatio * monthlyExpenses["Jul"])
    setNextYearAugExpense( NextYear1stRatio * monthlyExpenses["Aug"])
    setNextYearSepExpense( NextYear1stRatio * monthlyExpenses["Sep"])
    setNextYearOctExpense( NextYear1stRatio * monthlyExpenses["Oct"])
    setNextYearNovExpense( NextYear1stRatio * monthlyExpenses["Nov"])
    setNextYearDecExpense( NextYear1stRatio * monthlyExpenses["Dec"])
  };

  return (
    <div>
         <div className="Predict">
      <h1>Monthly Expenses</h1>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Expense</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(monthlyExpenses).map(([month, expense]) => (
            <tr key={month}>
              <td>{month}</td>
              <td>
                <input type="number" name={month} value={expense} onChange={handleChange} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          <div style={{display:'flex',justifyContent:'center'}}>
          <button onClick={handlePredictClic}>Predict Next Year's Expenses</button>
          </div>
      <h1>Predicted Ratio for the Next year</h1>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Ratio</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(predictedExpenses).map(([month, expense]) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{expense}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <label>Next Year's First Month Expense</label>
        <input type="number" value={nextYearJanExpense} name={nextYearJanExpense} onChange={handleNextYearJanExpenseChange} />
         <div style={{display:'flex',justifyContent:'center'}}>
          <button onClick={handlePredictClic}>Predict Next Year's Expenses</button>
          </div>
      </div>
      <h1>Predicted Ratio for the Next year</h1>
      <table>
  <tbody>
    <tr>
      <td>January</td>
      <td>{nextYearJanExpense}</td>
    </tr>
    <tr>
      <td>February</td>
      <td>{nextYearFebExpense}</td>
    </tr>
    <tr>
      <td>March</td>
      <td>{nextYearMarExpense}</td>
    </tr>
    <tr>
      <td>April</td>
      <td>{nextYearAprExpense}</td>
    </tr>
    <tr>
      <td>May</td>
      <td>{nextYearMayExpense}</td>
    </tr>
    <tr>
      <td>June</td>
      <td>{nextYearJuneExpense}</td>
    </tr>
    <tr>
      <td>July</td>
      <td>{nextYearJulyExpense}</td>
    </tr>
    <tr>
      <td>August</td>
      <td>{nextYearAugExpense}</td>
    </tr>
    <tr>
      <td>September</td>
      <td>{nextYearSepExpense}</td>
    </tr>
    <tr>
      <td>October</td>
      <td>{nextYearOctExpense}</td>
    </tr>
    <tr>
      <td>November</td>
      <td>{nextYearNovExpense}</td>
    </tr>
    <tr>
      <td>December</td>
      <td>{nextYearDecExpense}</td>
    </tr>
  </tbody>
</table>
    </div>
    </div>
  );
}
