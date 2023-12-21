export const UPDATE_BANK = 'UPDATE_BANK'
export const UPDATE_CREDITCARD = 'UPDATE_CREDITCARD'

export function updateBank(newBank){
    return{
        type: UPDATE_BANK,
        payload: newBank
    }
}

export function updateCreditCard(newCC){
    return{
        type: UPDATE_CREDITCARD,
        payload: newCC
    }
}