import { useState } from 'react'
import { Card } from './main-page/card/card'
import { useRestaurantData } from './hooks/useRestaurantData'

import './App.css'

function App() {

  //const { data } = useRestaurantData();

  return (
    <div className='container'>
      <div className="header">
        <div className="header-container">
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Products</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
            </nav>
        </div>
      </div>
      <h1>Restaurantes</h1>
      <div className='card-grid'>
        {/* {data?.map(restaurantData => 
          <Card 
            name={restaurantData.name} 
            type_of_kitchen={restaurantData.type_of_kitchen} 
            price_range={restaurantData.price_range} 
            average_rating={restaurantData.average_rating}
          />
        )} */}
        <Card 
          name='Teste' 
          image='https://imgs.search.brave.com/QMwu9rWJwSCjATBPZ9QIIqcPZaX1VVKrNNc6nm2d_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhamFsaS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvcmVzdGF1/cmFudGVzLXBvcnRv/LWFsZWdyZS0xMi5w/bmc'
          type_of_kitchen='Japonese'
          min_price={100}
          max_price={200}
          average_rating={4.7}
        />
        <Card 
          name='Teste' 
          image='https://imgs.search.brave.com/QMwu9rWJwSCjATBPZ9QIIqcPZaX1VVKrNNc6nm2d_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhamFsaS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvcmVzdGF1/cmFudGVzLXBvcnRv/LWFsZWdyZS0xMi5w/bmc'
          type_of_kitchen='Japonese'
          min_price={100}
          max_price={200}
          average_rating={4.7}
        />
        <Card 
          name='Teste' 
          image='https://imgs.search.brave.com/QMwu9rWJwSCjATBPZ9QIIqcPZaX1VVKrNNc6nm2d_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhamFsaS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvcmVzdGF1/cmFudGVzLXBvcnRv/LWFsZWdyZS0xMi5w/bmc'
          type_of_kitchen='Japonese'
          min_price={100}
          max_price={200}
          average_rating={4.7}
        />
        <Card 
          name='Teste' 
          image='https://imgs.search.brave.com/QMwu9rWJwSCjATBPZ9QIIqcPZaX1VVKrNNc6nm2d_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhamFsaS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvcmVzdGF1/cmFudGVzLXBvcnRv/LWFsZWdyZS0xMi5w/bmc'
          type_of_kitchen='Japonese'
          min_price={100}
          max_price={200}
          average_rating={4.7}
        />
        <Card 
          name='Teste' 
          image='https://imgs.search.brave.com/QMwu9rWJwSCjATBPZ9QIIqcPZaX1VVKrNNc6nm2d_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhamFsaS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvcmVzdGF1/cmFudGVzLXBvcnRv/LWFsZWdyZS0xMi5w/bmc'
          type_of_kitchen='Japonese'
          min_price={100}
          max_price={200}
          average_rating={4.7}
        />
        <Card 
          name='Teste' 
          image='https://imgs.search.brave.com/QMwu9rWJwSCjATBPZ9QIIqcPZaX1VVKrNNc6nm2d_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhamFsaS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvcmVzdGF1/cmFudGVzLXBvcnRv/LWFsZWdyZS0xMi5w/bmc'
          type_of_kitchen='Japonese'
          min_price={100}
          max_price={200}
          average_rating={4.7}
        />
        <Card 
          name='Teste' 
          image='https://imgs.search.brave.com/QMwu9rWJwSCjATBPZ9QIIqcPZaX1VVKrNNc6nm2d_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhamFsaS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvcmVzdGF1/cmFudGVzLXBvcnRv/LWFsZWdyZS0xMi5w/bmc'
          type_of_kitchen='Japonese'
          min_price={100}
          max_price={200}
          average_rating={4.7}
        />
        <Card 
          name='Teste' 
          image='https://imgs.search.brave.com/QMwu9rWJwSCjATBPZ9QIIqcPZaX1VVKrNNc6nm2d_3c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlhamFsaS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDcvcmVzdGF1/cmFudGVzLXBvcnRv/LWFsZWdyZS0xMi5w/bmc'
          type_of_kitchen='Japonese'
          min_price={100}
          max_price={200}
          average_rating={4.7}
        />
      </div>
    </div>
  )
}

export default App

/* APP Default
<>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
*/