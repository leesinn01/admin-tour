import React from 'react'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

import tourList from '../assets/JsonData/tour-list.json'

const tourTableHead = [
    '',
    'name',
    'ticket',
    'address',
    'price',
    'status'
   
]
const orderStatus = {
    "Còn vé": "primary",
    "pending": "warning",
    "paid": "success",
    "Hết vé": "danger"
}

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.ticket}</td>
        <td>{item.address}</td>
        <td>{item.price}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Products = () => {
    return (
        <div>
            <h2 className="page-header">
                Tour hiện có
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table
                                limit='10'
                                headData={tourTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={tourList}
                                renderBody={(item, index) => renderBody(item, index)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products
