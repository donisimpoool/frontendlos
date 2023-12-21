export const UPDATE_SOURCEINCOME = 'UPDATE_SOURCEINCOME'
export const UPDATE_MONTHLYINCOME = 'UPDATE_MONTHLYINCOME'
export const UPDATE_MONTHLYEXPENSE = 'UPDATE_MONTHLYEXPENSE'

export function updateSourceIncome(newSource){
    return{
        type: UPDATE_SOURCEINCOME,
        payload: newSource
    }
}

export function updateMonthlyIncome(monthlyIncome){
    return{
        type: UPDATE_MONTHLYINCOME,
        payload: monthlyIncome
    }
}

export function updateMonthlyExpense(monthlyExpense){
    return{
        type: UPDATE_MONTHLYEXPENSE,
        payload: monthlyExpense
    }
}