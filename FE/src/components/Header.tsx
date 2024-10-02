import { FaRegHeart, FaRegUser } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { MdOutlineShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <section>
      <div className="max-w-screen-xl m-auto  ">  
        <div className="flex items-center justify-between py-4 ">
          <div>
            <img src="/logo.svg" alt="" />  
          </div>
          <nav>
            <ul >
              <li className="flex space-x-8 font-semibold text-[20px]">
                <Link to="/" className="hover:text-yellow-600">Home</Link>
                <Link to="/shop" className="hover:text-yellow-600">Shop</Link>
                <Link to="/about" className="hover:text-yellow-600">About</Link>
                <Link to="/contact" className="hover:text-yellow-600">Contact</Link>
              </li>
            </ul>
          </nav>  
          <div className="flex space-x-4 text-[16px]">
            <a href=""><FaRegUser/></a>
            <a href=""><FiSearch /></a>
            <a href=""><FaRegHeart /></a>
            <a href="/cart"><MdOutlineShoppingCart /></a>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Header
    