import React from 'react'
import './GetStarted.css'
import { SiGoogleanalytics } from "react-icons/si";
import { SiGoogletagmanager } from "react-icons/si";
import { SiSemrush } from "react-icons/si";
import { SiGoogleads } from "react-icons/si";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";


import { SiAndroidstudio } from "react-icons/si";
import { SiUnrealengine } from "react-icons/si";
import { SiFlutter } from "react-icons/si";



import { SiAdobephotoshop } from "react-icons/si";
import { SiPixlr } from "react-icons/si";
import { SiAdobeindesign } from "react-icons/si";
import { SiCanva } from "react-icons/si";


function GetStarted() {

    const handleOne =()=>{
         window.open('https://www.simplilearn.com/tutorials/digital-marketing-tutorial')
    }

    const handletwo =()=>{
         window.open('https://www.edx.org/learn/software-development')
    }

    const handlethree=()=>{
         window.open('https://developer.android.com/courses')
    }

    const handlefour =()=>{
         window.open('https://www.image.edu.in/thrissur/certificate-in-graphic-design-course.html')
    }
  return (

   
    <div className='container-div'>

        <div className='heading'>
           <h1>Select Your Path</h1>
           <p>Choose Your Path Through Our Mindblowing Suggestions</p>
        </div>


        <div className='course-info'>


            <div className='course-details'>
                <h2>SOFTWARE &nbsp;DEVELOPER</h2>
                <p>Learn about software development online from a variety of institutions 
                    to advance your education and career.</p> 

                    <p>Start Date :- <strong>12/10/2024</strong></p>
                    <p>Duration   :- <strong>06</strong> Months</p>

                    <p><strong>Tools you will learn</strong></p>
                  
                   
                    <div className='tools'>
                    <FaHtml5  onClick={handletwo} className='icons' color='red'/>
                    </div>

                    <div className='tools'>
                    <IoLogoJavascript  onClick={handletwo} className='icons' color='white'/>
                 </div>

                 <div className='tools'>
                    <FaReact  onClick={handletwo} className='icons' color='#4cc9f0'/>
                 </div>

                 <div className='tools'>
                    <FaAngular  onClick={handletwo} className='icons' color='red'/>
                 </div>

                 <button className='register-btns' onClick={handletwo} >Explore Now</button>

            </div>

            <div className='course-details'>
                 <h2>DIGITAL &nbsp;MARKETING</h2>
                 <p>Learn Performance Marketing: The New-Age
                 Data-Driven Advanced Digital Marketing</p>

                 <p>Start Date :- <strong>20/10/2024</strong></p>
                 <p>Duration   :- <strong>10</strong> Weeks</p>

                 <p><strong>Tools you will learn</strong></p>

                 <div className='tools'>
                    <SiGoogleanalytics onClick={handleOne} className='icons' color='orange'/>
                 </div>

                 <div className='tools'>
                    <SiGoogletagmanager onClick={handleOne} className='icons' color='#4cc9f0' /> 
                 </div>

                 <div className='tools'>
                    <SiSemrush onClick={handleOne} className='icons' color='orange'/>
                 </div>

                 <div className='tools'>
                    <SiGoogleads onClick={handleOne} className='icons' color='#4cc9f0'/>
                 </div>

                 <button className='register-btns' onClick={handleOne} >Explore Now</button>
             </div>

             

             <div className='course-details'>
                 <h2>ANDROID &nbsp;DEVELOPER</h2>
                 <p>grow your skills with training created by 
                    C-Learn Android development experts.</p>

                    
                 <p>Start Date :- <strong>05/10/2024</strong></p>
                 <p>Duration   :- <strong>06</strong> Months</p>

                 <p><strong>Tools you will learn</strong></p>

                   
                 <div className='tools'>
                    <SiAndroidstudio  onClick={handlethree} className='icons' color='#00ff00'/>
                 </div>

                 <div className='tools'>
                    <FaReact  onClick={handlethree} className='icons' color='#4cc9f0'/>
                 </div>

                 <div className='tools'>
                    <SiUnrealengine  onClick={handlethree} className='icons' color='white'/>
                 </div>

                 <div className='tools'>
                    <SiFlutter  onClick={handlethree} className='icons' color='#448ee4'/>
                 </div>

                 <button className='register-btns' onClick={handlethree} >Explore Now</button>
             </div>

             
             <div className='course-details'>
                 <h2>GRAPHIC &nbsp;DESIGN</h2>

                 <p>Learn how Color, Layout, images, Composition , typography , 
                    branding and more relate to graphic design.</p>

                    
                 <p>Start Date :- <strong>05/10/2024</strong></p>
                 <p>Duration   :- <strong>06</strong> Months</p>

                 <p><strong>Tools you will learn</strong></p>

                 <div className='tools'>
                    <SiAdobephotoshop   onClick={handlefour} className='icons' color='white' />
                 </div>

                 <div className='tools'>
                    <SiPixlr  onClick={handlefour} className='icons' color='#4cc9f0'/>
                 </div>

                 <div className='tools'>
                    <SiAdobeindesign onClick={handlefour} className='icons' color='#ff007f'/>
                 </div>

                 <div className='tools'>
                    <SiCanva  onClick={handlefour} className='icons' color='rgb(150,20,196)'/>
                 </div>

                 <button className='register-btns' onClick={handlefour} >Explore Now</button>
             </div>

             
       </div>  
    </div>

    
  )
}

export default GetStarted