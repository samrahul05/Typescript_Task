import React, { useEffect, useState } from 'react';
import OrderStat from './OrderStat';
import styles from '../styles/WidgetOrderStats.module.scss';

interface Stat {
  label: string;
  value: string;
  icon: string;
  change: number;
  changeType: string;
}

const WidgetOrderStats: React.FC = () => {
  const [data, setData] = useState<Stat[]>([]);

useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched Data:", data); 
        if (data.stats && Array.isArray(data.stats)) {
          setData(data.stats);
        } else {
          console.error("Expected an array under 'stats' but received:", data);
        }
      })
      .catch(error => console.error("Fetch error:", error));
  }, []);
  


  return (
    <div className={styles.widget}>
      {data.map((stat, index) => (
        
        <OrderStat key={index} {...stat} />
      ))}
    </div>
  );
};

export default WidgetOrderStats;
