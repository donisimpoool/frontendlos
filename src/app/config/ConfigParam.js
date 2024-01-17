import {auth, keyset} from "./baseUrl";
import {DecrypsCode} from "./Encrypt";

export var keyToken = "token";
export var sizefileinbyte = 2000 //1024 bytes = 1 KB, 1024 KB = 1 MB
export var sizefont = 23
export var Speedometerwidth = 255
export var Speedometerheight = 155
export var ColumnSpeedometerwidth = Speedometerwidth+10;
export var ColumnSpeedometerheight = Speedometerheight - 150;

export var headers = {
        'Platform-CreditScoring':'',
        'Authorization': auth,
        'content-type': 'application/json'
}

// export var header = {
//         'Authorization': localStorage.getItem(keyToken),
//         'Accept': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
// }
export const header = () =>{
  return  {'Authorization': localStorage.getItem(keyToken),
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',}
}

export const handleAuth = (param) =>{
        let token = param.token;
        localStorage.setItem(keyToken,token);
}

function getstorage() {
    const session = localStorage.getItem(keyset);
    var value = ''
    if(session){
        //     value = JSON.parse(DecrypsCode(localStorage.getItem(keyset))).companyid+"-"+JSON.parse(DecrypsCode(localStorage.getItem(keyset))).idtable
    }
    return value
}