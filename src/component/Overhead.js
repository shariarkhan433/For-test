import React from 'react'

const Overhead = () => {
  return (
    <div className="container text-center mt-4">
    <div className="row align-items-start">
      <div className="col">
      <button className="btn custom-btn">
                <i className="bi bi-file-earmark-lock" style={{ display: 'block', fontSize: '20px' }}></i>
                Bills
            </button>
      </div>
      <div className="col">
      <button className="btn custom-btn">
            <i className="bi bi-cash" style={{ display: 'block', fontSize: '20px' }}></i>
                Payment
            </button>
      </div>
      <div className="col">
      <button className="btn custom-btn">
                <i className="bi bi-file-earmark-text" style={{ display: 'block', fontSize: '20px' }}></i>
                Subscription
            </button>
      </div>
    </div>
  </div>
  )
}
export default Overhead