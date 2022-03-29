import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { Expenses } from "../Expenses/Expenses";
import { useState } from "react";
import { Test } from "../TestComponent";
import { dataMonthConfig } from '../../CommonConfig';
import { defaultYears } from "../../CommonConfig";


export const ExpensePageComponent = () => {

  const setDefaultChartDataPoints = () => {

    const prevState={};
    for(let year of defaultYears){
      prevState[year] = [];

      for(let config of dataMonthConfig){
        prevState[year].push({...config,value:"0"})
      }
    }

    return prevState;
  };

  const [expenses,setExpenses] = useState([]);

  const [chartDataPoints,setChartDataPoints]= useState(setDefaultChartDataPoints());

  const maxAmount = 50;

  const [selectedYear,setYear] = useState('2022');

    const onYearChange = (year) => {
        setYear(year);
    };

    const onExpenseSave = (expense) => {
        
        setExpenses((prevExpenses) => {
          
          const referredYear=expense.date.getFullYear().toString();
          const monthIndex=expense.date.getMonth();

          onYearChange(referredYear);

          setChartDataPoints((prevState) => {
            const referredConfig=prevState[referredYear][monthIndex];

            referredConfig.value = String(+referredConfig.value + (+expense.price));

            return {
              ...prevState,
              [referredYear] : [...prevState[referredYear]]
            };
          });
          return[
            expense,
            ...prevExpenses
          ];
        })
      };
    
      return (
        <div>
          <ExpenseForm onExpenseSave={onExpenseSave}/>
          <Test config={chartDataPoints[selectedYear]} maxValue={maxAmount}/>
          <Expenses expenses={expenses} defaultYear={selectedYear} onYearChange={onYearChange}/>
        </div>
      );
}