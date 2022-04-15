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
    setEnd(end + 3)
    setFirt(firt + 3)
  }

  const previous = ()=>{
    setEnd(end - 3)
    setFirt(firt - 3)
  }

  return (
    <>
        <div className="Home">
            <h1>SpaceWalk</h1>
            <button onClick={previous}>anterior</button>
            <div className="Slides" >
              { lists.map((planet)=>(
                  <Slides img={planet.imagem} name={planet.name} description={planet.description} id={planet.id} inicio={firt} fim={end}/> 
                ))}
            </div>
            <button onClick={next}>proximo</button>
       
        </div>
    </>
  )
}

export default Home;