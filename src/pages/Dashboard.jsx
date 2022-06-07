import React, {useEffect} from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../components/status-card/StatusCard'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Khách hàng đặt vé ',
        data: [40,70,20,90,36,80,30,91,60]
    }, {
        name: 'Khách hàng hủy vé',
        data: [40, 50, 15, 60, 30, 16, 20, 25, 50, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'Tên tour',
        'Số lượng vé',
        'Số tiền / người'
    ],
    body: [
        {
            "username": "Sun World Ba Na Hills tại Đà Nẵng",
            "order": "7",
            "price": "590.000 VNĐ"
        },
        {
            "username": "Vé công viên suối khoáng nóng Núi Thần Tài",
            "order": "12",
            "price": "728.500 VNĐ"
        },
        {
            "username": "Vé Jump Arena Tăng Bạt Hổ Hà Nội",
            "order": "16",
            "price": "140.000 VNĐ"
        },
        {
            "username": "Lớp học làm gốm tại Hà Nội",
            "order": "20",
            "price": "250.000 VNĐ"
        },
        {
            "username": "Vé VinWonders Nha Trang",
            "order": "13",
            "price": "560.000 VNĐ"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.order}</td>
        <td>{item.price}</td>
    </tr>
)

const latestOrders = {
    header: [
        "ID",
        "Tên tour",
        "Tên khách",
        "Số lượng vé đặt",
        "Ngày",
        "trạng thái vé"
    ],
    body: [
        {
            id: "T001",
            tour: "Tour khám phá Đà Nẵng: Ngũ Hành Sơn & Thánh địa Mỹ Sơn - 1 ngày",
            user: "Linh Tuấn",
            date: "1 June 2022",
            price: "3",
            status: "Còn vé"
        },
        {
            id: "T002",
            tour: "Sun World Ba Na Hills tại Đà Nẵng",
            user: "Anh Quân",
            date: "1 June 2022",
            price: "2",
            status: "Hết vé"
        },
        {
            id: "T003",
            tour:"Vé công viên suối khoáng nóng Núi Thần Tài",
            user: "Tường An",
            date: "3 June 2022",
            price: "5",
            status: "Còn vé"
        },
        {
            id: "T004",
            tour:"Tour khám phá Đà Nẵng về đêm - Nửa ngày",
            user: "Linh Tuấn",
            date: "1 June 2022",
            price: "7",
            status: "Còn vé"
        },
        {
            id: "T005",
            tour:"Tour du ngoạn Đà Nẵng về đêm và du thuyền sông Hàn - 4 giờ",
            user: "Anh Quân",
            date: "27 June 2022",
            price: "3",
            status: "Hết vé"
        }
    ]
}

const orderStatus = {
    "Còn vé": "primary",
    "pending": "warning",
    "paid": "success",
    "Hết vé": "danger"
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.tour}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark'}
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light'}
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Tour có lượng khách quan tâm nhiều nhất</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topCustomers.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Trạng thái vé mà khách đã đặt theo tour</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
