export const UPDATE_COMPANY = 'UPDATE_COMPANY'
export const UPDATE_COMPANYADDRESS = 'UPDATE_COMPANYADDRESS'

export function updateCompany(newCompany){
    return{
        type: UPDATE_COMPANY,
        payload: newCompany
    }
}

export function updateCompanyAddress(newAddress){
    return{
        type: UPDATE_COMPANYADDRESS,
        payload: newAddress
    }
}