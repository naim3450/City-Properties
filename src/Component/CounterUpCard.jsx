import { useGSAP } from '@gsap/react'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const CounterUpCard = ({ item }) => {
    let { num, img, dtl, amountTyp } = item


    gsap.registerPlugin(ScrollTrigger)
    let [printNum, setprintNum] = useState(1)

    useEffect(() => {
        gsap.to(printNum, {
            onUpdate: function name() {
                if (printNum <= num) {
                    setprintNum(printNum++)
                }
            },
            scrollTrigger: {
                trigger: '.counter',
                scroller: 'body',
                start: 'top 70%'
            }
        })
    }, [printNum])


    return (
        <div className="w-[265px]">
            <img src={img} alt="" className='mx-auto' />
            <h2 className='text-5xl font-bold font-Nunito text-center mt-[20px]'>{printNum}{amountTyp}</h2>
            <p className='tex-[20px] font-Nunito opacity-[60%] text-center mb-10px'>{dtl}</p>
        </div>
    )
}

export default CounterUpCard