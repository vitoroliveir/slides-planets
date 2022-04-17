import '../styles/gereric/reset.css'
import './Home.css'
import { useState} from 'react';
import Slides from '../layout/Slides';

import loadLists from '../../services/api'

const data = loadLists() 

function Home() {
  const [lists, setLists] = useState(data);
  const [firt, setFirt] = useState(0)
  const [end , setEnd] = useState(3)

  const next = ()=>{
    
    if(end > 6){
      return null
    }else{
      setEnd(end + 3)
      setFirt(firt + 3)
    }

  }

  const previous = ()=>{
    if(firt  < 1 ){
      return null
    }else{
      setEnd(end - 3)
      setFirt(firt - 3)
    }
  }

  return (
    <main>
        <div className="Home">
            <h1>SpaceWalk</h1>
            
            <div className="Slides" >
              <button onClick={previous} className="btn-previous"></button>
                { lists.map((planet)=>(
                    <Slides img={planet.imagem} name={planet.name} description={planet.description} id={planet.id} inicio={firt} fim={end}/> 
                  ))}
              <button onClick={next}  className="btn-next"></button>

            </div>
            
       
        </div>
    </main>
  )
}

export default Home;