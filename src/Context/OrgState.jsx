import React, { useReducer, useEffect } from 'react'
import OrgContext from './OrgContext'
import { reducer } from './reducer'
import axios from 'axios'

const initialState = {
    isLoading: true,
    product: [],
    filterProduct: [],
    singleProduct: [],
    isLoadingSingle: true,
    isError: false,
}

const OrgState = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    function fetchProducts() {
        let api = fetch("https://dummyjson.com/product")

        api.then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok ' + res.statusText)
            }
            return res.json();
        })
            .then((data) => {
                const product = data.products

                try {
                    dispatch({
                        type: "resOk",
                        payload: product
                    })
                }
                catch (error) {
                    dispatch({
                        type: "error",
                        payload: product
                    })
                }
                finally {
                    dispatch({
                        type: "loading",
                        payload: product
                    })
                }
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])


    const getSingleProduct = async (url) => {
        const res = await axios.get(url)
        const recive = await res.data

        try {
            dispatch({
                type: "Single_resOk",
                payload: recive
            })
        }
        catch (error) {
            dispatch({
                type: "Single_error",
                payload: recive
            })
        }
        finally {
            dispatch({
                type: "Single_loading",
                payload: recive
            })
        }

    }

    return (
        <OrgContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </OrgContext.Provider >
    )
}

export default OrgState