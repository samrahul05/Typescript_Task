import React from 'react';
import styles from '../styles/OrderStat.module.scss';

interface OrderStatProps {
  label: string;
  value: string;
  icon: string;
  change: number;
  changeType: string;
}

const OrderStat: React.FC<OrderStatProps> = ({ label, value, icon, change, changeType }) => {
  const changeClass = changeType === 'positive' ? styles.positive : styles.negative;

  return (
    <div className={styles.stat}>
        <div className={styles.header}>
             <div className={styles.label}>{label}</div>      
             <div className={`${styles.change} ${changeClass}`}>
                 {changeType === 'positive' ? `↑ ${change}%` : `↓ ${Math.abs(change)}%`}
             </div>
        </div>
        <div className={styles.footer}>
            <img src={process.env.PUBLIC_URL + '/Icons/' + icon} alt={label} className={styles.icon} />
            <div className={styles.value}>{value}</div>
        </div>      
    </div>
  );
};

export default OrderStat;
