function MonsterCard({ monster, setFavMonsters, fromFavorites=false}) {

    function handleFavorite() {
        setFavMonsters(favMonsters => favMonsters.includes(monster) ? favMonsters : [...favMonsters, monster] )
    }

    function handleRemove() {
        setFavMonsters(favMonsters => favMonsters.filter(eachMonster => eachMonster !== monster) )
    }

    return (
        <div className="monster-card">

            <h3>{monster.name}</h3>

            <img src={monster.image} alt={`${monster.name} in black and white`} />

           {
                fromFavorites 
                ? 
                <button onClick= {handleRemove}>Remove</button> 
                : 
                <button onClick={handleFavorite}>Favorite</button>
           }

        </div>
    )

}

export default MonsterCard