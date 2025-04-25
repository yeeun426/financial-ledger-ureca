import { createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainPage />,
    },
  ],
  {
    basename: '/financial-ledger-ureca',
  }
)

export default router
