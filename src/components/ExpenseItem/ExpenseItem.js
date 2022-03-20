import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../CardWrapper/CardComponent';
import { useState } from 'react';

function ExpenseItem(props){
    
    const [price,setPrice]=useState(props.price);

    const onMouseOverPrice = () => {
        setPrice(100);
    };

    return (
       <Card className="expense-item">
            <ExpenseDate date={props.date} />
           <div className="expense-item__description">
               <h2>{props.title}</h2>
               <div onMouseOver={onMouseOverPrice} className="expense-item__price">Rs.{price}</div>
           </div>
       </Card>
    );
}

export default ExpenseItem;