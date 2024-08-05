import React from 'react';
import styles from '../styles/TransactionList.module.scss';

interface Transaction {
  id: number;
  name: string;
  date: string;
  time: string;
  amount:string;
  status: string;
  image: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => (
  <div className={styles.transactionList}>
    {transactions.map(transaction => (
      <div key={transaction.id} className={styles.transactionItem}>
        <div className={styles.transactionInfo}>
          <img src={transaction.image} alt={transaction.name} className={styles.avatar} />
          <div className={styles.details1}>
            <span className={styles.name}>{transaction.name}</span>
            <span className={styles.date}>{transaction.date} • {transaction.time}</span>
          </div>
        </div>
        <div className={styles.details2}>
        <span className={`${styles.amount} ${transaction.amount.startsWith('+') ? styles.received : styles.outgoing}`}>
            {transaction.amount}
          </span>
          <span className={styles.status}>{transaction.status}</span>
        </div>
      </div>
    ))}
  </div>
);

export default TransactionList;
