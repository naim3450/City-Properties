import React from 'react'
import logo from '../assets/logo.png'
import Container from './Container'
import List from './List'

const Navber = () => {

    let menu = ["Home", "Properties", "Agents", "Blog", "Contact"]

    return (
        <div>
            <Container className={`py-[30px]`}>
                <img src={logo} alt="" />

                <div className="">
                    <ul>
                        {
                            menu.map((el, idx) => {
                                return (
                                    <List key={idx} text={el} />
                                )
                            })
                        }
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Navber