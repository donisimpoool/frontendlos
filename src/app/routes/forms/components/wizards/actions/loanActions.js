import {createapp, keyset, url} from '../../../../../config/baseUrl'
import {filedocument} from "../step/Document";
import {filedocumentVehicle} from "../CollateralVehicle";
import {filedocumentRealEstate} from "../CollateralRealEstate";
import {filedocumentbank} from "../CollateralBank";
import {suburlcreateapp,suburlmultiplefile} from "../../../../../config/baseUrl";
import {info} from "../../../../auth/containers/Login";
import {msglimitfile} from "../../../../../config/KosaKata";
import {convertByteToMB} from "../../../../../config/FunctionGlobal";
import {DecrypsCode} from "../../../../../config/Encrypt";
import {header, headers} from "../../../../../config/ConfigParam";

export const UPDATE_LOAN = 'UPDATE_LOAN'

    export function add(x, y) {
        if(x == 1){
            return {
                'id': '1',
                'name': 'Skyscanner',
                'description': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr ',
                'image': 'skyscanner.png',

            }
        }else{
            return {
                'id': '2',
                'name': 'Momondo',
                'description': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr  ',
                'image': 'monondo.jpg',

            }
        }
        // return x + y
    }

    export var data = [
        {
            'id': '1',
            'name': 'Skyscanner',
            'description': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr ',
            'image': 'skyscanner.png',

        },
        {
            'id': '2',
            'name': 'Momondo',
            'description': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr  ',
            'image': 'monondo.jpg',

        },
        {
            'id': '3',
            'name': 'Skypicker',
            'description': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr ',
            'image': 'Skypicker.jpg',

        },
        {
            'id': '4',
            'name': 'Atob',
            'description': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr  ',
            'image': 'Atob.jpg',

        },
        {
            'id': '5',
            'name': 'flipper',
            'description': 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr ',
            'image': 'flipper.jpg',

        },

    ];
export function listapplicationloann(){
    var paramloan1 = [
        {
            "id": 1,
            "loanProduct": "loan1",
            "loanAmount": 7827000,
            "loanCreatedDate": "2019-07-10",
            "waitingTime": "temp",
            "status": "temp",
            "purposeOfLoan": "Purchase Vehicle",
            "fullName": "Flunone Yutt",
            "mobilePhone": "081271638352",
            "placeOfBirth": "Bandung",
            "gender": "female",
            "idType": "KTP",
            "education": "D3",
            "maritalStatus": "Widow",
            "email": "flun1one@gmail.com",
            "province": "Sumatera Barat",
            "city": "Pariaman",
            "speedscore" : "600"
        }
    ]
    return paramloan1;
}
export function postLoan(params,paramsfile) {
    // var size = 0;
    // if (paramsfile.filedoc.length > 0) {
    //     size += paramsfile.totalsize
    // }
    // if (filedocumentRealEstate.filedoc.length > 0) {
    //     size += filedocumentRealEstate.totalsize
    // }
    // if (filedocumentVehicle.filedocvehicle.length > 0) {
    //     size += filedocumentVehicle.totalsize
    // }
    // if (filedocumentbank.filedoc.length > 0) {
    //     size += filedocumentbank.totalsize
    // }
    // var totalSizeKB = size / Math.pow(1024,1)
    // var totalSizeMB = convertByteToMB(size);//size / Math.pow(1024,2)
    // var totalSizeGB = size / Math.pow(1024,3)
    // var sizefile = JSON.parse(DecrypsCode(localStorage.getItem(keyset))).sizefile
    // if (sizefile > totalSizeMB) {
        var url = createapp;
        fetch(url,
            {
                method: 'POST',
                headers: header(),
                body: JSON.stringify(params)
            }
            )
            .then(response => response.json())
            .then(respon => {
            })
                // uploadFile(paramsfile, respon.data.applicationid, 'appdocument')
                // if (filedocumentVehicle.filedocvehicle.length > 0) {
                //     var parms = {
                //         'filedoc': filedocumentVehicle.filedocvehicle,
                //         'description': ''
                //     }
                //     uploadFile(parms, respon.data.applicationid, 'colvehicle')
                // }
                // if (filedocumentRealEstate.filedoc.length > 0) {
                //     var parms = {
                //         'filedoc': filedocumentRealEstate.filedoc,
                //         'description': ''
                //     }
                //     uploadFile(parms, respon.data.applicationid, 'colrealestate')
                // }
                // if (filedocumentbank.filedoc.length > 0) {
                //     var parms = {
                //         'filedoc': filedocumentbank.filedoc,
                //         'description': ''
                //     }
                //     uploadFile(parms, respon.data.applicationid, 'colbank')
                // }
            // })
    // return dispatch => {
        
    // }
// }else{
//         alert(msglimitfile(sizefile));
//     }
}

export function uploadFile(params,applicationid,docfor){
    // return dispatch => {
        var filedocument = params;
        var url = suburlmultiplefile;
        const formData = new FormData();
        for(var i=0; i < filedocument.filedoc.length; i++) {
            formData.append('file', filedocument.filedoc[i], filedocument.filedoc[i].name);
        }
        formData.append('description', filedocument.description);
        formData.append('applicationid', applicationid);
        formData.append('docfor', docfor);
        fetch(url,
            {
                method: 'POST',
                body: formData,
                headers: headers,
            })
        // .then(dispatch(updateLoan(params)))
            .then(response => console.log('POSTED uploadFile', response.status))
        // console.log('LOAN POSTED', params)
    // }
}

export function postData(params){
    return dispatch => {
        fetch(`${url}/loan/application/v1/apply`, 
        {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        // .then(dispatch(updateLoan(params)))
        .then(response => console.log('LOAN SUBMITTED', response.status))
        // console.log('LOAN POSTED', params)
    }
}

export function getApplicants(){
    return dispatch => {
        fetch(`${url}/loan/application/v1/applicant-list`, 
        {
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+localStorage.getItem('token')
            }, 
        })
        .then(reponse => reponse.json())
        .then(appList => {
            console.log(appList)
        //   JSON.stringify(posts) 
        //   this.setState({posts: posts})
        })
    }
}

export function updateLoan(newLoan){
    return{
        type: UPDATE_LOAN,
        payload: newLoan
    }
} 