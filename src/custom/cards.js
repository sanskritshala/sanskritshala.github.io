import React,{useState} from 'react';
import '../css/cards.css'
import $ from 'jquery'
import '@fontsource/roboto'
function Cards({vid,title,vcolor1,vcolor2,...props}) {
    var vvid="#"+vid;
    const [width,setwidth]=useState(window.innerWidth)
    window.addEventListener('change',()=>{
      setwidth(window.innerWidth)
    })
    vcolor2=vcolor1
     vcolor1=(vcolor1.substr(0,vcolor1.indexOf(')')))+",0.25)"
     vcolor2=(vcolor2.substr(0,vcolor2.indexOf(')')))+",0.01)"
     
  return <div className='cards' {...props} >
      <div className='tile' id={vid} style={{backgroundImage:'linear-gradient(90deg,'+vcolor1+','+vcolor2+')',
    borderColor:vcolor1
    }} 
      onMouseEnter={()=>{
        /*  $(vvid).css({backgroundColor:'black',
          position:'fixed',
          top:'10%',
          left:'10%',
          height:600,
          width:'80%',
          zIndex:1,
        })*/
      }}
      onMouseLeave={()=>{
        //$(vvid).css({backgroundColor:'',position:''})

    }}
      >
        <div style={{
      }} >
        <div className='tiletitle' >
            {title}
          </div>
          
        </div>
        <div className='description' >
        Section overview goes here. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        </div>
      </div>
  </div>;
}

export default Cards;
