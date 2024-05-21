import './SearchBox.css'
const SearchBox = () => {
    return (
        <div className='search'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className='search-box' placeholder='Search...' />
        </div>
    )
}

export default SearchBox