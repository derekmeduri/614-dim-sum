import cartIcon from "../assets/icons/cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav id="header" className="bg-black text-white">
            <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2 Container">
                <div className="logo-wrapper pl-4 flex items-center"> 
                    <Link to="/" 
                    className="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                    ><span className="text-red-600">614</span> Dim Sum</Link>
                </div>
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" 
                    className="text-xl hover:text-red-600">Home</Link>
                    <Link to="#about" 
                    className="text-xl hover:text-red-600">About</Link>
                    <Link
                     to="#contact" 
                     className="text-xl hover:text-red-600">Contact</Link>
                </div>
                <div className="flex items-center justify-center space-x-4 pr-4">
                    <Link to="/cart" className=" stroke-white" >
                        <img src={cartIcon} alt="cart" height={30} width={35}/>
                    </Link>
                    <Link
                    to="/login" 
                    className="text-xl hover:text-red-600">Login</Link>
                    <Link
                    to="/signup" 
                    className="text-xl hover:text-red-600">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;