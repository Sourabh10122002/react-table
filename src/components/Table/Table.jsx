import TableData from "./TableData/TableData";
import TableHeader from "./TableHead/TableHeader"
import './Table.css';

const Table = () => {

    return (
        <table className="table-box">
            <TableHeader />
            <TableData />
        </table >
    )
}

export default Table