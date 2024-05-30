import DeleteData from './DeleteData/DeleteData';
import './TableData.css';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../App'

const TableData = () => {
    const { data } = useContext(userContext);
    const [show, setShow] = useState("none");
    const [num, setNum] = useState(null);
    const [tableData, setTableData] = useState(data);
    const navigate = useNavigate();

    console.log(tableData)

    useEffect(() => {
        setTableData(data);

    }, [data]);


    function handleDelete(idx) {
        setNum(idx)
        setShow((show) => show === "none" ? "block" : "none");
    }

    function deleteRow(num) {
        setTableData((prevTableData) => prevTableData.filter((item, index) => index !== num));
        setShow("none");
        setNum(null);
    }

    function handleCross() {
        setShow("none");
        setNum(null);
    }

    function handleNavigate(idx) {
        navigate('/userid', { state: idx });
    }

    return (
        <>
            <tbody>
                {
                    tableData.map((list, idx) => {
                        return (
                            <tr className='table-row-description' key={idx}>
                                <td className='table-description'>
                                    {list.id}
                                </td>
                                <td className='table-description'>
                                    {list.name}
                                </td>
                                <td className='table-description'>
                                    {list.username}
                                </td>
                                <td className='table-description'>
                                    {list.address.zipcode}
                                </td>
                                <td className='table-description'>
                                    {list.phone}
                                </td>
                                <td className='table-description'>
                                    {list.address.city}
                                </td>
                                <td className='table-description'>
                                    {list.address.suite}
                                </td>
                                <td className='table-description'>
                                    <img onClick={() => handleNavigate(idx)} src="./images/edit.svg" alt="edit" />
                                    <img onClick={() => handleDelete(idx)} src="./images/delete.svg" alt="delete" />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <DeleteData showSwitch={show} num={num} unShow={handleCross} handleDelete={deleteRow} />
        </>
    );
}

export default TableData;
