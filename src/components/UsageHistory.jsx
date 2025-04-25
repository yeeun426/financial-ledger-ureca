import React from 'react'
import css from './UsageHistory.module.css'
import { useSelector } from 'react-redux'
const UsageHistory = () => {
  const moneyHistData = useSelector(state => state.money)
  const { transactions } = moneyHistData

  return (
    <div className={css.HistoryCon}>
      <h3>내역</h3>
      <ul>
        {transactions.map(list => (
          <li key={list.id}>
            <p className={css.title}>{list.description}</p>
            <p className={css.price}>{list.amount.toLocaleString()}원</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsageHistory
