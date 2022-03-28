import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { Expenses } from "../Expenses/Expenses";
import { useState } from "react";
import { Test } from "../TestComponent";
import { dataMonthConfig } from '../../CommonConfig';


export const ExpensePageComponent = () => {

  const [expenses,setExpenses] = useState([]);

  const [chartDataPoints,setChartDataPoints]= useState([]);

  for(let config of dataMonthConfig){
    chartDataPoints.push({...config,value:0})
  }

  const [selectedYear,setYear] = useState('2022');

    const onYearChange = (year) => {
        setYear(year);
    };

    const onExpenseSave = (expense) => {
        
        setExpenses((prevExpenses) => {
          
          onYearChange(expense.date.getFullYear().toString());
          return[
            expense,
            ...prevExpenses
          ];
        })
      };
    
      return (
        <div>
          <ExpenseForm onExpenseSave={onExpenseSave}/>
          <Test config={chartDataPoints}/>
          <Expenses expenses={expenses} defaultYear={selectedYear} onYearChange={onYearChange}/>
        </div>
      );
}