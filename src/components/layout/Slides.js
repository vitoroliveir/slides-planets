import '../styles/gereric/reset.css'
import  './Slides.css'
import { useState} from 'react';

function Slides({img, name, description, id , slide }) {
  const [count ,setCount] = useState(slide)




  return (
    <>  
        
        <div className={id <= count ? "Slide" : "none"}  >  
          <img src={`${img}`}></img>
          <div>         
            <p>{name}</p>
            <p>{description}</p>
          </div>
        </div>
        
    </>
  )
}

export default Slides;