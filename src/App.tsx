import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, Provider, Receipt } from './containers'
import { Layout, Card, SideList, FixOverflow, ScrolledArea } from './components/styled';
import { SideListElement } from './components/SideListElement'
import { IProvider, ICategory } from './models';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { CategoryData } from './store/category';
import { ProviderListDataAction } from './store/providerList'
import { RootState } from './store';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App: React.FC = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  let cache: any = localStorage.getItem('AllData');
  console.log(JSON.parse(cache))

  const [selectListItem, setSelectListItem] = useState<number>(0)
  const [netWorkError, setNetworkError] = useState<boolean>(false)

  let categoryData = useSelector((state: RootState) => state.categoryData.categoryData)
  const errorCategory = useSelector((state: RootState) => state.categoryData.error)

  useEffect(() => {
    if (errorCategory) {
      toast.error(errorCategory, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, [errorCategory])

  useLayoutEffect(() => {

    dispatch(CategoryData())

    if (!navigator.onLine) {
      toast.error('No Internet Connection', {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, [])

  useEffect(() => {
    if (categoryData) {
      dispatch(ProviderListDataAction(categoryData[0]?.providers))
    }
  }, [categoryData])

  const onCallProviderList = (item: ICategory, index: number) => {
    dispatch(ProviderListDataAction(item.providers))
    history.push('/')
    setSelectListItem(index)
  }
  console.log('categoryData: ', categoryData)
  return (
    <Layout>
      <SideList>
        {categoryData?.map((item: ICategory, index) => {
          const { name, id } = item
          return (
            <SideListElement index={index} selectindex={selectListItem} key={id} onClick={() => onCallProviderList(item, index)} >{name}</SideListElement>
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
            <Route exact path="/receipt">
              <Receipt />
            </Route>
          </Switch>
        </ScrolledArea>
      </FixOverflow>
      <ToastContainer />
    </Layout>



  );
}

export default App;

