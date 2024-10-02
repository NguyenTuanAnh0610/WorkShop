import { Link } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">

 <div className="max-w-screen-xl m-auto justify-center grid grid-cols-4 gap-8 mb-16">
  <div className="flex-col space-y-4">
  <img src="/logo2.svg" alt="" />
    <p>400 University Drive Suite 200 Coral Gables,
    FL 33134 USA</p>
  </div>
  <div className="flex-col space-y-4">
    <h3 className="font-semibold text-[20px]">Sitemap</h3>
    <ul >
          <li className="flex flex-col space-y-4 text-[16px]">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
  </div>
  <div className="flex flex-col space-y-4">
    <h3  className="font-semibold text-[20px]">Help</h3>
    <ul >
          <li className="flex flex-col space-y-4 text-[16px]">
            <Link to="">Payment Options</Link>
            <Link to="">Returns</Link>
            <Link to="">Privacy Policies</Link>
          </li>
        </ul>
  </div>
  <div className="flex flex-col space-y-4">
    <h3  className="font-semibold text-[20px]">Location</h3>
    <ul >
          <li className="flex flex-col space-y-4 text-[16px] underline">
            <Link to=""> support@euphoria.in</Link>
            <Link to="">Ahmedabad Main Road</Link>
            <Link to="">Udaipur, India- 313002</Link>
          </li>
        </ul>
  </div>
 </div>
    </footer>

  )
}

export default Footer
