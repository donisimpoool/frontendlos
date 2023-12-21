export const UPDATE_MAINADDRESS = 'UPDATE_MAINADDRESS'
export const UPDATE_ADDITIONALADDR = 'UPDATE_ADDITIONALADDR'

export function updateAddress(newAddress){
    return{
        type: UPDATE_MAINADDRESS,
        payload: newAddress
    }
}

export function updateAdditionalAddress(newAdditional){
    return{
        type: UPDATE_ADDITIONALADDR,
        payload: newAdditional
    }
}