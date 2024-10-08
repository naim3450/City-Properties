import React from 'react'
import Container from './Container'
import item from '../assets/Image/item.png'
import item2 from '../assets/Image/item2.png'
import item3 from '../assets/Image/item3.png'
import item4 from '../assets/Image/item4.png'
import item5 from '../assets/Image/item5.png'
import item6 from '../assets/Image/item6.png'

const SlidePart = () => {
    return (
        <div>
            <Container>
                <h1 className='text-[#292929] text-[25px] font-bold text-center'>Don’t worry to Fail. We have Experienced with Big Company’s</h1>
                <div className="flex mt-[40px]">
                    <img src={item} alt="" />
                    <img src={item2} alt="" />
                    <img src={item3} alt="" />
                    <img src={item4} alt="" />
                    <img src={item5} alt="" />
                    <img src={item6} alt="" />
                </div>
            </Container>
        </div>
    )
}

export default SlidePart