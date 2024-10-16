import React, { useContext } from "react";
import Home from "./Layout/Home";
import Loader from "./Component/Loader";
import OrgContext from "./Context/OrgContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RoutLayout from './Component/RoutLayout';
import SinglePage from './Layout/SinglePage';
import AddToCard from './Layout/AddToCard';
import Agents from "./Layout/Agents";
import Contact from "./Component/Contact";
import BlogPage from "./page/BlogPage";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<RoutLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/agent' element={<Agents />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<SinglePage />} />
          <Route path='/addToCard' element={<AddToCard />} />
        </Route>
      </Route>
    )
  );

  const { isLoading } = useContext(OrgContext)

  if (isLoading == true) {
    return <Loader />;
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
