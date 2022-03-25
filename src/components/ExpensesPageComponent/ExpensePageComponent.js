import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { Expenses } from "../Expenses/Expenses";
import { useState } from "react";

export const ExpensePageComponent = () => {

  const [expenses,setExpenses] = useState([
    
  ]);

    const onExpenseSave = (expense) => {
        
        setExpenses((prevExpenses) => {
          return[
            ...prevExpenses,
            {
              ...expense,
              id:Date.now()+"",
              date:new Date(expense.date)
            }
          ];
        })
      };
    
      return (
        <div>
          <ExpenseForm onExpenseSave={onExpenseSave}/>
          <Expenses expenses={expenses}/>
        </div>
      );
}