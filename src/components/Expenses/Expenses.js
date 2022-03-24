
import { useState } from "react";
import Card from "../CardWrapper/CardComponent";
import { ExpenseDateFilter } from "../ExpenseDateFilter/ExpenseDateFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export const Expenses = (props) => {

    const [selectedYear,setYear] = useState('2022');

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

    const onYearChange = (year) => {
        setYear(year);
    };

    
    return (
        <Card className="expenses-container">
            <ExpenseDateFilter date={selectedYear} onYearChange={onYearChange}></ExpenseDateFilter>
            {expenses.map((expense) => {
                return (<ExpenseItem title={expense.title} price={expense.price} date={expense.date} />)
            })} 
        </Card>
    );
};