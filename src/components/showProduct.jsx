import React, { useState } from 'react'
import { useCart } from "react-use-cart";
import CardMap from './common/CardMap';
import BtnControl from './common/BtnControl';
import { Link } from 'react-router-dom';


const ShowProduct = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const pgs = 6

    const { cartTotal } = useCart();
    return (
        <>

            <CardMap
                nameheading=" TA shopping Store"
                bdcolor='grey'
                nameBtn='cart Detail'
                path='/carts'
                pg={pgs}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}

            />
            <div className='text-center'>

                <BtnControl
                    pages={pgs}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <div style={{ borderTop: '3px solid purple', display: 'flex', flexDirection: 'column' }} className='container' >
                <h1 className='float-end' style={{ fontFamily: 'Sofia', fontSize: '30px', fontWeight: 'bolder' }}>Total Price: <span style={{ color: 'red' }}>{cartTotal}</span></h1>


                <div className='text-center'>
                    <Link className='btn butcontrol b' to="/carts"></Link>
                </div>
            </div>

        </>
    )
}

export default ShowProduct
