import React, { useState } from 'react'
import css from './UsageHistory.module.css'
import { useSelector } from 'react-redux'
import Modal from './Modal.jsx'

const UsageHistory = () => {
  const moneyHistData = useSelector(state => state.money)
  const { transactions } = moneyHistData

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')

  const closeModal = () => {
    setIsModalOpen(false)
  }
  const handleModal = (id, title) => {
    setId(Number(id))
    setTitle(title)
    setIsModalOpen(true)
  }

  return (
    <div className={css.HistoryCon}>
      <h3>내역</h3>
      <ul>
        {transactions.map(list => (
          <li key={list.id} className={`${list.type === 'income' ? css.income : css.expense}`}>
            <p className={css.title}>{list.description}</p>
            <p className={css.price}>{list.amount.toLocaleString()}원</p>
            <button onClick={() => handleModal(list.id, list.description)}>
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && <Modal id={id} title={title} onClose={closeModal} />}
    </div>
  )
}

export default UsageHistory
