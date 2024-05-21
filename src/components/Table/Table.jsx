import { useState, useEffect } from "react";
import TableData from "./TableData/TableData";
import TableHeader from "./TableHead/TableHeader"
import './Table.css';

const Table = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    console.log(data);
    return (
        <table className="table-box">
            <TableHeader />
            <TableData data={data} />
        </table >
    )
}

export default Table