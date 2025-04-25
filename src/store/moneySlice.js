import { createSlice } from '@reduxjs/toolkit'

const transactions = [
  {
    id: 1,
    description: '용돈',
    amount: 300000,
    type: 'income', // "income" 또는 "expense"
    date: '2025-04-25',
  },
  {
    id: 2,
    description: '영화 관람',
    amount: 11000,
    type: 'expense',
    date: '2025-04-25',
  },
]

export const moneySlice = createSlice({
  name: 'money',
  initialState: {
    transactions: transactions,
  },
  reducers: {
    addUsage: (state, action) => {
      state.transactions.push(action.payload)
    },
  },
})

export const { addUsage } = moneySlice.actions
