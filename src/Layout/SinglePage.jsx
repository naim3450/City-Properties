import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import OrgContext from '../Context/OrgContext'

const SinglePage = () => {

    const { id } = useParams()
    console.log(id);


    // const { getSingleProduct, singleProduct } = useContext(OrgContext)


    // useEffect(() => {
    //     getSingleProduct(`https://dummyjson.com/product/${id}`)
    // }, [])

    return (
        <div>SinglePage</div>
    )
}

export default SinglePage