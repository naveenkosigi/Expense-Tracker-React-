import logo from './logo.svg';
import './App.css';
import ExpenseItem  from './components/ExpenseItem/ExpenseItem';

function App() {
  return (
    <div className="App">
      Test App
      <ExpenseItem title="1st Expense" price="23" date={new Date()}></ExpenseItem>
    </div>
  );
}

export default App;
