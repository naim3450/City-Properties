import React, { useContext } from 'react'
import Card from '../Common/Card'
import OrgContext from '../Context/OrgContext'
import { Link } from 'react-router-dom'
import Container from '../Component/Container'

const AddToCard = () => {
    const { product, filterProduct } = useContext(OrgContext)
    return (
        <div>
            <Container className="pt-10 flex items-center justify-between flex-wrap gap-y-8">
                {
                    product.map((el) => {
                        return (
                            <Link to={`/product/${el.id}`} key={el.id}>
                                <Card item={el} />
                            </Link>
                        )
                    })
                }
            </Container>
        </div>
    )
}

export default AddToCard