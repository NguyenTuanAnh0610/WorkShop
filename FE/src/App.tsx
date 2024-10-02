

import {Navigate, Route,Routes } from 'react-router-dom'
import './App.css'
import LayoutAdmin from './pages/(admin)/layout'
import LayoutWebsite from './pages/(website)/layout'
import HomePage from './pages/(website)/home/page'
import SignupPage from './pages/(auth)/sigup/page'
import Dashboard from './pages/(admin)/dashboard/page'
import NotFoundPage from './pages/(website)/404/page'
import ShopPage from './pages/(website)/shop/page'
import AboutPage from './pages/(website)/about/page'
import ContactPage from './pages/(website)/contact/page'
import ProductDetailPage from './pages/(website)/productDetail/page'
import CartPage from './pages/(website)/Cart/page'
import PayPage from './pages/(website)/payment/page'
import AdminProductPage from './pages/(admin)/products/page'

function App() {


  return (
    <>
     <Routes>
            <Route path="/" element={<LayoutWebsite/>}>
            <Route index element={<HomePage/>}/>
            <Route path="shop" element={<ShopPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
            <Route path="signup" element={<SignupPage/>}/>
            <Route path="productdetail" element={<ProductDetailPage/>}/>
            <Route path="cart" element={<CartPage/>}/>
            <Route path="payment" element={<PayPage/>}/>
            </Route>
            <Route path="admin" element={<LayoutAdmin/>}>
            <Route index element={<Navigate to="dashboard"/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="products" element={<AdminProductPage/>}/>
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
     </Routes>
    </>
  )
}

export default App
