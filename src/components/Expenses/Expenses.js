
import Card from "../CardWrapper/CardComponent";
import { ExpenseDateFilter } from "../ExpenseDateFilter/ExpenseDateFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export const Expenses = (props) => {

    
    return (
        <Card className="expenses-container">
            <ExpenseDateFilter date={props.defaultYear} onYearChange={props.onYearChange}></ExpenseDateFilter>
            {props.expenses.filter((expense) => 
                expense.date.getFullYear().toString() === props.defaultYear
            ).map((expense) => 
                (<ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />)
            )
            } 
        </Card>
    );
};