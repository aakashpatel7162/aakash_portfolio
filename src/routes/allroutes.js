import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import paths from './paths';
import Home from '../home/Main';
import Layout from '../layout/Layout';

// Create routes from elements
const allRouter = createRoutesFromElements(
  <>
    <Route element={<Layout />}>
      <Route path={paths.home} element={<Home/>} />
    </Route>
  </>
);

// Create browser router using the routes
const routes = createBrowserRouter(allRouter);
export default routes;
