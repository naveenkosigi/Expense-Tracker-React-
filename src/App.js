import logo from './logo.svg';
import './App.css';
import ExpenseItem  from './components/ExpenseItem/ExpenseItem';
import Card from './components/CardWrapper/CardComponent';
import { ExpenseForm } from './components/ExpenseForm/ExpenseForm';

function App() {

  const onExpenseSave = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <ExpenseForm onExpenseSave={onExpenseSave}/>
      <Card className="expenses-container">
      <ExpenseItem title="1st Expense" price="23" date={new Date()}></ExpenseItem>
      <ExpenseItem title="1st Expense" price="100" date={new Date()}></ExpenseItem>
      <ExpenseItem title="1st Expense" price="280" date={new Date()}></ExpenseItem>
    </Card>
    </div>
    
  );
}

export default App;
