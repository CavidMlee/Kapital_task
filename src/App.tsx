import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import { Layout, Card } from './components/styled.ts'


function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/payment/categories').then(res => setData(res.data))
  }, [])

  return (
    <Layout>
      <div>
        {data?.map(item => {
          const { name, id } = item
          return (
            <div key={id}>{name}</div>
          )
        })}
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => {
        return <Card></Card>
      })}

    </Layout>
  );
}

export default App;
