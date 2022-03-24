
import { useState } from 'react';
import './ExpenseForm.css';
export const ExpenseForm = () => {

    const [state,setState] = useState({
        title:'',
        amount:'',
        date:''
    });

    const onSubmit = (event) => {
        event.preventDefault();
        setState({
            title:event.target.querySelector("#expenseTitle").value,
            amount:event.target.querySelector("#expenseAmount").value,
            date:event.target.querySelector("#expenseDate").value
        });
        console.log(state);
    };

    return (
        <form className="new-expense" onSubmit={onSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="expenseTitle">Title</label>
                    <input type="text" id="expenseTitle"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="expenseAmount">Amount</label>
                    <input type="number" min="0.5" step="0.5" id="expenseAmount"/> 
                </div>
                <div className="new-expense__control">
                    <label htmlFor="expenseDate">Date</label>
                    <input type="date" min="2022-01-01" max="2022-12-31" id="expenseDate"/> 
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}