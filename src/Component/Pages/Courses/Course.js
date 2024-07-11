import React from 'react'
import './Course.css'
import ai from '../../../assets/img/ai.png'
import sd from '../../../assets/img/sd.png'
import dg from '../../../assets/img/dg.png'
import hacker from '../../../assets/img/hacking.png'
function Course() {

 const courseData=[
    
    { Title:"AI DEVELOPMENT" , Desc:"Master AI development" , img:ai} ,
    
    { Title:"DIGITAL MARKETING" , Desc:"Master Digital Marketing !!!" , img:dg} ,

    { Title:"CYBER SECURITY" , Desc:"Master Cyber Security !!!" , img:hacker} ,

    { Title:"SOFTWARE DEVELOPMENT " , Desc:"Master Software Development !!!" , img:sd}
]

  return (
    <div className='container course-container'>
      <div className='course-top'>
         <h2 className='section_title1'>Our Free Courses</h2>
         <p>The Top Trending Free Courses With Free Certificates</p>

         <div className='course-wrapper'>
             
             {

                 courseData.map((course,index)=>(
                   
                   <div className='course-item' key={index}>
                    <span className='course-icon'>
                       <img src={course.img} alt=''/>
                    </span>
   
                    <div className='course-content'>
                      <h4>{course.Title}</h4>
                      <p>{course.Desc}</p>
                    </div>
                </div>
                
                ))
             }

         </div>
      </div>
    </div>
  )
}

export default Course
