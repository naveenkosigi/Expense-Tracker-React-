import logo from './logo.svg';
import './App.css';
import ExpenseItem  from './components/ExpenseItem/ExpenseItem';
import Card from './components/CardWrapper/CardComponent';
import { ExpenseForm } from './components/ExpenseForm/ExpenseForm';
import { ExpenseDateFilter } from './components/ExpenseDateFilter/ExpenseDateFilter';

function App() {

  const onExpenseSave = (expense) => {
    console.log({
      ...expense,
      id:Date.now()+""
    });
  };

  const onYearChange = (year) => {
    console.log(year);
  };

  return (
    <div>
      <ExpenseForm onExpenseSave={onExpenseSave}/>
      <Card className="expenses-container">
        <ExpenseDateFilter date="2022" onYearChange={onYearChange}></ExpenseDateFilter> 
        <ExpenseItem title="1st Expense" price="23" date={new Date()}></ExpenseItem>
        <ExpenseItem title="1st Expense" price="100" date={new Date()}></ExpenseItem>
        <ExpenseItem title="1st Expense" price="280" date={new Date()}></ExpenseItem>
      </Card>
    </div>
    
  );
}

export default App;
