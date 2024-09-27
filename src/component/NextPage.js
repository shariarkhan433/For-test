import React from 'react'

const NextPage = () => {
    return (
        <>
            <div className="container text-center mt-5">
                <div className="col align-items-center">
                    <p> Your Monthly Subscription payment History</p>
                    <h3><b> $614</b></h3>
                </div>
            </div>
            <table className="table table-borderless outer-bordered">
                <tbody>
                    <tr className="text-center">
                        <td>
                            <h3 className='text-secondary'>Patreon</h3>
                            <b>$19.99/mo</b>
                        </td>
                        <td className="text-start">
                            <button className='btn' style={{ padding: '0', backgroundColor: 'transparent', border: 'none', alignItems: 'center' }}>&gt;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default NextPage