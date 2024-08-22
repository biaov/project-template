import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from '@/views/404'
import Home from '@/views/home'
import Login from '@/views/login'

const router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
)
export default router
