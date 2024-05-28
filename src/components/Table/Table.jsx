import TableData from "./TableData/TableData";
import TableHeader from "./TableHead/TableHeader"
import './Table.css';

const Table = ({ data }) => {

    return (
        <table className="table-box">
            <TableHeader />
            <TableData data={data} />
        </table >
    )
}

export default Table