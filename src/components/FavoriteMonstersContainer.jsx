import MonsterCard from './MonsterCard'

function FavoriteMonstersContainer( {favMonsters, setFavMonsters} ) {

    const mappedMonsters = favMonsters.map( monster =>  <MonsterCard key={monster.id} monster={monster} fromFavorites={true} setFavMonsters={setFavMonsters}/>)

    return (
        <div>

        <h2>My Favorites</h2>

            <div className="monster-container">
                
                {/* if the monsters array has 0 length show an h3 instead */}
                { favMonsters.length ? mappedMonsters : <h3>No favorites yet</h3> }

            </div>
 
        </div>
    )

}

export default FavoriteMonstersContainer