import { Route, Routes } from 'react-router-dom'
import { Goodbye } from './pages/GoodBye'
import { Home } from './pages/Home'
import { Introduction } from './pages/Introduction'
import { Loading } from './pages/Loading'
import { NotFound } from './pages/NotFound'
import { SpendingCategory } from './pages/SpendingCategory'
import { SpendingMonth } from './pages/SpendingMonth'
import { Transactions } from './pages/Transactions'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/goodbye" element={<Goodbye />} />

      <Route path="/spending">
        <Route index path="month" element={<SpendingMonth />} />
        <Route path="category" element={<SpendingCategory />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
