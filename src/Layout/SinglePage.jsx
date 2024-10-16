import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import OrgContext from '../Context/OrgContext'
import Loader from '../Component/Loader'

const SinglePage = () => {

    const api = "https://dummyjson.com/products"

    const { getSingleProduct, singleProduct, isLoadingSingle } = useContext(OrgContext)

    const { id } = useParams()

    const { title, thumbnail, images, returnPolicy, price, stock } = singleProduct

    useEffect(() => {
        getSingleProduct(`${api}/${id}`)
    })


    return (
        <div>
            <div className="">
                <h1 className='text-black font-bold text-center text-[36px]'>{title}</h1>
                <img src={thumbnail} alt="" className='mx-auto' />
                <p className='text-black font-semibold text-center text-[26px]'>${price}</p>
                <h3 className='text-black font-medium text-center text-[30px]'>{returnPolicy}</h3>
                <h3 className='text-center'>stock: {stock}</h3>
            </div>
        </div>
    )
}

export default SinglePage