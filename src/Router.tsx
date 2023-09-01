import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Loading } from './pages/Loading'
import { Introduction } from './pages/Introduction'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/introduction" element={<Introduction />} />
    </Routes>
  )
}
