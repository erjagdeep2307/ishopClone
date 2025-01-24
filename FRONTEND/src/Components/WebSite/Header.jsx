import { Link } from "react-router-dom";
import Container from "../Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
export default function Header() {
  const [toggle,setToggle] =useState(false);
  const menu = [
    {
      menu: "home",
      goto: "/",
    },
    {
      menu: "store",
      goto: "/store",
    },
    {
      menu: "iphone",
      goto: "/store/iphone",
    },
    {
      menu: "mackbook",
      goto: "/store/mackbook",
    },
    {
      menu: "accesseries",
      goto: "/store/accesseries",
    },
  ];
  return (
    <>
      <header className="bg-white shadow-md py-4">
        <div className="hidden md:block">
          <Container className="hidden md:flex justify-between px-6">
            <div className="flex items-center space-x-1 text-sm">
              <span>EN</span>
              <FaCaretDown />
              <span>$</span>
              <FaCaretDown />
            </div>
            <div className="flex items-center gap-3 text-sm">
              <FaRegUser />
              <span>My Profile</span>
              <GiShoppingBag />
              <Link to="/cart">Cart(2)</Link>
              <span className="text-gray-500">$4327</span>
              <FaSearch className="ml-6" />
            </div>
          </Container>
        </div>
        <Container className="flex items-center justify-between px-3 py-3 md:justify-center">
          <img src="./images/iSHOP Logo.svg" alt="" />
          <GiHamburgerMenu className="cursor-pointer md:hidden text-2xl" onClick={()=>{
            setToggle(true);
          }} />
        </Container>
        <Container>
          <nav className="hidden md:block">
            <ul className="flex justify-center items-center uppercase gap-3 font-semibold ">
              {
                menu.map((m,index)=>{
                  return <Link key={index} to={m.goto}>
                    <li className="cursor-pointer hover:text-sky-700">{m.menu}</li>
                  </Link>
                })
              }
            </ul>
          </nav>
          {/* Responsive div */}
          <div className={`z-[99999999999] flex flex-col items-center gap-5 fixed top-0 duration-500 ${toggle?"left-0":"left-[-100%]"} h-full w-full py-20 resposive-nav uppercase md:hidden`}>
           <div className="px-5 self-start">
           <IoCloseSharp className="text-2xl cursor-pointer" onClick={()=>{
            setToggle(false);
           }}/>
           </div>
           <div className="flex items-center border rounded-[20px] bg-white py-1 px-2 gap-2 w-[80%] overflow-hidden text-black ">
           <FaSearch className="text-black"/>
            <input type="text" className="flex-1 focus:border-0 focus:outline-none" placeholder="Search Here" />
            </div> 
              {
                menu.map((m,index)=>{
                    return <Link key={index} to={m.goto} className="text-2xl font-semibold" onClick={()=>{
                      setToggle(false);
                    }}>{m.menu}</Link>
                })
              }
          </div>
        </Container>
      </header>
    </>
  );
}
