import React, { useReducer, useEffect } from "react";
import OrgContext from "./OrgContext";
import { reducer } from "./reducer";
import axios from "axios";

const initialState = {
  isLoading: true,
  product: [],
  filterProduct: [],
  singleProduct: [],
  isLoadingSingle: true,
  isError: false,
};

const OrgState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function fetchProducts() {
    let api = fetch("https://dummyjson.com/product");

    api
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok " + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        const product = data.products;

        try {
          dispatch({
            type: "resOk",
            payload: product,
          });
        } catch (error) {
          dispatch({
            type: "error",
            payload: product,
          });
        } finally {
          dispatch({
            type: "loading",
            payload: product,
          });
        }
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // const getSingleProduct = async (url) => {
  //     const res = await axios.get(url)
  //     const recive = await res.data

  //     const singleProduct = recive.products

  //     console.log(url);

  //     try {
  //         dispatch({
  //             type: "Single_resOk",
  //             payload: singleProduct
  //         })
  //     }
  //     catch (error) {
  //         dispatch({
  //             type: "Single_error",
  //             payload: singleProduct
  //         })
  //     }
  //     finally {
  //         dispatch({
  //             type: "Single_loading",
  //             payload: singleProduct
  //         })
  //     }

  // }

  return (
    <OrgContext.Provider value={{ ...state }}>{children}</OrgContext.Provider>
  );
};

export default OrgState;
