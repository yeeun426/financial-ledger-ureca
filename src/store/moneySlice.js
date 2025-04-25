import { createSlice } from '@reduxjs/toolkit'

const savedTransactions = localStorage.getItem('transactions')
let transactions

if (savedTransactions !== null) {
  transactions = JSON.parse(savedTransactions)
} else {
  transactions = []
  localStorage.setItem('transactions', JSON.stringify(transactions))
}

export const moneySlice = createSlice({
  name: 'money',
  initialState: {
    transactions: transactions,
  },
  reducers: {
    addUsage: (state, action) => {
      state.transactions = [action.payload, ...state.transactions]
      localStorage.setItem('transactions', JSON.stringify(state.transactions))
    },
    deleteUsage: (state, action) => {
      state.transactions = state.transactions.filter(item => item.id !== action.payload)
      localStorage.setItem('transactions', JSON.stringify(state.transactions))
    },
  },
})

export const { addUsage, deleteUsage } = moneySlice.actions
