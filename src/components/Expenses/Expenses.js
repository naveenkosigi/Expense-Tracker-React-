
import { useState } from "react";
import Card from "../CardWrapper/CardComponent";
import { ExpenseDateFilter } from "../ExpenseDateFilter/ExpenseDateFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export const Expenses = (props) => {

    const [selectedYear,setYear] = useState('2022');

    const onYearChange = (year) => {
        setYear(year);
    };

    
    return (
        <Card className="expenses-container">
            <ExpenseDateFilter date={selectedYear} onYearChange={onYearChange}></ExpenseDateFilter>
            {props.expenses.map((expense) => {
                return (<ExpenseItem title={expense.title} price={expense.price} date={expense.date} />)
            })} 
        </Card>
    );
};