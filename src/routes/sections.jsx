import { lazy, Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

export const Dashboard = lazy(() => import('../pages/dashboard'));
export const Login = lazy(() => import('../pages/login'));
export const Signin = lazy(() => import('../pages/signin'));
export const Purchase = lazy(() => import('../pages/purchase'));
export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      ),
      children: [
        { element: <Dashboard />, index: true },
        { path: 'login', element: <Login /> },
        { path: 'signin', element: <Signin /> },
        { path:'purchase', element: <Purchase />},
      ],
    },
  ]);

  return routes;
}