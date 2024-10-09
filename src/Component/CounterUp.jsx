import React from 'react'
import CounterUpCard from './CounterUpCard'
import Container from './Container'
import Subscribe from './Subscribe'

const CounterUp = () => {
    return (
        <div className='pt-[80px] h-[100vh]'>
            <Container className="">
                <div className="flex justify-between">
                    <CounterUpCard />
                    <CounterUpCard />
                    <CounterUpCard />
                    <CounterUpCard />
                </div>

                <Subscribe />
            </Container>
        </div>
    )
}

export default CounterUp