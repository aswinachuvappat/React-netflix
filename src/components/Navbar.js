import React from 'react'
import { useEffect,useState } from 'react'
import './Navbar.css'

function Navbar() {
const[show,setShow] = useState(false)

useEffect(()=>{
window.addEventListener("scroll" , () => {
    if(window.scrollY > 100 ){
        setShow(true);
    }else setShow(false);
})
return () =>{                   //to remove the eventlisteners after using and to free the memory after use
    window.removeEventListener("scroll",()=> {})
}
},[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className='logo'
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt='logo'>

      </img>
    </div>
  )
}

export default Navbar
