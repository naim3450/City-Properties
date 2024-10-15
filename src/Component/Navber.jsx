import React from 'react'
import logo from '../assets/Image/footlogo.png'
import Container from './Container'
import List from './List'

const Navber = () => {

    let menu = [
        {
            name: "Home",
            path: "#",
        },
        {
            name: "Properties",
            path: "#",
        },
        {
            name: "Agents",
            path: "#",
        },
        {
            name: "Blog",
            path: "#",
        },
        {
            name: "Contact",
            path: "/contact",
        }
    ]

    return (
        <div>
            <Container className={`py-[30px] flex items-center justify-between`}>
                <img src={logo} alt="" />

                <div className="w-[715px] items-center flex justify-between">
                    <ul className='flex gap-10'>
                        {
                            menu.map((el, idx) => {
                                return (
                                    <List key={idx} text={el.name} to={el.path} />
                                )
                            })
                        }
                    </ul>

                    <button className='text-[#FFFF] text-base w-[150px] h-[56px] bg-blue font-Nunito font-bold rounded-[30px]'>
                        Log In
                    </button>
                </div>
            </Container>
        </div>
    )
}

export default Navber