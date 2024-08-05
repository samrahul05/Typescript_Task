import React from 'react';
import AokijiImg from './images/pic1.jpeg'
import kizanuImg from './images/pic2.jpg'
import AkainuImg from './images/pic3.jpg'
import TransactionList from './components/TransactionList';
import './styles/TransactionList.module.scss';
import './App.scss'

const transactions =[
  {    
      id: 1,
      name: 'Aokiji',
      date: '28 Feb 2023',
      time: '06:23 PM',
      amount: '+$13.00',
      status: 'Received',
      image: AokijiImg,
  },
  {  
      id: 2,
      name: 'Kizaru',
      date: '28 Feb 2023',
      time: '06:23 PM',
      amount: '-$9.00',
      status: 'Outgoing',
      image: kizanuImg,
  },
  {
      id: 3,
      name: 'Akainu',
      date: '28 Feb 2023',
      time: '06:23 PM',
      amount: '+$20.00',
      status: 'Received',
      image: AkainuImg,
  },

];

const App: React.FC = () => (
  <div className="App">
    <div className='App-header'>
      <h3>Last Transactions</h3>
      <h5>See All</h5>
    </div>
    <TransactionList transactions={transactions} />
  </div>
);

export default App;
