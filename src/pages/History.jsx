import React from 'react'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'
import historyList from '../assets/JsonData/history-list.json'

const historyTableHead = [
    '',
    'Tên Tour',
    'Tên khách',
    'Số vé', 
    'Tổng tiền',
    'status'
   
]

const orderStatus = {
    "Đã thanh toán": "primary",
    "pending": "warning",
    "Đã nhận vé": "success",
    "Hủy vé": "danger"
}

const renderHead = (item, index) => <th key={index}>{item}</th>


const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.nametour}</td>
        <td>{item.nameuser}</td>
        <td>{item.ticket}</td>
        <td>{item.totelprice}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)
const History = () => {
    return (
        <div>
        <h2 className="page-header">
            Lịch sử thanh toán 
        </h2>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card__body">
                        <Table
                            limit='10'
                            headData={historyTableHead}
                            renderHead={(item, index) => renderHead(item, index)}
                            bodyData={historyList}
                            renderBody={(item, index) => renderBody(item, index)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default History