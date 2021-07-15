import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Input, CardWrapper, FormItem, Select, Form, Button, SecondButton } from '../components/styled';
import { IProvider, ICategory, ICustomField } from '../models';
import { RootState } from '../store'


interface IProps { }


export const Provider: React.FC<IProps> = () => {
    const history = useHistory()

    const providerData = useSelector((state: RootState) => state.providerData.providerData)

    console.log('providerData: ', providerData)

    const fieldType = (item: ICustomField) => {
        switch (item.type) {
            case 1:
                return <Input name={item.id} />
                break;
            case 2:
                return <Input name={item.id} />
                break;
            case 3:
                return <Input name={item.id} />
                break;
            case 4:
                return <Select name={item.id}>
                    {item.options?.map(item => {
                        return <option key={item.k} value={item.v}>{item.v}</option>
                    })}
                </Select>
                break;
            case 5:
                return <Input name={item.id} />
                break;
        }
    }

    return (
        <React.Fragment>
            <h1>Payment</h1>
            <CardWrapper>
                <h2>{providerData.name}</h2>
                <Form>
                    {providerData.fields?.map((item: ICustomField) => {
                        return (
                            <div key={item.id}>
                                <FormItem>
                                    <label>{item.label}</label>
                                    {fieldType(item)}
                                </FormItem>
                            </div>
                        )
                    })}
                    <FormItem>
                        <label>Məbləğ</label>
                        <Input />
                    </FormItem>
                    <FormItem>
                        <label>Valyuta</label>
                        <Select>
                            <option value="AZN">AZN</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </Select>
                    </FormItem>
                    <FormItem>
                        <label>Kart nömrəsi</label>
                        <Input name="number" />
                    </FormItem>
                    <FormItem>
                        <label>Ay</label>
                        <Input name="exp_month" />
                    </FormItem>
                    <FormItem>
                        <label>İl</label>
                        <Input name="exp_year" />
                    </FormItem>
                    <FormItem>
                        <label>CVV</label>
                        <Input name="cvv" />
                    </FormItem>
                </Form>
                <SecondButton onClick={() => history.goBack()}>Geri</SecondButton>
                <Button>Davam et</Button>
            </CardWrapper>
        </React.Fragment>

    );
}

