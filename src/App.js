import './App.css';
import { ExpenseForm } from './components/ExpenseForm/ExpenseForm';
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
      <Expenses/>
    </div>
    
  );
}

export default App;
