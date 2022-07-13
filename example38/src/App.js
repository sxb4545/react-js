import Expenses from './components/expenses';

function App() {
  const expenses = [
    {
      id : 'e1',
      title : 'Tissue Paper ',
      amount : 100.50,
      date : new Date(2022, 6, 28)
    },
    {
      id : 'e2',
      title : 'Coffee Cups ',
      amount : 300.50,
      date : new Date(2022, 5, 2)
    },
    {
      id : 'e3',
      title : 'coffee powder ',
      amount : 600.50,
      date : new Date(2022, 6, 21)
    },
    {
      id : 'e4',
      title : ' Paper plates ',
      amount : 200.50,
      date : new Date(2022, 6, 12)
    }
  ];

  return (
    <div>
        <h2> Lets Calculate Expenses </h2>
        <Expenses items={expenses} />


    </div>
  )

}

export default App;
