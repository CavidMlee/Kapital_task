import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { CardWrapper, Button, SecondButton } from '../components/styled';
import { ReceiptItems } from '../components/ReceiptItem'
import { RootState } from '../store';

interface IProps { }


export const Receipt: React.FC<IProps> = () => {
    const history = useHistory()

    const paymentData = useSelector((state: RootState) => state.payment.paymentData)


    return (
        <React.Fragment>
            <h1>Receipt</h1>
            <CardWrapper>
                {paymentData?.details?.map(item => {
                    const { k, v } = item
                    return <ReceiptItems key={k} name={k} value={v} />
                })}
                <ReceiptItems name='Amount' value={paymentData?.amount?.value} />
                <ReceiptItems name='Currency' value={paymentData?.amount?.currency} />
                <ReceiptItems name='Date' value={paymentData.date} />

                <SecondButton onClick={() => history.goBack()}>Geri</SecondButton>
                <Button onClick={() => { history.push('/') }}>Əsas Səifə</Button>
            </CardWrapper>
        </React.Fragment>
    )
}