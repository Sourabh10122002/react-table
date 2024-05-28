import React from 'react'
import MainHeader from '../../components/MainHeader/MainHeader'
import Table from '../../components/Table/Table'

const Home = ({ data }) => {
    return (
        <div>
            <MainHeader />
            <Table data={data} />
        </div>
    )
}

export default Home