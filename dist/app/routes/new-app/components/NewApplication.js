import React from 'react' 

import {connect} from 'react-redux'
import {postApp} from '../../forms/components/wizards/actions/allActions'
import {updateLoan, postLoan, postData,uploadFile} from '../../forms/components/wizards/actions/loanActions'
import {updatePersonal} from '../../forms/components/wizards/actions/personalActions'
import {updateAddress} from '../../forms/components/wizards/actions/addressAction'
import {updateCompany, updateCompanyAddress} from '../../forms/components/wizards/actions/businessAction'
import {updateBank, updateCreditCard} from '../../forms/components/wizards/actions/bankAction'
import {updateSourceIncome, updateMonthlyIncome, updateMonthlyExpense} from '../../forms/components/wizards/actions/financialAction'
import {updateFamily} from '../../forms/components/wizards/actions/familyAction'
import {updateCollateral} from '../../forms/components/wizards/actions/collateralAction'

import BigBreadcrumbs from '../../../components/navigation/components/BigBreadcrumbs'  
import BasicWizardWidget from '../../forms/components/wizards/BasicWizardWidget';
import {loanvalue} from "../../forms/components/wizards/step/Loan";
import {personelvalue} from "../../forms/components/wizards/step/Personal";
import {Addressvalue} from "../../forms/components/wizards/step/Address";
import {Addressvalue2} from "../../forms/components/wizards/step/Address2";
import {familyvalue} from "../../forms/components/wizards/step/Family";
import {businessvalue} from "../../forms/components/wizards/step/Business";
import {financialvalue} from "../../forms/components/wizards/step/Financial";
import {bankvalue} from "../../forms/components/wizards/step/Bank";
import {collateralvalue} from "../../forms/components/wizards/step/SelectCollateral";
import {filedocument} from "../../forms/components/wizards/step/Document";
import {valueCollateralRealEstate} from "../../forms/components/wizards/CollateralRealEstate";
import {idcity,idcity2,idcity3,idcity4} from "../../forms/components/wizards/Type/TypeCity";
import {idkec,idkec2,idkec3,idkec4,idkelurahan} from "../../forms/components/wizards/Type/typeDistrict";
import {valueColleteralVehicle} from "../../forms/components/wizards/CollateralVehicle";
import {brandid,transmisionid} from "../../forms/components/wizards/TypeVehicle";
import {modeilid} from "../../forms/components/wizards/ModelVehicle";
import {valuecollateraldeposit} from "../../forms/components/wizards/CollateralBank";
import {creditcardvalue} from "../../forms/components/wizards/step/CreditCard";
import LanguageStore from "../../../components/i18n/LanguageStore";
import {keyset} from "../../../config/baseUrl";
import {info} from "../../auth/containers/Login";
import {DecrypsCode} from "../../../config/Encrypt";

var appid=""
class NewApplication extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        listkelurahan:[],
      marital_status: null,
      valueCC: false,
      all: {
        loan: {
          loanProductId: "Empty",
          purpose: "Empty",
          loanAmount: {
            value: 0,
            currency: "IDR"
          },
          tenor: "Empty"
        },
          loannew: {
              loanProductId: "tesid2",
              name: "nametes",
              description:"descriptiontes1",
              businessFilterId:1,
              creditScoreId:1,
              hasCollateral:true,
              annualInterestRate:2.0
              // loanAmount: {
              //     value: 0,
              //     currency: "IDR"
              // },
              // tenor: "Empty"
          },
        personal: {
            dateOfBirth: "Empty",
            education: "Empty",
            email: "Empty",
            fullName: "Empty",
            gender: "Empty",
            houseLocation: "Empty",
            houseOwnership: "Empty",
            idNum: "Empty",
            idType: "Empty",
            landlinePhone: "Empty",
            maritalStatus: "Empty",
            mobile: "Empty", 
            placeOfBirth: "Empty",
            vehicle: "Empty"
        },
        addressMain: {
            city: "Empty", 
            collateralYearEnd: "Empty",
            currentAddress: "Empty",
            district: "Empty",  
            postalCode: "Empty",
            province: "Empty",
            usedYearEnd: "Empty",
            usedYearSince: "Empty"
        },
        addressAdditional: {
            city: "Empty", 
            collateralYearEnd: "Empty",
            currentAddress: "Empty",
            district: "Empty",  
            postalCode: "Empty",
            province: "Empty",
            usedYearEnd: "Empty",
            usedYearSince: "Empty"
        },
        family: {
            emergencyAddress: {
              city: "Empty",
              currentAddress: "Empty",
              district: "Empty", 
              postalCode: "Empty",
              province: "Empty"
            },
            emergencyContactMobile: "Empty",
            emergencyContactPersonName: "Empty", 
            spouseDateOfBirth: "Empty",
            spouseIdNum: "Empty",
            spouseIdType: "Empty",
            spouseMobile: "Empty",
            spouseName: "Empty",
            spousePlaceOfBirth: "Empty"
        },
        business: {
          businessIndustry: "Empty",
          companyAddress: {
            city: "Empty",
            currentAddress: "Empty",
            district: "Empty", 
            postalCode: "Empty",
            province: "Empty"
          },
          companyName: "Empty",
          division: "Empty",
          employmentkDuration: "Empty",
          position: "Empty",
          totalNoEmployees: "Empty"
        },
        finance: [{
            incomeSource: "Empty",
            monthlyExpense: {
                currency: "Empty",
                value: "Empty"
            },
            monthlyIncome: {
                currency: "Empty",
                value: "Empty"
            }
        }],
        bank: {
            account: {
                accountNumber: "Empty",
                accountType: "Empty", 
                nameOfBank: "Empty"
            },
            creditCardList:[
            {
                creditCardNo: "Empty",
                issuer: "Empty",
                type: "Empty"
            }]
        },
        collateral: {
            collateralTypeId: 0
        }
      },
        allvalue:{
          loanvalue:{},
            personelvalue:{},
            Addressvalue:{},
            Addressvalue2:{},
            familyvalue:{},
            businessvalue:{},
            financialvalue:{},
            bankvalue:{},
            collateralvalue:{},
        }

    }
  }

  componentDidMount(){
      const session = localStorage.getItem(keyset);
      if(session){
      }
      else{
          window.location.href = "/#/login";
      }
      // var url = `http://localhost:8080/province/v1/getlistkelurahan`;
      // const otherPram={
      //     method:"GET",
      //     headers:{
      //         'content-type': 'application/json'
      //     }
      // }
      //
      // fetch(url,otherPram)
      //     .then(response => response.json())
      //     .then(json =>
      //         // console.log(json.data)
      //         this.setState({listkelurahan: json.data})
      //     )
  }

  onChangeCreditCard(e){
    console.log("Bank",e.target.value)
    if(e.target.value==1)
        this.setState({
            valueCC: true
        });
    else {
        this.setState({
            valueCC: false
        });
    }
}

  onSaveDraft(){
      var value = this.state.allvalue;
      Addressvalue.idregencies = idcity;
      Addressvalue.iddistrict = idkec;
      Addressvalue.idvillage = idkelurahan

      Addressvalue2.idregencies = idcity2;
      Addressvalue2.iddistrict = idkec2;

      businessvalue.idregencies = idcity3;
      businessvalue.iddistrict = idkec3;

      valueCollateralRealEstate.regenciesid = idcity4;
      valueCollateralRealEstate.districtid = idkec4;

      valueColleteralVehicle.brand = brandid
      valueColleteralVehicle.typetransmision = transmisionid;
      valueColleteralVehicle.model = modeilid;

      value.loanvalue = loanvalue;
      value.personelvalue = personelvalue;
      value.Addressvalue = Addressvalue;
      value.Addressvalue2 = Addressvalue2;
      value.familyvalue = familyvalue;
      value.businessvalue = businessvalue;
      value.financialvalue = financialvalue;
      value.bankvalue = bankvalue;
      value.collateralvalue = collateralvalue;
      this.setState(value);
      var paramloan = {
          applicationID:appid,
          status:"OPEN",
          score:0,
          isdraft:"Y",
          createdby:JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id,
          appLoan:this.state.allvalue.loanvalue,
          appPersonel:this.state.allvalue.personelvalue,
          appAddress1:this.state.allvalue.Addressvalue,
          appAddress2:this.state.allvalue.Addressvalue2,
          appFamily:this.state.allvalue.familyvalue,
          appBusiness:this.state.allvalue.businessvalue,
          appFinancial:this.state.allvalue.financialvalue,
          appBank:this.state.allvalue.bankvalue,
          appCollateral:this.state.allvalue.collateralvalue,
          appCollateralRealEstate:valueCollateralRealEstate,
          appCollateralVehicle:valueColleteralVehicle,
          appCollateralDeposit:valuecollateraldeposit,
          creditcard:creditcardvalue
      }
      appid=""
    this.props.loanPost(paramloan,filedocument);
      window.location.href = "/#/application";
    // this.props.fileuploadlos(filedocument.filedoc);
  }

  onSubmitData(){
    console.log("ON SUBMIT", this.props.all) 
    this.props.dataPost(this.props.all);
  }

  onHandleMaritalStatus(e){
    this.setState({
      marital_status: e
    })
  }

  onGetData(){ 
    this.setState(prevState =>({
      all: {
        ...prevState.all,
        loan: {
          ...prevState.all.loan,
          ...this.props.all.loan,
        },
        personal:{
          ...prevState.all.personal,
          ...this.props.all.personal
        },
        addressMain: {
          ...prevState.all.addressMain,
        },
        addressAdditional: {
          ...prevState.all.addressAdditional
        },
        family: {
          ...prevState.all.family,
          ...this.props.all.family
        },
        business: {
          ...prevState.all.business,
          ...this.props.all.business
        },
        finance: {
            ...prevState.all.finance,
            ...this.props.all.finance
        },
        bank: {
            ...prevState.all.bank,
            ...this.props.all.bank
        },
        collateral: {
            collateralTypeId: 0
        }
      }
    }),
    console.log("onGetData", this.state.all))
  }
  
  render() {
      var entity = this.props.appid;
      if (typeof entity !== "undefined"){
          appid=entity
      }
    return (
        <div id="content">
        
        <div className="row">
          <BigBreadcrumbs items={[LanguageStore.translate('New Application')]}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/> 
          <div className="col-xs-4 col-sm-4 col-md-4 col-log-4">

              <button type="button" className="btn btn-info btn-lg"
                onClick={this.onSaveDraft.bind(this)} 
                // href="#/application"
              >
                  {LanguageStore.translate('Save as Draft')}</button>
            </div>


        </div>
        
        <BasicWizardWidget
          marital_status = {this.state.marital_status}
          maritalStatus_update = {this.onHandleMaritalStatus.bind(this)}
          onGetData = {this.onGetData.bind(this)}
          onSubmitData = {this.onSubmitData.bind(this)}
          appPost = {this.props.appPost.bind(this)}
          valueCC = {this.state.valueCC}
          onChangeCreditCard = {this.onChangeCreditCard.bind(this)}

          all = {this.state.all}
          listloan = {this.props.listloan}
          datapersonel = {this.props.datapersonel}
          dataaddress={this.props.dataaddress}
          datafamily={this.props.datafamily}
          databusiness={this.props.databusiness}
          databank={this.props.databank}
          datafinancial={this.props.datafinancial}
          databank={this.props.databank}
          datacollateral={this.props.datacollateral}
          detailcollateral={this.props.detailcollateral}
          listkelurahan={this.state.listkelurahan}

          business = {this.props.all.business}
          bank = {this.props.all.bank}
          financial = {this.props.all.financial}
          loanUpdate = {this.props.loanUpdate.bind(this)}
          personal = {this.props.all.personal}
          personalUpdate = {this.props.personalUpdate.bind(this)}
          addressUpdate = {this.props.addressUpdate.bind(this)}
          companyUpdate = {this.props.companyUpdate.bind(this)}
          companyAddressUpdate = {this.props.companyAddressUpdate.bind(this)}
          bankUpdate = {this.props.bankUpdate.bind(this)}
          creditCardUpdate = {this.props.creditCardUpdate.bind(this)}
          familyUpdate = {this.props.familyUpdate.bind(this)}
          financialUpdate = {this.props.financialUpdate.bind(this)}
          collateralUpdate = {this.props.collateralUpdate.bind(this)}
        />

      </div>
    )
  }
}


const mapStateToProps = state => ({
  all: state.all
})

const mapActionToDispatch = {
  loanUpdate: updateLoan,
  loanPost: postLoan,
  dataPost: postData,
    fileuploadlos: uploadFile,
  appPost: postApp,

  personalUpdate: updatePersonal,

  addressUpdate: updateAddress,

  companyUpdate: updateCompany,
  companyAddressUpdate: updateCompanyAddress,

  bankUpdate: updateBank,
  creditCardUpdate: updateCreditCard,

  financialUpdate: updateSourceIncome,
  financialMonthlyIncome: updateMonthlyIncome,
  financialMonthlyExpense: updateMonthlyExpense,

  familyUpdate: updateFamily,

  collateralUpdate: updateCollateral

}

export default connect(mapStateToProps, mapActionToDispatch)(NewApplication)