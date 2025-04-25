import React from 'react'
import css from './ViewBalance.module.css'
import { useSelector } from 'react-redux'

const ViewBalance = () => {
  const { transactions } = useSelector(state => state.money)

  const income = transactions.reduce((cur, item) => {
    if (item.type === 'income') return cur + item.amount
    else return cur
  }, 0)

  const expense = transactions.reduce((cur, item) => {
    if (item.type === 'expense') return cur + item.amount
    else return cur
  }, 0)

  const balance = income - expense

  return (
    <div className={css.balanceCon}>
      <div className={css.moneyItem}>
        <p>수입</p>
        <h2>
          {income.toLocaleString()}
          <span>원</span>
        </h2>
      </div>
      <div className={css.moneyItem}>
        <p>지출</p>
        <h2>
          {expense.toLocaleString()}
          <span>원</span>
        </h2>
      </div>
      <div className={css.balanceItem}>
        <p>남은 예산</p>
        <h2>
          {balance.toLocaleString()}
          <span>원</span>
        </h2>
      </div>
    </div>
  )
}

export default ViewBalance
