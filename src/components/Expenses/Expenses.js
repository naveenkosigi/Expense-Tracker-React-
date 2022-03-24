
import { useState } from "react";
import Card from "../CardWrapper/CardComponent";
import { ExpenseDateFilter } from "../ExpenseDateFilter/ExpenseDateFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export const Expenses = (props) => {

    const [selectedYear,setYear] = useState('2022')

    const onYearChange = (year) => {
        setYear(year);
    };
    
    return (
        <Card className="expenses-container">
            <ExpenseDateFilter date={selectedYear} onYearChange={onYearChange}></ExpenseDateFilter> 
            <ExpenseItem title="1st Expense" price="23" date={new Date()}></ExpenseItem>
            <ExpenseItem title="1st Expense" price="100" date={new Date()}></ExpenseItem>
            <ExpenseItem title="1st Expense" price="280" date={new Date()}></ExpenseItem>
        </Card>
    );
};