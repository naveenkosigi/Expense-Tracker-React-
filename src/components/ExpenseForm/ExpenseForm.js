
import { useState } from 'react';
import './ExpenseForm.css';
export const ExpenseForm = (props) => {

    const [state,setState] = useState({
        title:'',
        price:'',
        date:''
    });

    const onExpenseTitleChange = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                title:event.target.value
            };
        });
    };

    const onExpenseAmountChange = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                price:event.target.value
            };
        });
    };

    const onExpenseDateChange = (event) => {
        setState((prevState) => {
            return {
                ...prevState,
                date:event.target.value
            };
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onExpenseSave(state);
    };

    return (
        <form className="new-expense" onSubmit={onFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="expenseTitle">Title</label>
                    <input type="text" id="expenseTitle" value={state.title} onChange={onExpenseTitleChange}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="expenseAmount">Amount</label>
                    <input type="number" min="0.5" step="0.5" id="expenseAmount" value={state.amount} onChange={onExpenseAmountChange}/> 
                </div>
                <div className="new-expense__control">
                    <label htmlFor="expenseDate">Date</label>
                    <input type="date" min="2022-01-01" max="2022-12-31" id="expenseDate" value={state.date} onChange={onExpenseDateChange}/> 
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}