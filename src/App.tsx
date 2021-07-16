import React, { useEffect, useState } from 'react';
import { Router } from './router'
import { Layout, Button, SideList, FixOverflow, ScrolledArea } from './components/styled';
import { SideListElement } from './components/SideListElement'
import { ICategory } from './models';
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

  const [selectListItem, setSelectListItem] = useState<number>(0)
  const [reload, setReload] = useState<boolean>(false)

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

  useEffect(() => {

    dispatch(CategoryData())

    history.push('/')

    if (!navigator.onLine) {
      toast.error('No Internet Connection', {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, [reload])

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
          {!localStorage.getItem('AllData') && <Button onClick={() => setReload(!reload)}>Tap to reload</Button>}
          <Router />
        </ScrolledArea>
      </FixOverflow>
      <ToastContainer />
    </Layout>



  );
}

export default App;

