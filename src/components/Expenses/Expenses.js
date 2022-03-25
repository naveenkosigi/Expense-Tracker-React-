
import Card from "../CardWrapper/CardComponent";
import { ExpenseDateFilter } from "../ExpenseDateFilter/ExpenseDateFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { ExpenseListComponent } from "../ExpensesListComponent/ExpensesListComponent";
import './Expenses.css';

export const Expenses = (props) => {

    const filteredExpenses=props.expenses.filter((expense) => 
                                expense.date.getFullYear().toString() === props.defaultYear
                           );
                           
    return (
        <Card className="expenses-container">
            <ExpenseDateFilter date={props.defaultYear} onYearChange={props.onYearChange}></ExpenseDateFilter>
            <ExpenseListComponent expenses={filteredExpenses}/>
        </Card>
    );
};