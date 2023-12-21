export const UPDATE_PERSONAL = 'UPDATE_PERSONAL'

export function postPersonal(params){
    return dispatch => {
        dispatch(updatePersonal(params));
    }
}

export function updatePersonal(newPersonal){
    return{
        type: UPDATE_PERSONAL,
        payload: newPersonal
    }
} 