export const UPDATE_VEHICLE = 'UPDATE_VEHICLE'
export const UPDATE_REALESTATE = 'UPDATE_REALESTATE'
export const UPDATE_DEPOSIT = 'UPDATE_DEPOSIT'
export const UPDATE_COLLATERAL = 'UPDATE_COLLATERAL'

export function updateVehicle(newVehicle){
    return{
        type: UPDATE_VEHICLE,
        payload: newVehicle
    }
}

export function updateRealEstate(newRealEstate){
    return{
        type: UPDATE_REALESTATE,
        payload: newRealEstate
    }
}

export function updateDeposit(newDeposit){
    return{
        type: UPDATE_DEPOSIT,
        payload: newDeposit
    }
}

export function updateCollateral(newCollateral){
    return{
        type: UPDATE_COLLATERAL,
        payload: newCollateral
    }
}