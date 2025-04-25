import React, { useEffect, useState } from 'react'
import css from './Modal.module.css'
import { useDispatch } from 'react-redux'
import { deleteUsage } from '../store/moneySlice'

const Modal = ({ id, title, onClose }) => {
  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch()
  console.log(id, title)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true)
      document.body.style.overflow = 'hidden'
    }, 5)
    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleDelete = (id, title) => {
    dispatch(deleteUsage(id, title))
    setIsActive(false)
    setTimeout(onClose, 200)
  }

  const handleClose = () => {
    setIsActive(false)
    setTimeout(onClose, 200)
  }

  return (
    <div className={`${css.modal} ${isActive ? css.active : ''}`}>
      <div className={css.container}>
        <p>정말 삭제하시겠습니까?</p>
        <div>
          <button className={css.btnDelete} onClick={() => handleDelete(id, title)}>
            삭제할래요
          </button>
          <button className={css.btnClose} onClick={handleClose}>
            아니요
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
