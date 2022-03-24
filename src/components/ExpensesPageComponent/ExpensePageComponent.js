import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import { Expenses } from "../Expenses/Expenses";
import { useState } from "react";

export const ExpensePageComponent = () => {

  const [expenses,setExpenses] = useState([
    {
        title:'1st Expense',
        price:'23',
        date:new Date()
    },
    {
        title:'1st Expense',
        price:'100',
        date:new Date()
    },
    {
        title:'1st Expense',
        price:'80',
        date:new Date()
    }
]);


    const onExpenseSave = (expense) => {
        console.log({
          ...expense,
          id:Date.now()+""
        });
      };
    
      return (
        <div>
          <ExpenseForm onExpenseSave={onExpenseSave}/>
          <Expenses expenses={expenses}/>
        </div>
      );
}