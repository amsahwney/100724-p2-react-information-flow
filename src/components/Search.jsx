
function Search({ setSearchMonster }) {

    function handleInput(event) {
        setSearchMonster(event.target.value)
    }

 return (
    <>
    <input onChange={handleInput} type='text' placeholder='Search Monsters'/>
    <input type='submit' value='submit'/>
    </>

 )

}

export default Search