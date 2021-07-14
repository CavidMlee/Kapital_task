import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Layout, Card, SideList, SideListElement, FixOverflow, ScrolledArea } from '../components/styled';
import { IProvider, ICategory } from '../models'


interface IProps {
    data: IProvider[]
}


export const Home: React.FC<IProps> = (props) => {


    console.log('props: ', props.data)

    return (
        <React.Fragment>
            {props.data?.map(item => {
                return <Card key={item.id}>{item.name}</Card>
            })}
        </React.Fragment>

    );
}

