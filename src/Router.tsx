import { Route, Routes } from 'react-router-dom'
import { Goodbye } from './pages/GoodBye'
import { Home } from './pages/Home'
import { Introduction } from './pages/Introduction'
import { Loading } from './pages/Loading'
import { NotFound } from './pages/NotFound'
import { SpendingCategory } from './pages/SpendingCategory'
import { SpendingMonth } from './pages/SpendingMonth'
import { Transactions } from './pages/Transactions'
import { TransactionsMap } from './pages/TransactionsMap'

export function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="loading" element={<Loading />} />
      <Route path="introduction" element={<Introduction />} />

      <Route path="transactions">
        <Route index element={<Transactions />} />
        <Route path="maps" element={<TransactionsMap />} />
      </Route>

      <Route path="spending">
        <Route index element={<SpendingCategory />} />
        <Route path="month" element={<SpendingMonth />} />
      </Route>

      <Route path="goodbye" element={<Goodbye />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
