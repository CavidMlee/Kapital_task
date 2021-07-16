import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Card } from '../components/styled';
import { IProvider } from '../models';
import { RootState } from '../store';
import { ProviderDataAction } from '../store/provider'


interface IProps { }


export const Home: React.FC<IProps> = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const providerListData = useSelector((state: RootState) => state.providerListData.providerListData)


    const getProvider = (item: IProvider) => {
        dispatch(ProviderDataAction(item))
        history.push('/provider')
    }
    return (
        <React.Fragment>

            {providerListData?.map(item => {
                return <Card
                    key={item.id}
                    onClick={() => getProvider(item)}
                >
                    {item.name}
                </Card>
            })}
        </React.Fragment>

    );
}

