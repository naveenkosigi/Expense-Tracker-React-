import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../CardWrapper/CardComponent';

function ExpenseItem(props){
    
    return (
       <Card className="expense-item">
            <ExpenseDate date={props.date} />
           <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div className="expense-item__price">Rs.{props.price}</div>
           </div>
       </Card>
    );
}

export default ExpenseItem;