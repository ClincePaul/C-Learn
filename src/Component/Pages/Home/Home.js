
import React from 'react'
import './Home.css'
import mainimage from '../../../assets/img/mainimage.png'
import Course from '../Courses/Course';
import Community from '../Community/Community';
import Plans from '../Plans/Plans';
import { Link } from 'react-router-dom';



function Home() {
   const handleclick=()=>{
       window.open('https://www.youtube.com/watch?v=dqlO6_5rZSQ')
   }
  return (

    <>

    <section>
          
     <div className='container'>
        <div className='home-container'>


             <div className='home-content'>

        
                <h2 className='section_title'>Learn Everything for free !!</h2>
                <p>Master Trending Technologies with C-Learn ,
                     Invest Your Time And Return Skill</p>

                     <div className='home-btns'>
                          <button  className='register-btn'> <Link to='/getstarted' > Get Started </Link> </button>
                          <button onClick={handleclick} className='register-btn' > Watch Now </button>
                     </div>

              
             </div>



             <div className='home-img'>
                 <div className='image-mover'>
                   <img src={mainimage} alt='' /> 
                 </div>
             </div>


        </div>
     </div>


    </section>

    <Course/>
    
    <Community/>

    <Plans/>
    </>
  )
}

export default Home
