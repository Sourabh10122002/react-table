import './ShowEntries.css';
const ShowEntries = () => {
    return (
        <div className="show-entries">
            <p>Show</p>
            <select className='select-option-list'>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
            <p>entries</p>
        </div>
    )
}

export default ShowEntries