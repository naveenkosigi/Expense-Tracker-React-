
import ExpenseItem from "../ExpenseItem/ExpenseItem";

export const ExpenseListComponent = (props) => {
    let expenseContent = <p className="no-expenses">No Expenses Found</p>;
    if(props.expenses.length > 0){
        expenseContent = props.expenses.map((expense) => 
                                (<ExpenseItem key={expense.id} title={expense.title} price={expense.price} date={expense.date} />)
                            );
    }

    return (
        <div>
            {expenseContent}
        </div>
    );
};