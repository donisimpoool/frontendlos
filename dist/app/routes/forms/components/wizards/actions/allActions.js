export const POST_APP = 'POST_APP'

export function postApp(postApp){
    return{
        type: POST_APP,
        payload: postApp
    }
} 