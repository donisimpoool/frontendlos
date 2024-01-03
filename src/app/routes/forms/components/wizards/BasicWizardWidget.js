import React from 'react'

import JarvisWidget from '../../../../components/widgets/JarvisWidget'
import UiValidate from '../../../../components/forms/validation/UiValidate'
import Wizard from '../../../../components/forms/wizards/Wizard'
import Loan from './step/Loan'
import Personal from './step/Personal'
import Address from './step/Address';
import Family from './step/Family';
import Business from './step/Business';
import Financial from './step/Financial';
import Bank from './step/Bank';
import Document from './step/Document';
import Summarys from './step/Summarys';
import SelectCollateral from './step/SelectCollateral';
import {loanvalue} from "./step/Loan";
import {suburllistprovince, url} from '../../../../config/baseUrl'
import LanguageStore from "../../../../components/i18n/LanguageStore";

var base_url = url;

const validateOptions = {
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    unhighlight: function (element) {
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
    },
    errorElement: 'span',
    errorClass: 'help-block'
};

export default class BasicWizardWidget extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          radio1:'',
          radio2:'',
          collateralList: [
            {
              addedDocumentList: [
                0
              ],
              collateralId: 0,
              collateralTypeId: 0,
              description: "string",
              name: "string",
              parameters: {
                additionalProp1: "string",
                additionalProp2: "string",
                additionalProp3: "string"
              },
              removedDocumentList: [
                0
              ]
            }
          ], 
          family: {
            spouseDateOfBirth: "2019-07-10T05:02:56.555Z",
            spouseIdNum: "string",
            spouseIdType: "string",
            spouseMobile: "string",
            spouseName: "string",
            spousePlaceOfBirth: "string",
            emergencyAddress: {
                city: "string",
                currentAddress: "string",
                district: "string",
                lat: 0,
                lon: 0,
                postalCode: "string",
                province: "string"
            },
            emergencyContactMobile: "string",
            emergencyContactPersonName: "string",
            numOfDep: 0            
          }
        }; 
        this.onRadioChange = this.onRadioChange.bind(this) 
      } 

    componentDidMount(){
        // console.log("state.loan");
        // console.log(this.props.loan)
        // console.log("state.personal", this.props.personal)
        // console.log("UPDATE_BUSINESSSAEASDS", this.props.business)
    }
      onRadioChange(e){
        console.log(e.target.value);
  
        this.setState({
            [e.target.name] : e.target.value  
        })
    }

    onChangeLoan(e){
        console.log("props",e)
        this.props.loanUpdate(e)
        console.log("UPDATE_LOAN",this.props.loan)
        
        // const value = e;
        // // console.log(value)
        // this.setState({
        //     loan: value
        // },
        // console.log(this.state.loan))
    }

    onChangePersonal(e){
        console.log("props", e)
        this.props.personalUpdate(e)
        console.log("UPDATE_PERSONAL", this.props.personal)
    }

    saveStateSummary(e) {
        const value = e.target.value;
        const prodId = e.target.prodId;
    
        prodId.push(value);
        this.setState({prodId}); 
      }

    onWizardComplete(data){
        console.log('wizard submit stuff', data)
    }

    render() {
        return (
            <JarvisWidget editbutton={false} deletebutton={false} color="darken">

                <header>
                    {/* <span className="widget-icon"> <i className="fa fa-check"/> </span> */}

                    <h2>{LanguageStore.translate('New Application')} </h2>

                </header>

                {/* widget div*/}
                <div> 
                    <div className="row">
                        <UiValidate options={validateOptions}>
                            <form noValidate="novalidate">
                                <Wizard className="col-md-12"
                                     onComplete={this.onWizardComplete}>
                                <div className="form-bootstrapWizard clearfix">
                                        <ul className="bootstrapWizard">
                                            <li data-smart-wizard-tab="1" >
                                                <a> <span className="step">1</span> <span
                                                    className="title">{LanguageStore.translate('Loan Application')} </span>
                                                </a>
                                            </li>
                                            <li data-smart-wizard-tab="2">
                                                <a> <span className="step">2</span> <span
                                                    className="title">{LanguageStore.translate('Personal Information')}</span> </a>
                                            </li>
                                            <li data-smart-wizard-tab="3">
                                                <a> <span className="step">3</span> <span
                                                    className="title">{LanguageStore.translate('Address')}</span> </a>
                                            </li>
                                            <li data-smart-wizard-tab="4">
                                            <a> <span className="step">4</span> <span
                                                className="title">{LanguageStore.translate('Family Information')}</span> </a>
                                        </li>
                                        <li data-smart-wizard-tab="5">
                                            <a> <span className="step">5</span> <span
                                                className="title">{LanguageStore.translate('Business Information')}</span> </a>
                                        </li>
                                       
                                        <li data-smart-wizard-tab="6">
                                            <a> <span className="step">6</span> <span
                                                className="title">{LanguageStore.translate('Financial Information')}</span> </a>
                                        </li>
                                        <li data-smart-wizard-tab="7">
                                            <a> <span className="step">7</span> <span
                                                className="title">{LanguageStore.translate('Bank Information')}</span> </a>
                                        </li>
                                        <li data-smart-wizard-tab="8">
                                            <a> <span className="step">8</span> <span
                                                className="title">{LanguageStore.translate('Collateral')}</span> </a>
                                        </li>
                                        <li data-smart-wizard-tab="9">
                                            <a> <span className="step">9</span> <span
                                                className="title">Document</span> </a>
                                        </li>
                                        <li data-smart-wizard-tab="10">
                                            <a> <span className="step">10</span> <span
                                                className="title">{LanguageStore.translate('Summary')}</span> </a>
                                        </li>
                                    </ul>
                                </div>
                                    <div className="tab-content" style={{textAlign:"center"}}>
                                        <div className="tab-pane" data-smart-wizard-pane="1" >
                                            <br/>
                                           
                                            <h3><strong>{LanguageStore.translate('Step')} 1 </strong> - {LanguageStore.translate('Loan Application')} </h3>
                                                <Loan
                                                    listloan = {this.props.listloan}
                                                    baseUrl = {base_url}
                                                    onGetData = {this.props.onGetData.bind(this)}
                                                    // loan_input = {this.onChangeLoan.bind(this)}
                                                    loan_update = {this.props.loanUpdate.bind(this)}
                                                    loan_console = {this.props.loan}
                                                    loan_state = {this.state.loan}
                                                />
                                         </div>  
                                        <div className="tab-pane" data-smart-wizard-pane="2">
                                            <br/>
                                            <h3><strong>{LanguageStore.translate('Step')} 2</strong> - {LanguageStore.translate('Personal Information')}</h3>
                                            <Personal
                                                datapersonel = {this.props.datapersonel}


                                                // personal_input = {this.onChangePersonal.bind(this)}
                                                personal_update = {this.props.personalUpdate.bind(this)}
                                                personal_console = {this.props.personal}
                                                personal_state = {this.state.personal}

                                                marital_status = {this.props.marital_status}
                                                maritalStatus_update = {this.props.maritalStatus_update.bind(this)}
                                                onGetData = {this.props.onGetData.bind(this)}
                                            />
                                            
                                        </div>
                                        
                                        <div className="tab-pane" data-smart-wizard-pane="3">
                                            <br/>
                                            <h3><strong>{LanguageStore.translate('Step')} 3</strong> - {LanguageStore.translate('Address')}</h3>
                                            <Address
                                                dataaddress = {this.props.dataaddress}
                                                address_update = {this.props.addressUpdate.bind(this)}
                                                onGetData = {this.props.onGetData.bind(this)}
                                                listkelurahan={this.props.listkelurahan}
                                            />
                                          </div> 
                                        <div className="tab-pane" data-smart-wizard-pane="4">
                                            <br/>
                                            
                                        <h3><strong>{LanguageStore.translate('Step')} 4</strong> - {LanguageStore.translate('Family')}</h3>
                                            <Family
                                                datafamily={this.props.datafamily}
                                                family_update = {this.props.familyUpdate.bind(this)}
                                                marital_status = {this.props.marital_status}
                                                onGetData = {this.props.onGetData.bind(this)}
                                            />
                                          </div>
                                        <div className="tab-pane" data-smart-wizard-pane="5">
                                            <br/>
                                         <h3><strong>{LanguageStore.translate('Step')} 5</strong> - {LanguageStore.translate('Business Information')}</h3>
                                        <Business
                                            databusiness={this.props.databusiness}
                                            business_update = {this.props.companyUpdate.bind(this)}
                                            business_addressUpdate = {this.props.companyAddressUpdate.bind(this)}
                                            onGetData = {this.props.onGetData.bind(this)}
                                        />
                                     </div>     
                                        <div className="tab-pane" data-smart-wizard-pane="6">
                                        <br/>
                                          &nbsp;
                                            <h3><strong>{LanguageStore.translate('Step')} 6</strong> - {LanguageStore.translate('Financial Information')}</h3>
                                                <Financial
                                                    datafinancial={this.props.datafinancial}
                                                    financialUpdate = {this.props.financialUpdate.bind(this)}
                                                    onGetData = {this.props.onGetData.bind(this)}
                                                />
                                         </div>
                                        <div className="tab-pane" data-smart-wizard-pane="7">    
                                        <br/>
                                         <h3><strong>{LanguageStore.translate('Step')} 7</strong> - {LanguageStore.translate('Bank Information')}</h3>
                                            <Bank
                                                databank={this.props.databank}
                                                bank_update = {this.props.bankUpdate.bind(this)}
                                                bank_creditCardUpdate = {this.props.creditCardUpdate.bind(this)}
                                                onGetData = {this.props.onGetData.bind(this)}
                                                valueCC = {this.props.valueCC}
                                                onChangeCreditCard = {this.props.onChangeCreditCard.bind(this)}
                                            />
                                            </div>
                                            
                                            <div className="tab-pane" data-smart-wizard-pane="8">    
                                             <br/>
                                         <h3><strong>{LanguageStore.translate('Step')} 8</strong> - {LanguageStore.translate('Collateral')}</h3>
                                                <SelectCollateral
                                                    detailcollateral={this.props.detailcollateral}
                                                    datacollateral={this.props.datacollateral}
                                                    collateralUpdate = {this.props.collateralUpdate.bind(this)}
                                                    onGetData = {this.props.onGetData.bind(this)}
                                                />
                                            </div>
                                            <div className="tab-pane" data-smart-wizard-pane="9">    
                                             <br/>
                                         <h3><strong>{LanguageStore.translate('Step')} 9</strong> - Document</h3>
                                             <Document/>   
                                            </div>
                                            <div className="tab-pane" data-smart-wizard-pane="10">  
                                        
                                            <br/>
                                            <h3><strong>{LanguageStore.translate('Step')} 10</strong> - {LanguageStore.translate('Summary')}</h3>
                                            <Summarys  
                                                all = {this.props.all}
                                                loan ={this.props.loan}
                                                personal = {this.props.personal}
                                                bank = {this.props.bank}
                                                onSubmitData = {this.props.onSubmitData.bind(this)}
                                                appPost = {this.props.appPost.bind(this)}
                                                marital_status = {this.props.marital_status}
                                                valueCC = {this.props.valueCC}
                                            />
                                        </div>
                                        <div className="form-actions">
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <ul className="pager wizard margin">
                                                        <li className="previous" data-smart-wizard-prev="">
                                                            <a  className="btn btn-lg btn-default">
                                                                Prev </a>
                                                        </li>
                                                        <li className="next" data-smart-wizard-next="">
                                                            <a  className="btn btn-lg txt-color-darken">
                                                                Next </a>
                                                        </li>
                                                                    
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Wizard>
                            </form>
                        </UiValidate>
                    </div>


                </div>
                
            </JarvisWidget>

        )
    }
} 