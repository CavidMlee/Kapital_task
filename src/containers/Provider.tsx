import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import { Input, CardWrapper, FormItem, Select, Form, Button, SecondButton, ValidationErrorText } from '../components/styled';
import { ICustomField } from '../models';
import { RootState } from '../store';
import { Payment } from '../store/payment'
import validations from '../utils/validation';


interface IProps { }


export const Provider: React.FC<IProps> = () => {
    const [value, setValue] = useState<any>({
        amount: '',
        currency: '',
        number: '',
        exp_month: '',
        exp_year: '',
        cvv: ''
    })

    const [errors, setErrors] = useState<any>({})


    const history = useHistory();
    const dispatch = useDispatch();

    const providerData = useSelector((state: RootState) => state.providerData.providerData);
    const paymentData = useSelector((state: RootState) => state.payment.paymentData)

    useEffect(() => {
        if (providerData?.fields) {
            let inputName = {}
            providerData.fields.map((item: ICustomField) => {
                const { id } = item
                return inputName = { ...inputName, [id]: '' }
            })
            setValue({
                ...value,
                ...inputName
            })
        }

    }, [providerData])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = () => {
        if (!navigator.onLine) {
            toast.error('No Internet Connection', {
                position: "top-right",
                autoClose: 5000,
            });
        }
        else {

            setErrors(validations(value))

            let fieldsObject: Object = {}

            providerData.fields.map((item: ICustomField) => {
                const { id } = item
                return fieldsObject = { ...fieldsObject, id: value[id] }
            })

            if (Object.keys(validations(value)).length < 1) {
                dispatch(Payment({
                    providerId: providerData.id,
                    fields: {
                        ...fieldsObject
                    },
                    amount: {
                        amount: value.amount,
                        currency: value.currency
                    },
                    card: {
                        number: value.number,
                        exp_month: value.exp_month,
                        exp_year: value.exp_year,
                        cvv: value.cvv
                    }
                }))

                history.push('/receipt')
            }
        }
    }


    const fieldType = (item: ICustomField) => {
        const { id, type, options } = item
        switch (type) {
            case 1:
                return <Input name={id} value={value[id] || ''} onChange={(event) => handleChange(event)} />
            case 2:
                return <Input name={id} value={value[id] || ''} type="number" onChange={(event) => handleChange(event)} />
            case 3:
                return <Input name={id} value={value[id] || ''} type="number" onChange={(event) => handleChange(event)} />
            case 4:
                return <Select name={id} value={value[id] || ''} onChange={(event) => handleChange(event)} >
                    <option disabled></option>
                    {options?.map(item => {
                        return <option key={item.k} value={item.v}>{item.v}</option>
                    })}
                </Select>
            case 5:
                return <Input name={item.id} type="datetime-local" value={value[id] || ''} onChange={(event) => handleChange(event)} />
        }
    }


    return (
        <React.Fragment>
            <h1>Payment</h1>
            <CardWrapper>
                <h2>{providerData.name}</h2>
                <Form>
                    {providerData.fields?.map((item: ICustomField) => {
                        const { id, label } = item
                        return (
                            <div key={id}>
                                <FormItem>
                                    <label>{label}</label>
                                    {fieldType(item)}
                                    {errors[id] && <ValidationErrorText>{errors[id]}</ValidationErrorText>}
                                </FormItem>
                            </div>
                        )
                    })}
                    <FormItem>
                        <label>Məbləğ</label>
                        <Input name='amount' value={value.amount || ''} onChange={(event) => handleChange(event)} />
                        {errors.amount && <ValidationErrorText>{errors.amount}</ValidationErrorText>}
                    </FormItem>
                    <FormItem>
                        <label>Valyuta</label>
                        <Select name='currency' value={value.currency || ''} onChange={(event) => handleChange(event)} >
                            <option disabled></option>
                            <option value="AZN">AZN</option>
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                        </Select>
                        {errors.currency && <ValidationErrorText>{errors.currency}</ValidationErrorText>}
                    </FormItem>
                    <FormItem>
                        <label>Kart nömrəsi</label>
                        <Input name="number" value={value.number || ''} onChange={(event) => handleChange(event)} />
                        {errors.number && <ValidationErrorText>{errors.number}</ValidationErrorText>}
                    </FormItem>
                    <FormItem>
                        <label>Ay</label>
                        <Input name="exp_month" value={value.exp_month || ''} onChange={(event) => handleChange(event)} />
                        {errors.exp_month && <ValidationErrorText>{errors.exp_month}</ValidationErrorText>}
                    </FormItem>
                    <FormItem>
                        <label>İl</label>
                        <Input name="exp_year" value={value.exp_year || ''} onChange={(event) => handleChange(event)} />
                        {errors.exp_year && <ValidationErrorText>{errors.exp_year}</ValidationErrorText>}
                    </FormItem>
                    <FormItem>
                        <label>CVV</label>
                        <Input name="cvv" value={value.cvv || ''} onChange={(event) => handleChange(event)} />
                        {errors.cvv && <ValidationErrorText>{errors.cvv}</ValidationErrorText>}
                    </FormItem>
                </Form>
                <SecondButton onClick={() => history.goBack()}>Geri</SecondButton>
                <Button onClick={handleFormSubmit}>Davam et</Button>
            </CardWrapper>
            <ToastContainer />
        </React.Fragment>

    );
}

