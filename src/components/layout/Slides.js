import '../styles/gereric/reset.css'
import  './Slides.css'

function Slides({img, name, description, id, inicio , fim }) {

  function slides(){
    if(id > inicio && id <= fim){
      return "Slide"
    }else{
      return "none"
    }
  }

  return (
    <>  
    
        <div className={slides()}  >  
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