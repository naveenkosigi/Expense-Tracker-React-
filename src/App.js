import logo from './logo.svg';
import './App.css';
import ExpenseItem  from './components/ExpenseItem/ExpenseItem';
import Card from './components/CardWrapper/CardComponent';

function App() {
  return (
    <Card className="expenses-container">
      <ExpenseItem title="1st Expense" price="23" date={new Date()}></ExpenseItem>
      <ExpenseItem title="1st Expense" price="100" date={new Date()}></ExpenseItem>
      <ExpenseItem title="1st Expense" price="280" date={new Date()}></ExpenseItem>
    </Card>
  );
}

export default App;
