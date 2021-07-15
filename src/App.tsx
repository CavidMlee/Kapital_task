import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, Provider } from './containers'
import axios from 'axios'
import { Layout, Card, SideList, SideListElement, FixOverflow, ScrolledArea } from './components/styled';
import { IProvider, ICategory } from './models';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryData } from './store/category';
import { ProviderListDataAction } from './store/providerList'
import { RootState } from './store'




const App: React.FC = () => {

  const [paymentProviders, setPaymentProviders] = useState<IProvider[]>([])


  const dispatch = useDispatch()
  const categoryData = useSelector((state: RootState) => state.categoryData.categoryData)

  useEffect(() => {
    dispatch(CategoryData())
  }, [])

  return (
    <Layout>
      <SideList>
        {categoryData?.map(item => {
          const { name, id } = item
          return (
            <SideListElement key={id} onClick={() => dispatch(ProviderListDataAction(item.providers))} >{name}</SideListElement>
          )
        })}
      </SideList>
      <FixOverflow>
        <ScrolledArea>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/provider">
              <Provider />
            </Route>
          </Switch>
        </ScrolledArea>
      </FixOverflow>

    </Layout>



  );
}

export default App;

