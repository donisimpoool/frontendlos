export const UPDATE_SPOUSE = 'UPDATE_SPOUSE'
export const UPDATE_EMERGENCYCONTACT = 'UPDATE_EMERGENCYCONTACT'
export const UPDATE_FAMILY = 'UPDATE_FAMILY'

export function updateBank(newSpouse){
    return{
        type: UPDATE_SPOUSE,
        payload: newSpouse
    }
}

export function updateCreditCard(newEmergencyContact){
    return{
        type: UPDATE_EMERGENCYCONTACT,
        payload: newEmergencyContact
    }
}

export function updateFamily(newFamily){
    return{
        type: UPDATE_FAMILY,
        payload: newFamily
    }
}