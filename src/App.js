import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenseItems = [
    {
      title: 'bread',
      among: 13.235,
      date: '1401.09.24'
    },
    {
      title: 'apple',
      among: 12.5,
      date: '1401.08.24'
    }    ,
    {
      title: 'meat',
      among: 123.235,
      date: '1401.07.24'
    }
  ]
  return (
    <div className="App">
      <ExpenseItem
        title={expenseItems[0].title}
        date={expenseItems[0].date}
        among={expenseItems[0].among}
      />
      <ExpenseItem
        title={expenseItems[1].title}
        date={expenseItems[1].date}
        among={expenseItems[1].among}
      />
      <ExpenseItem
        title={expenseItems[2].title}
        date={expenseItems[2].date}
        among={expenseItems[2].among}
      />
    </div>
  );
}

export default App;
