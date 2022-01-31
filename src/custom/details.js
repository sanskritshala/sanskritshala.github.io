import React from 'react';
import {FaCopy, FaFacebook, FaGoogle, FaInstagram, FaRegCopyright, FaSnapchat} from 'react-icons/fa'
import '../css/details.css'
function Details() {
  return <div className='details' >
  <div className='information' >
      <div className='detailcards' >
          <div style={{width:'100%'}} >
              
          <div>
              Team
          </div>
          <div className='detaildescription' >
              <div>Members</div>
              <div>of</div>
              <div>the</div>
              <div>team</div>
              <div>are</div>
              <div>displayed</div>
          </div>
          </div>
      </div>
      <div className='detailcards' >
          
      <div style={{width:'100%'}}>
              
              <div>
                  Contact
              </div>
              <div className='detaildescription' >
              <div>Phone: 987654312 </div>
              <div>Email: email@email.com</div>
              <div>Jivnesh Sandhan </div>
                  
              </div>
              </div>
          </div>
      <div className='detailcards' >
      <div style={{width:'100%'}} >
              
              <div>
                  Follow Us
              </div>
              <div className='detaildescription' >
                  <div style={{display:'flex',justifyContent:'space-around'}} >
                  <FaFacebook className='icons' />
                  <FaGoogle className='icons'/>
                  <FaInstagram className='icons'/>
                  <FaSnapchat className='icons'/>
                  </div>
              </div>
              </div>
          </div>
  </div>
  <div style={{display:'flex',flexDirection:'row-reverse'}} >
      <div style={{alignSelf:'center',padding:10}} >
          This template is made by Hrithik Sharma
      </div>
      <FaRegCopyright style={{alignSelf:'center'}} />
  </div>
</div>;
}

export default Details;
