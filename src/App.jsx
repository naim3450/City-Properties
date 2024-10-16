import React, { useContext } from 'react'
import Home from './Layout/Home'
import Loader from './Component/Loader'
import OrgContext from './Context/OrgContext'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RoutLayout from './Component/RoutLayout';
import SinglePage from './Layout/SinglePage';

function App() {

  const { isLoading } = useContext(OrgContext)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RoutLayout />}>
          <Route path='/' element={<Home />} />
          {/* <Route path='/product:id' element={<SinglePage />} /> */}
        </Route>
      </Route>
    )
  )

  if (isLoading == true) {
    return <Loader />
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
