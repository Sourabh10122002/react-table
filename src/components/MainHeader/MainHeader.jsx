import './MainHeader.css';
import ShowEntries from './ShowEntries/ShowEntries'
import SearchBox from './SearchBox/SearchBox'
import AddCustomer from './AddCustomer/AddCustomer';

const MainHeader = () => {
    return (
        <div className='main-header'>
            <div className='left-head'>
                <ShowEntries />
                <SearchBox />
            </div>
            <AddCustomer />
        </div>
    )
}

export default MainHeader