import './TableData.css';

const TableData = ({ data }) => {
    return (
        <tbody>
            {
                data.map((list, idx) => {
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
                                <img src="./images/edit.svg" alt="edit" />
                                <img src="./images/delete.svg" alt="delete" />
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TableData