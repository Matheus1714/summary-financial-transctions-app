import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Loading } from './pages/Loading'
import { Introduction } from './pages/Introduction'
import { Transactions } from './pages/Transactions'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  )
}
