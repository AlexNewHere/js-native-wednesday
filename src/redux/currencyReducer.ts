import { CurrencyReducersTypes } from './actions';



export type CurrencyType = {
    currencyName: string;
    buyRate: number;
    sellRate: number;
};
export type CurrencyState = {
    currencies: Array<CurrencyType>;
    currentCurrency: string;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
};

const initialState: CurrencyState = {
    currencies: [
        {
            currencyName: 'USD',
            buyRate: 2.62,
            sellRate: 2.58,
        },
        {
            currencyName: 'EUR',
            buyRate: 3.1,
            sellRate: 3.06,
        },
        {
            currencyName: 'RUR',
            buyRate: 0.0345,
            sellRate: 0.0341,
        },
    ],
    currentCurrency: 'USD',
    isBuying: true,
    amountOfBYN: '',
    amountOfCurrency: '',
};

export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {

    switch (action.type) {
        case 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE': {
            console.dir(action.payload);
            return {
                ...state


            };
        }
        case 'CurrencyExchange/CHANGE_CHANGE_ACTION': {
            console.log(action.type);
            return {
                ...state,

            };
        }
        case 'CurrencyExchange/CHANGE_CURRENT_CURRENCY': {
            console.log(action.type);
            return {
                ...state


            };
        }

        default:
            return state;
    }
};
