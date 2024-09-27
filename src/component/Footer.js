import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
<div className="container text-center">
    <div className="row align-items-end">
        <div className="col">
            <button className="btn custom-btn">
            <i className="bi bi-graph-up" style={{ display: 'block', fontSize: '20px' }}></i>
                Overview
            </button>
        </div>
        <div className="col">
            <Link to='/nextpage' className="btn custom-btn">
            <i className="bi bi-calendar" style={{ display: 'block', fontSize: '20px' }}></i>
                This Month
            </Link>
        </div>
        <div className="col">
            <button className="btn custom-btn">
            <i className="bi bi-gift" style={{ display: 'block', fontSize: '20px' }}></i>
                Offers
            </button>
        </div>
        <div className="col">
            <button className="btn custom-btn">
            <i className="bi bi-gear" style={{ display: 'block', fontSize: '20px' }}></i>
                Settings
            </button>
        </div>
    </div>
</div>

        </>
    )
}

export default Footer