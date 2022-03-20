import './ExpenseItem.css';

function expenseItem(){

    const expenseName="Test Item";
    const expensePrice="23";

    return (
       <div className="expense-item">
           <div>Date</div>
           <div className="expense-item__description">
               <h2>{expenseName}</h2>
               <div className="expense-item__price">Rs.{expensePrice}</div>
           </div>
       </div>
    );
}

export default expenseItem;