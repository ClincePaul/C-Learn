import React from 'react'
import headerimg from '../../assets/img/headerimg.png' 

import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

  const nav_titles = [
    
    {path:'/', display:'Home'},

    {path:'/Services', display:'Services'},

    {path:'/Course', display:'Courses'},

    {path:'/about', display:'About Us'}
  ]


  return (
    <header className='header'>

 <div className='container'>
 

    <div className='nav_container'> 
         
         <div className='logo'>
            <div className='logo-img'>
              <img src={headerimg} alt=''/>
            </div>
            <h2>-Learn</h2>
         </div>

           


           <div className='navigation'> 
              <ul className='menu'>
                 {
                   nav_titles.map((item)=>(

                      <li className='nav_item'> <Link  to={item.path} >{item.display}</Link></li>
                   ))

                 }
              </ul>
           </div>

      </div>



 </div>




    </header>
  )
}

export default Header

