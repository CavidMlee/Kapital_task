import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './containers'
import axios from 'axios'
import { Layout, Card, SideList, SideListElement, FixOverflow, ScrolledArea } from './components/styled';
import { IProvider, ICategory } from './models';
import {useDispatch,useSelector} from 'react-redux';
import { CategoryData} from './store/category'




const App: React.FC = () => {

  const [data, setData] = useState<ICategory[]>([])
  const [paymentProviders, setPaymentProviders] = useState<IProvider[]>([])

  const dispatch = useDispatch()
  const DAT = useSelector(state=>state)
  console.log('DAT: ',DAT)

  useEffect(() => {
    // axios.get('http://localhost:4000/payment/categories').then(res => setData(res.data))
    dispatch(CategoryData())
  }, [])

  return (
    <Layout>
      <SideList>
        {data?.map(item => {
          const { name, id } = item
          return (
            <SideListElement key={id} onClick={() => setPaymentProviders(item.providers)} >{name}</SideListElement>

          )
        })}
      </SideList>
      <FixOverflow>
        <ScrolledArea>
          <Switch>
            <Route path="/">
              <Home data={paymentProviders} />
            </Route>
            <Route path="/provider">
              
            </Route>
          </Switch>
        </ScrolledArea>
      </FixOverflow>

    </Layout>



  );
}

export default App;

