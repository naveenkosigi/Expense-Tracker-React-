
import Card from "../CardWrapper/CardComponent";
import { ExpenseDateFilter } from "../ExpenseDateFilter/ExpenseDateFilter";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export const Expenses = (props) => {

    let expenseContent = <p>No Expenses Found</p>;
    const filteredExpenses=props.expenses.filter((expense) => 
                                expense.date.getFullYear().toString() === props.defaultYear
                           );


    if(filteredExpenses.length > 0){
        expenseContent = filteredExpenses.map((expense) => 
                                (<ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />)
                            );
    }
    
    return (
        <Card className="expenses-container">
            <ExpenseDateFilter date={props.defaultYear} onYearChange={props.onYearChange}></ExpenseDateFilter>
            {expenseContent} 
        </Card>
    );
};