import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { Expenses } from "../Expenses/Expenses";
import { useState } from "react";

export const ExpensePageComponent = () => {

  const [expenses,setExpenses] = useState([
    
  ]);

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
          <Expenses expenses={expenses} defaultYear={selectedYear} onYearChange={onYearChange}/>
        </div>
      );
}