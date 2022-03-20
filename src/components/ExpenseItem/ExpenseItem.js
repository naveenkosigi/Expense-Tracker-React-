import './ExpenseItem.css';

function expenseItem(props){

    const date=props.date;
    const month=date.toLocaleDateString('en-US', {month:'long'});
    const day=date.toLocaleDateString('en-US', {day: 'numeric'});
    const year=date.toLocaleDateString('en-US', {year: 'numeric'});

    return (
       <div className="expense-item">
           <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
           </div>
    
           <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div className="expense-item__price">Rs.{props.price}</div>
           </div>
       </div>
    );
}

export default expenseItem;