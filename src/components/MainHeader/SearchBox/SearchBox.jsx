import './SearchBox.css';
import { useContext } from 'react';
import { userContext } from '../../../App';

const SearchBox = () => {
    const { data, setUIData } = useContext(userContext);

    function handleSearch(e) {
        const inputValue = e.target.value.toLowerCase();
        const filteredResults = data.filter((row) => {
            return Object.values(row).some(val =>
                String(val).toLowerCase().includes(inputValue)
            );
        });
        setUIData(filteredResults);

    }

    return (
        <div className='search'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" className='search-box' onChange={handleSearch} placeholder='Search...' />
        </div>
    );
};

export default SearchBox;
