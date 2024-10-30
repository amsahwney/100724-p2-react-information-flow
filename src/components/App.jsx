import MonstersContainer from './MonstersContainer'
import FavoriteMonstersContainer from './FavoriteMonstersContainer'
import { useState } from 'react'

function App() {

  const [favMonsters, setFavMonsters] = useState( [ ] )

  return (
    <div className="App">

      <h1>MONSTERS!</h1>

      <div className="two-columns">

        <MonstersContainer setFavMonsters={setFavMonsters}/>

        <FavoriteMonstersContainer favMonsters={favMonsters} setFavMonsters={setFavMonsters}/>

      </div>


    </div>
  )
}

export default App
