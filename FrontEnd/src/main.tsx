import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RestaurantInfoPage from './pages/restaurant-info-page/RestaurantInfo.tsx';
import MainPage from './pages/main-page/MainPage.tsx';
import LoginPage from './pages/login-page/LoginPage.tsx';
import RegisterPage from './pages/register-page/RegisterPage.tsx';

import './index.css'
import HeaderAndFooter from './components/header-footer/HeaderFooter.tsx';
import { UserProvider } from './context/UserContext.tsx';
import { RestaurantProvider } from './context/RestaurantContext.tsx';
import UserInfoPage from './pages/user-info-page/UserInfo.tsx';

const queryClient = new QueryClient();

interface ContainerProps {
  children: ReactNode;
}
const Container = ({ children }: ContainerProps) => <div className='container'>{children}</div>;

interface MainBodyProps {
  children: ReactNode;
}
const MainBody = ({ children }: MainBodyProps) => <div className='main-body'>{children}</div>;

const AppRoutes = () => (
  <Routes>
    <Route path='/' element={<LoginPage />} />
    <Route path='/registerpage' element={<RegisterPage />} />
    <Route path='/main' element={<MainPage />} />
    <Route path='/restaurant-info' element={<RestaurantInfoPage />} />
    <Route path='/user-info' element={<UserInfoPage />} />
  </Routes>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Container>
          <HeaderAndFooter>
            <MainBody>
              <UserProvider>
                <RestaurantProvider>
                  <AppRoutes />
                </RestaurantProvider>
              </UserProvider>
            </MainBody>
          </HeaderAndFooter>
        </Container>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
