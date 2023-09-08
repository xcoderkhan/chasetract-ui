import { Link } from "react-router-dom";
import logo from '../../../assets/images/logo/logo.png';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Home</Link></li>
                        <li>
                            <Link>Services</Link>
                            <ul className="p-2">
                                <li><Link>Events</Link></li>
                                <li><Link>T-Shirt</Link></li>
                            </ul>
                        </li>
                        <li><Link>About-Us</Link></li>
                    </ul>
                </div>
                <Link to='/' className="flex items-center gap-2 sm:justify-center normal-case text-xl">
                    <img src={logo} alt="" className=" w-12 h-12" /> ChaseTrack
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Services</summary>
                            <ul className="p-2">
                                <li><Link>Events</Link></li>
                                <li><Link>T-Shirt</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link>About-Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/login'} className="btn">Login</Link>
            </div>
        </div>
    );
};

export default NavBar;