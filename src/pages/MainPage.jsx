import React from 'react'
import ViewBalance from '../components/ViewBalance.jsx'
import UsageHistory from '../components/UsageHistory.jsx'
import TradeInput from '../components/TradeInput.jsx'
import css from './MainPage.module.css'

const MainPage = () => {
  return (
    <main className={css.MainCon}>
      <h2>용돈 기입장</h2>
      <TradeInput />
      <div className={css.MoneyHistoryCon}>
        <ViewBalance />
        <UsageHistory />
      </div>
    </main>
  )
}

export default MainPage
