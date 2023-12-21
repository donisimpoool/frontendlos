import {url} from '../../../config/baseUrl'

export const UPDATE_AUTH = 'UPDATE_AUTH' 
var base64 = require('base-64')

var params = new URLSearchParams({
    username: 'phillip',
    password: 'password1',
    grant_type: 'password'
  })

  let headers = new Headers();
  let client = 'user_client';
  let cPass = 'admin12345';

  headers.append(
    'Authorization', 'Basic ' + base64.encode(client + ':' + cPass)    
  ); 
  headers.append(
    'Content-Type', 'application/x-www-form-urlencoded'
  )

export function apiFetch(){
    return dispatch => {
        fetch(`${url}/oauth/token`, 
        {
            method: 'POST',
            headers: headers,
            body: params
        })
        .then(response => response.json())
        .then(data => {
            console.log("apiFetch", JSON.stringify(data))
            localStorage.setItem('token', data.access_token)
            dispatch(updateAuth(data.access_token))
        }) 
    }
}

export function apiLoan(){
    return dispatch => {
        fetch(`${url}/loan/products/v1/`, 
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+localStorage.getItem('token')
            }, 
        })
        .then(response => response.json())
        .then(data => {
            console.log("apiLoan", JSON.stringify(data)) 
        })
    }
}

export function updateAuth(newAuth){
    return{
        type: UPDATE_AUTH,
        payload: newAuth
    }
} 
