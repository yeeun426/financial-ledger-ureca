import React from 'react'
import css from './ViewBalance.module.css'

const ViewBalance = () => {
  return (
    <div className={css.balanceCon}>
      <div className={css.moneyItem}>
        <p>수입</p>
        <h2>
          300,000<span>원</span>
        </h2>
      </div>
      <div className={css.moneyItem}>
        <p>지출</p>
        <h2>
          300,000<span>원</span>
        </h2>
      </div>
      <div className={css.balanceItem}>
        <p>남은 예산</p>
        <h2>
          300,000<span>원</span>
        </h2>
      </div>
    </div>
  )
}

export default ViewBalance
