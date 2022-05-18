export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

export type ChangeCurrencyFieldType = {
    type: string
    payload: {
        amountOfBYN: string
        amountOfCurrency: string
    }
};

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload: {
            amountOfBYN,
            amountOfCurrency,
        }
    }
};

export type ChangeAction = {
    type: string
    payload: {
        isBuying: boolean
    }
};

export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return {
        type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        payload: {
            isBuying,
        }
    }
};

export type ChangeCurrentCurrencyType = {
    type: string
    payload: {
        currentCurrency: string
    }
};

export const СhangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        payload: {
            currentCurrency,
        }
    }
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;