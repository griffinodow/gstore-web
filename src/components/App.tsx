import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/Home'
import { Product } from './pages/product/Product'
import { Footer } from './components/Footer'
import { Cart } from './pages/cart/Cart'
import { Checkout } from './pages/checkout/Checkout'
import './style.sass'
import './themes.sass'

function App () {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Navigate to='/'/>}/>
          <Route path='/products/:id' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App
