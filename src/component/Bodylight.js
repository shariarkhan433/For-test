import React from 'react'
import './style.css'

const Bodylight = () => {
  return (
    <>
    <div className="container text-center mt-4">
    <div className="row align-items-start">
      <table className="table table-borderless outer-bordered">
        <tbody>
          <tr className="text-center">
          <td>
              <h3 className='text-secondary'>Patreon</h3>
              <b>$19.99/mo</b>
            </td>
            <td className="text-start">
              <button className='btn' style={{ padding: '0', backgroundColor: 'transparent', border: 'none',alignItems:'center' }}>&gt;</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-center">
          <td>
              <h3 className='text-secondary'>Netflix</h3>
              <b>$19.99/mo</b>
            </td>
            <td className="text-start">
              <button className='btn' style={{ padding: '0', backgroundColor: 'transparent', border: 'none',alignItems:'center' }}>&gt;</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-center">
            <td>
              <h3 className='text-secondary'>Apple</h3>
              <b>$19.99/mo</b>
            </td>
            <td className="text-start">
              <button className='btn' style={{ padding: '0', backgroundColor: 'transparent', border: 'none',alignItems:'center' }}>&gt;</button>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr className="text-center">
            <td>
              <h3 className='text-secondary'>Spotify</h3>
              <b>$19.99/mo</b>
            </td>
            <td className="text-start">
              <button className='btn' style={{ padding: '0', backgroundColor: 'transparent', border: 'none',alignItems:'center' }}>&gt;</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>

    </>
  )
}

export default Bodylight