import React from 'react'
import css from './TradeInput.module.css'

const TradeInput = () => {
  return (
    <div className={css.tradeCon}>
      <h3 className={css.tradeTitle}>소비 내역을 입력해 주세요.</h3>
      <ul>
        <li>
          <h4>수입/지출</h4>
          <select>
            <option value="수입">수입</option>
            <option value="지출">지출</option>
          </select>
        </li>
        <li>
          <h4>내역</h4>
          <input />
        </li>
        <li>
          <h4>금액</h4>
          <input />
        </li>
      </ul>
      <div className={css.icon}>
        <i className="bi bi-pencil"></i>
      </div>
      <button>등록하기</button>
    </div>
  )
}

export default TradeInput
