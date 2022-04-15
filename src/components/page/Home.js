import '../styles/gereric/reset.css'
import './Home.css'
import { useState} from 'react';
import Slides from '../layout/Slides';

import loadLists from '../../services/api'

const data = loadLists() 

function Home() {
  const [lists, setLists] = useState(data);
  const [count , setCount] = useState(3)

  const next = ()=>{
    setCount(+3)
  }

  const previous = ()=>{
    if(count > 3){
      setCount(-3)
    }
  }

  return (
    <>
        <div className="Home">
            <h1>SpaceWalk</h1>
            <button onClick={previous}>anterior</button>
            <div className="Slides" >
              { lists.map((planet)=>(
                  <Slides img={planet.imagem} name={planet.name} description={planet.description} id={planet.id} slide={count}/> 
                ))}
            </div>
            <button onClick={previous}>proximo</button>
       
        </div>
    </>
  )
}

export default Home;