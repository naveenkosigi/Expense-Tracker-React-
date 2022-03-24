import './App.css';
import ExpenseItem  from './components/ExpenseItem/ExpenseItem';
import Card from './components/CardWrapper/CardComponent';
import { ExpenseForm } from './components/ExpenseForm/ExpenseForm';
import { ExpenseDateFilter } from './components/ExpenseDateFilter/ExpenseDateFilter';
import { Expenses } from './components/Expenses/Expenses';

function App() {

  const onExpenseSave = (expense) => {
    console.log({
      ...expense,
      id:Date.now()+""
    });
  };

  return (
    <div>
      <ExpenseForm onExpenseSave={onExpenseSave}/>
      <Expenses></Expenses>
    </div>
    
  );
}

export default App;
