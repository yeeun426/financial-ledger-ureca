import React from 'react'
import css from './UsageHistory.module.css'
const UsageHistory = () => {
  return (
    <div className={css.HistoryCon}>
      <h3>내역</h3>
      <ul>
        <li>
          <p className={css.title}>4월 용돈</p>
          <p className={css.price}>300,000원</p>
        </li>
        <li>
          <p className={css.title}>예은 생파</p>
          <p className={css.price}>-10,000원</p>
        </li>
      </ul>
    </div>
  )
}

export default UsageHistory
