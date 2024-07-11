import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'
function Footer() {

 const handleClick =()=>{
     window.scrollTo(0,0)
 }


  return (
   <footer className='footer'>
      
      <div className='container'>
         <div className='footer_wrapper'>



               <div className='footer-box'>
                  <div className='logo'>
                      <div className='logo-img'>
                         <img src={footer} alt=''/>
                      </div>

                      <h2>C-Learn</h2>
                  </div>
                  <p>
                     Embrace the future of innovation and technology
                     with out cutting-edge tech business solutions
                  </p>
               </div>


                

               <div className='footer-box'>
                    <h4 className='fotter_title'>Company</h4>

                    <ul className='footer_links'>
                      <li> <Link to='/Course' > Our Programs </Link></li>
                      <li><Link to='/Services' onClick={handleClick}> Our Plan </Link></li>
                      <li><Link to='/Contact' onClick={handleClick}>Become a member</Link></li>
                    </ul>
               </div>




               <div className='footer-box'>
               <h4 className='fotter_title'>Quick Links</h4>

                   <ul className='footer_links'>
                       
                      <li><Link to='/about' onClick={handleClick} > About Us </Link></li>
                      <li><Link to='/Contact' onClick={handleClick}> Contact us </Link></li>
                       <li><Link to= '/support'onClick={handleClick}> Support us </Link></li>
                   </ul>
               </div>



         </div>
      </div>






   </footer>
  )
}

export default Footer
