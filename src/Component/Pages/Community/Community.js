import React from 'react'
import './Community.css'
import tc from '../../../assets/img/tc.png'
function Community() {

    const handleClick=()=>{
        window.open('https://t.me/s/python_life_telugu')
    }

  return (
    <div className='container'>
         <div className='start-wrapper'>
            <div className='start-img'>
               <img src={tc} alt=''/>
            </div>



            <div className='start-content'>
                  <h2 className='section-title'>Join Our Free Tech Community</h2>
                <p className='hidden'>Unlock the power of knowledge and innovation by joining our vibrant and 
                    free WhatsApp tech community
                </p>
              <button className='register-btna' onClick={handleClick}>Join Now</button>
            </div>


         </div>
    </div>
  )
}

export default Community