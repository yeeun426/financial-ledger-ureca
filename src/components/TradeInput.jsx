import React, { useState } from 'react'
import css from './TradeInput.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUsage } from '../store/moneySlice'

const TradeInput = () => {
  const [income, setIncome] = useState('income')
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')

  const dispatch = useDispatch()
  const { transactions } = useSelector(state => state.money)

  const handleAddList = e => {
    e.preventDefault()
    const maxId = transactions.length > 0 ? transactions[transactions.length - 1].id : 0
    const newList = {
      id: maxId + 1,
      description: description,
      amount: amount,
      type: income,
      date: new Date().toISOString().slice(0, 10),
    }
    dispatch(addUsage(newList))
  }

  return (
    <div className={css.tradeCon}>
      <h3 className={css.tradeTitle}>소비 내역을 입력해 주세요.</h3>
      <form>
        <ul>
          <li>
            <h4>수입/지출</h4>
            <select value={income} onChange={e => setIncome(e.target.value)}>
              <option key="income" value="income">
                수입
              </option>
              <option key="expense" value="expense">
                지출
              </option>
            </select>
          </li>
          <li>
            <h4>내역</h4>
            <input
              required
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </li>
          <li>
            <h4>금액</h4>
            <input
              required
              type="number"
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
            />
          </li>
        </ul>
        <div className={css.icon}>
          <i className="bi bi-pencil"></i>
        </div>
        <button type="submit" onClick={handleAddList}>
          등록하기
        </button>
      </form>
    </div>
  )
}

export default TradeInput
