import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Input, CardWrapper, FormItem, Select, Form, Button, SecondButton, ValidationErrorText } from '../components/styled';
import { ReceiptItems } from '../components/ReceiptItem'
import { IProvider, ICategory, ICustomField } from '../models';
import { RootState } from '../store';

interface IProps { }

interface IDetails {
    k: string,
    v: string | number
}

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
                <Button onClick={() => { history.push('/')}}>Əsas Səifə</Button>
            </CardWrapper>
        </React.Fragment>
    )
}