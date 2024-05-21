import './TableHeader.css';

const TableHeader = () => {
    const objKeys = ["Id", "Name", "Username", "Zip Code", "Phone", "City", "Suite", "Action"]
    return (
        <thead>
            <tr className='table-headings'>
                {
                    objKeys.map((item, id) => {
                        return (
                            <td key={id}>{item}</td>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default TableHeader