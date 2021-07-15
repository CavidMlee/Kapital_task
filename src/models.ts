export interface ICard {
    number: string,
    exp_month: string,
    exp_year: string,
    cvv: string,
}

export interface IPair<K, V> {
    k: K;
    v: V;
}

export interface IAmount {
    value: string,
    currency: string,
}

export interface IReceipt {
    id: string,
    date: string,
    details: IPair<string | number, any>[],
    amount: IAmount
}

export interface ICustomField {
    id: string,
    type: number,
    label: string,
    options?: IPair<string | number, any>[]
}

export interface IProvider {
    id: string,
    name: string,
    fields: ICustomField[]
}

export interface ICategory {
    id: string,
    name: string,
    providers: IProvider[]
}