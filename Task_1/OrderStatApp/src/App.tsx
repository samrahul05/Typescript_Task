import React from 'react';
import WidgetOrderStats from './components/WidgetOrderStats';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Order Statistics</h1>
      </header>
      <main>
      <WidgetOrderStats />
      </main>
      
      
    </div>
  );
};

export default App;
