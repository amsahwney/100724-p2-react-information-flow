import { useState } from 'react'
import MonsterCard from './MonsterCard'
import Search from './Search'
import { monstersArray as monsters } from '../data/monsters-array'

function MonstersContainer( { setFavMonsters } ) {
    
    const [searchMonster, setSearchMonster] = useState("")

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchMonster.toLowerCase()))
    const mappedMonsters = filteredMonsters.map( monster =>  <MonsterCard key={monster.id} monster={monster} 
        setFavMonsters={setFavMonsters} setSearchMonster = {setSearchMonster}/>)

    return (
        <div>

        <h2>All Monsters</h2>
        <p>Searching for: {searchMonster}</p>
        <Search setSearchMonster = {setSearchMonster}/>

            <div className="monster-container">
                
                { mappedMonsters }

            </div>
 
        </div>
    )

}

export default MonstersContainer