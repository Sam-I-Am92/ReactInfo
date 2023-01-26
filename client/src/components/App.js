import React from 'react';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, 
  Route 
} from 'react-router-dom';

import Home from './Home/Home.js';
import List from './List/List.js';
import Details from './Details/Details.js';

import RootLayout from '../Layouts/RootLayout.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <RootLayout /> }>
      <Route index element={ <Home /> } />
      <Route path="contributors" element={ <List /> } />
      <Route path="details" element={ <Details /> } />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;