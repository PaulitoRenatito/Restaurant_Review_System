import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RestaurantInfoPage from './pages/restaurant-info-page/RestaurantInfo.tsx';
import MainPage from './pages/main-page/MainPage.tsx';
import LoginPage from './pages/login-page/LoginPage.tsx';
import RegisterPage from './pages/register-page/RegisterPage.tsx';

import './index.css'
import HeaderAndFooter from './components/header-footer/HeaderFooter.tsx';
import { UserProvider } from './context/UserContext.tsx';
import { RestaurantProvider } from './context/RestaurantContext.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />
  },
  {
    path: "/registerpage",
    element: <RegisterPage />
  },
  {
    path: "/main",
    element: <MainPage />
  },
  {
    path: "/restaurant-info",
    element: <RestaurantInfoPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='container'>
        <HeaderAndFooter>
          <div className='main-body'>
            <UserProvider>
              <RestaurantProvider>
                <RouterProvider router={router} />
              </RestaurantProvider>
            </UserProvider>
          </div>
        </HeaderAndFooter>
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
