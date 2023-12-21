import { POST_APP } from '../actions/allActions'
import { UPDATE_LOAN } from '../actions/loanActions'
import { UPDATE_PERSONAL } from '../actions/personalActions'
import { UPDATE_MAINADDRESS } from '../actions/addressAction'
import { UPDATE_COMPANY, UPDATE_COMPANYADDRESS } from '../actions/businessAction'
import { UPDATE_BANK, UPDATE_CREDITCARD } from '../actions/bankAction'
import { UPDATE_FAMILY} from '../actions/familyAction'
import { UPDATE_SOURCEINCOME } from '../actions/financialAction'
import { UPDATE_COLLATERAL } from '../actions/collateralAction'

const initialState = {
    // addressList: [
    //     { 
    //       city: "string",
    //       collateralUse: true,
    //       collateralYearEnd: 0,
    //       currentAddress: "string",
    //       district: "string",
    //       lat: 0,
    //       lon: 0,
    //       mainAddress: true,
    //       postalCode: "string",
    //       province: "string",
    //       usedYearEnd: 0,
    //       usedYearSince: 0
    //     }
    // ],
    // bank: {
    //     account: {
    //       accountNumber: "string",
    //       accountType: "string",
    //       bankId: 1,
    //       nameOfBank: "string"
    //     },
    //     creditCardList: [
    //       {
    //         creditCardNo: "string",
    //         issuer: "string",
    //         type: "string"
    //       }
    //     ]
    // },
    // business: {
    //   businessIndustry: "string",
    //   companyAddress: {
    //     city: "string",
    //     currentAddress: "string",
    //     district: "string", 
    //     postalCode: "15345",
    //     province: "string"
    //   },
    //   companyName: "string",
    //   division: "string",
    //   employmentkDuration: 0,
    //   position: "string",
    //   totalNoEmployees: 0
    // },
    // family: {
    //     emergencyAddress: {
    //       city: "string",
    //       currentAddress: "string",
    //       district: "string", 
    //       postalCode: "string",
    //       province: "string"
    //     },
    //     emergencyContactMobile: "string",
    //     emergencyContactPersonName: "string",
    //     numOfDep: 0,
    //     spouseDateOfBirth: "2019-07-24T02:47:28.965Z",
    //     spouseIdNum: "string",
    //     spouseIdType: "string",
    //     spouseMobile: "string",
    //     spouseName: "string",
    //     spousePlaceOfBirth: "string"
    // },
    // finance: [
    //     {
    //       incomeSource: "string",
    //       monthlyExpense: {
    //         currency: "string",
    //         value: 0
    //       },
    //       monthlyIncome: {
    //         currency: "string",
    //         value: 0
    //       }
    //     }
    // ],
    // loan: {},
    draft: false,
    // personal: {
    //     dateOfBirth: "",
    //     education: "",
    //     email: "",
    //     fullName: "",
    //     gender: "M",
    //     houseLocation: "",
    //     houseOwnership: "",
    //     idNum: "",
    //     idType: "",
    //     landlinePhone: "",
    //     maritalStatus: "",
    //     mobile: "",
    //     numOfOwnedProperties: 0,
    //     placeOfBirth: "",
    //     vehicle: ""
    // }
}

export default function allReducer(state=initialState, action){

    switch(action.type){
        case POST_APP:
            return{
                ...state,
                draft: false
            }
        case UPDATE_LOAN:
            return{
                ...state,
                loan: action.payload
            }
        case UPDATE_PERSONAL:
            return{
                ...state,
                personal: action.payload
            }
        case UPDATE_MAINADDRESS:
            return{
                ...state,
                addressList: action.payload
            }
        case UPDATE_COMPANY:
            return{
                ...state,
                business: {
                    ...state.business,
                    ...action.payload,
                    // companyAddress: {...state.business.companyAddress}
                }
            }
        case UPDATE_COMPANYADDRESS:
            return{
                ...state,
                business: {
                    ...state.business,
                    companyAddress: action.payload
                }
            }
        case UPDATE_BANK:
            return{
                ...state,
                bank: {
                    ...state.bank,
                    account: action.payload
                }
            }
        case UPDATE_CREDITCARD:
            return{
                ...state,
                bank: {
                    ...state.bank,
                    creditCardList: action.payload
                }
            }
        case UPDATE_FAMILY:
            return{
                ...state,
                family: action.payload
            } 
        case UPDATE_SOURCEINCOME:
            return{
                ...state,
                finance: action.payload
            }
        case UPDATE_COLLATERAL:
            return{
                ...state,
                collateralList: action.payload
            }
        default: return state
    }
}