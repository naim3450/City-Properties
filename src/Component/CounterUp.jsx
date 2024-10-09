import React from 'react'
import CounterUpCard from './CounterUpCard'
import Container from './Container'

const CounterUp = () => {
    return (
        <div className='pt-[80px] h-[100vh]'>
            <Container className="flex justify-between">
                <CounterUpCard />
                <CounterUpCard />
                <CounterUpCard />
                <CounterUpCard />
            </Container>
        </div>
    )
}

export default CounterUp