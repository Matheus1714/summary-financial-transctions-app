import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Introduction } from './pages/Introduction'
import { NotFound } from './pages/NotFound'
import { SpendingCategory } from './pages/SpendingCategory'
import { SpendingMonth } from './pages/SpendingMonth'
import { Transactions } from './pages/Transactions'
import { TransactionsMap } from './pages/TransactionsMap'
import { Finish } from './pages/Finish'

export function Router() {
  return (
    <Routes>
      <Route index element={<Introduction />} />
      <Route path="home" element={<Home />} />
      <Route path="finish" element={<Finish />} />

      <Route path="transactions">
        <Route index element={<Transactions />} />
        <Route path="category" element={<SpendingCategory />} />
        <Route path="month" element={<SpendingMonth />} />
        <Route path="maps" element={<TransactionsMap />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
