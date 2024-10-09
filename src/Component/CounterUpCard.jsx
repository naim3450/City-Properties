import React from 'react'
import Badge from '../assets/Image/Badge.png'

const CounterUpCard = () => {
    return (
        <div className='w-[265px]'>
            <img src={Badge} alt="" className='mx-auto' />
            <h2 className='text-5xl font-bold font-Nunito text-center mt-[20px]'>34M</h2>
            <p className='tex-[20px] font-Nunito opacity-[60%] text-center mb-10px'>Money In & Out</p>
        </div>
    )
}

export default CounterUpCard