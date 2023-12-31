import React from 'react'
import Alert from "react-bootstrap/lib/Alert";
import {WidgetGrid, JarvisWidget}  from '../../../../../components'
import FamilySum from '../SummaryData/FamilySum';
import BusinessSum from '../SummaryData/BusinessSum';
import FinancialSum from '../SummaryData/FinancialSum';
import LoanSum from "../SummaryData/LoanSum";
import PersonalSum from '../SummaryData/PersonalSum';
import BankSum from '../SummaryData/BankSum';
import {loanvalue} from "./Loan";
import {loanName,loanAmount,purposeofloan,tenor} from "./Loan";
import {personelvalue} from "./Personal";
import {Addressvalue} from "./Address";
import {fullname,mobilephone,landline,placeofbirth,dateofbirth,Gender,maritalstatus,idtype,idnumber,education,email } from "./Personal";
import AddressSum from "../SummaryData/AddressSum";
import {idcity, idcity2, idcity3, idcity4, namecity, namecity2, namecity3, namecity4} from "../Type/TypeCity";
import {mainaddress,provincename,postalcode,ownershipstatus,isCollateral,livedinaddress,location} from "./Address";
import {filedocument} from "./Document";
import {filedocumentVehicle} from "../CollateralVehicle";
import {filedocumentRealEstate} from "../CollateralRealEstate";
import {filedocumentbank} from "../CollateralBank";
import {
    idkec,
    idkec2,
    idkec3, idkec4,
    namekecamatan,
    namekecataman2,
    namekecataman3,
    namekecataman4,
    idkelurahan
} from "../Type/typeDistrict";
import {mainaddress2, provincename2, postalcode2, ownershipstatus2, isCollateral2, Addressvalue2} from "./Address2";
import {familyvalue} from "./Family";
import {emergencycontact,addressemergencycontact,mobilephoneemergencycontact} from "./Family";
import {businessvalue} from "./Business";
import {companyname,companyaddress,provincenamebusiness,divisionname,positionname,durationtime,totalnumberemp,businessline} from "./Business";
import {financialvalue} from "./Financial";
import {typeincome,mainincome,sideincome,expense,addtionalexpense,typevehiclefinancial,vehicleowner} from "./Financial";
import {bankvalue} from "./Bank";
import {bankname,acctypename,accnumber,iscc} from "./Bank";
import CollateralView from "../View/CollateralView";
import {collateralvalue,selectcollateral} from "./SelectCollateral";
import {bankcc, creditcardvalue, numbercc,typecreditcard} from "./CreditCard";
import {
    typeofrealestate,
    condition,
    yearbuild,
    rooms,
    addresss,
    provincee,
    sizee,
    proofownership,
    isuploadfileRE,
    valueCollateralRealEstate
} from "../CollateralRealEstate";
import {typevehicle, years, millage, isuploadfileVehicle, valueColleteralVehicle} from "../CollateralVehicle";
import {brandid, brandname, transmisiionname, transmisionid} from "../TypeVehicle";
import {modeilid, modelname} from "../ModelVehicle";
import {
    bankName,
    amount,
    currency,
    accnumberColateralbank,
    duedate,
    isuploadfileBank,
    valuecollateraldeposit
} from "../CollateralBank";
import {postLoan, uploadFile} from "../actions/loanActions";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
import {keyset, suburlcreateapp,suburlsubmitapp} from "../../../../../config/baseUrl";
import {suburlmultiplefile} from "../../../../../config/baseUrl";
import {info} from "../../../../auth/containers/Login";
import {convertByteToMB} from "../../../../../config/FunctionGlobal";
import {msglimitfile} from "../../../../../config/KosaKata";
import {DecrypsCode} from "../../../../../config/Encrypt";
import {headers} from "../../../../../config/ConfigParam";

export default class Summarys extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            valueid:'',
            personel:'',
            address:'',
            family:'',
            business:'',
            financial:'',
            bank:'',
            collateral:'',
            loanapp:[],
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
    onClickSubmit(){
        this.props.appPost()
        this.props.onSubmitData()
    }
    componentDidMount(){
        // this.state.loanapp = loanvalue;
        console.log("Summaryyys")
    }
    componentDidUpdate() {
        console.log("updatee")
    }
    handleClickLoanApp = (e) => {
        this.setState({valueid: e.target.value});
    }
    handleClickLoanPersonel = (e) => {
        this.setState({personel: e.target.value});
    }
    handleClickLoanAddress = (e) => {
        this.setState({address: e.target.value});
    }
    handleClickLoanFamilyInfo = (e) => {
        this.setState({family: e.target.value});
    }
    handleClickLoanBusinessInfo = (e) => {
        this.setState({business: e.target.value});
    }
    handleClickLoanFinancialInfo = (e) => {
        this.setState({financial: e.target.value});
    }
    handleClickLoanBankInfo = (e) => {
        this.setState({bank: e.target.value});
    }
    handleClickLoanCollateralInfo = (e) => {
        this.setState({collateral: e.target.value});
    }
    handletest = () => {
        alert('Jalan ')
    }
    onSubmit= () => {
        if(window.confirm('Are you sure you want to save it ?')){
        var value = this.state.allvalue
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
        var status = 0;
        var paramloan = {
            applicationID: "",
            status: "OPEN",
            score: 0,
            isdraft: "N",
            createdby:JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id,
            appLoan: this.state.allvalue.loanvalue,
            appPersonel: this.state.allvalue.personelvalue,
            appAddress1: this.state.allvalue.Addressvalue,
            appAddress2: this.state.allvalue.Addressvalue2,
            appFamily: this.state.allvalue.familyvalue,
            appBusiness: this.state.allvalue.businessvalue,
            appFinancial: this.state.allvalue.financialvalue,
            appBank: this.state.allvalue.bankvalue,
            appCollateral: this.state.allvalue.collateralvalue,
            appCollateralRealEstate: valueCollateralRealEstate,
            appCollateralVehicle: valueColleteralVehicle,
            appCollateralDeposit: valuecollateraldeposit,
            creditcard: creditcardvalue
        }
        var msg = "";
        var arraymsg = [];
            var size = 0;
            var sizefile = JSON.parse(DecrypsCode(localStorage.getItem(keyset))).sizefile
            if (filedocument.filedoc.length > 0) {
                size += paramsfile.totalsize
            }
            if (filedocumentRealEstate.filedoc.length > 0) {
                size += filedocumentRealEstate.totalsize
            }
            if (filedocumentVehicle.filedocvehicle.length > 0) {
                size += filedocumentVehicle.totalsize
            }
            if (filedocumentbank.filedoc.length > 0) {
                size += filedocumentbank.totalsize
            }
            var totalSizeMB = convertByteToMB(size);
            if (sizefile > totalSizeMB) {

            }else{
                msg = msglimitfile(sizefile)+" \r\n ";
                arraymsg.push(msg);
            }
        if (msg == "") {
            var url = suburlsubmitapp;
            fetch(url,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(paramloan)
                })
                .then(response => response.json())
                .then(respon => {
                    if(respon.validation == "") {
                        if (filedocument.filedoc.length > 0) {
                            var parms = {
                                'filedoc': filedocument.filedoc,
                                'description': filedocument.description
                            }
                            uploadFile(parms, respon.data.applicationid, 'appdocument')
                        }
                        if (filedocumentVehicle.filedocvehicle.length > 0) {
                            var parms = {
                                'filedoc': filedocumentVehicle.filedocvehicle,
                                'description': ''
                            }
                            uploadFile(parms, respon.data.applicationid, 'colvehicle')
                        }
                        if (filedocumentRealEstate.filedoc.length > 0) {
                            var parms = {
                                'filedoc': filedocumentRealEstate.filedoc,
                                'description': ''
                            }
                            uploadFile(parms, respon.data.applicationid, 'colrealestate')
                        }
                        if (filedocumentbank.filedoc.length > 0) {
                            var parms = {
                                'filedoc': filedocumentbank.filedoc,
                                'description': ''
                            }
                            uploadFile(parms, respon.data.applicationid, 'colbank')
                        }
                        alert('Sukses Menyimpan')
                    }else{
                        msg = "";
                        respon.validation.map(function (item) {
                            msg += item.errormessages+"\r\n";
                        })
                        alert(msg);
                    }
                })
        } else {
            msg = "";
            for (var i = 0; i <= 9; i++) {
                if (arraymsg.length > i) {
                    msg += arraymsg[i];
                }
            }
            alert(msg);
        }
    }
        // postLoan(paramloan)
    }
    uploadFile(params,applicationid,docfor){
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
            .then(response => response.json())
            .then(respon => {

            })
        // console.log('LOAN POSTED', params)
        // }
    }
    render(){
        return(
            <div>
                 <WidgetGrid sortable={false}>
            <div className="row">
              <article className="col-md-8">
              <JarvisWidget colorbutton={false} editbutton={false}
                            custombutton={false}
                            color="blueDark"  >

                <header onClick={this.handleClickLoanApp} value={loanvalue.loanProductId}>
                    <span className="widget-icon"> </span>
                          <h2>{LanguageStore.translate('Loan Application')}</h2>
                </header>
                  <div>
                      <LoanSum
                          loanName={loanName}
                          loanAmount={loanAmount}
                          purposeofloan={purposeofloan}
                          tenor={tenor}
                      />
                  </div>
              </JarvisWidget>
              </article>
                <article className="col-md-8">
                <JarvisWidget colorbutton={false} editbutton={false}
                                custombutton={false}
                                color="blueDark" >
                    <header onClick={this.handleClickLoanPersonel} value={personelvalue.fullname}>
                        <span className="widget-icon"> </span>
                            <h2>{LanguageStore.translate('Personal Information')}</h2>

                    </header>
                    <div>
                        <PersonalSum
                            fullname={fullname}
                            mobilephone={mobilephone}
                            landline={landline}
                            placeofbirth={placeofbirth}
                            dateofbirth={dateofbirth}
                            Gender={Gender}
                            maritalstatus={maritalstatus}
                            idtype={idtype}
                            idnumber={idnumber}
                            education={education}
                            email={email}
                        />
                    </div>
                    </JarvisWidget>
                    </article>
                    <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanAddress} value={Addressvalue.mainaddress}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Address')}</h2>

                        </header>
                        <div>
                            <AddressSum
                                location={location}
                                namecity={namecity}
                                mainaddress={mainaddress}
                                provincename={provincename}
                                namekecamatan={namekecamatan}
                                postalcode={postalcode}
                                ownershipstatus={ownershipstatus}
                                isCollateral={isCollateral}
                                livedinaddress={livedinaddress}
                                namecity2={namecity2}
                                mainaddress2={mainaddress2}
                                provincename2={provincename2}
                                namekecataman2={namekecataman2}
                                postalcode2={postalcode2}
                                ownershipstatus2={ownershipstatus2}
                                isCollateral2={isCollateral2}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanFamilyInfo} value={familyvalue.emergencycontact}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Family Information')}</h2>

                        </header>
                        <div>
                            <FamilySum
                                emergencycontact={emergencycontact}
                                addressemergencycontact={addressemergencycontact}
                                mobilephoneemergencycontact={mobilephoneemergencycontact}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanBusinessInfo} value={businessvalue.companyname}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Business Information')}</h2>

                        </header>
                        <div>
                            <BusinessSum
                                companyname = {companyname}
                                companyaddress = {companyaddress}
                                provincename = {provincenamebusiness}
                                namecity3 = {namecity3}
                                namekecataman3 = {namekecataman3}
                                divisionname = {divisionname}
                                positionname={positionname}
                                durationtime={durationtime}
                                totalnumberemp={totalnumberemp}
                                businessline={businessline}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanFinancialInfo} value={financialvalue.mainincome}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Financial Information')}</h2>

                        </header>
                        <div>
                            <FinancialSum
                                typeincome = {typeincome}
                                mainincome = {mainincome}
                                sideincome = {sideincome}
                                expense = {expense}
                                addtionalexpense = {addtionalexpense}
                                vehicleowner={vehicleowner}
                                typevehicle={typevehiclefinancial}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanBankInfo} value={bankvalue.bank}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Bank Information')}</h2>

                        </header>
                        <div>
                            {/*//bankname,acctypename,accnumber,iscc*/}
                            <BankSum
                                bankname={bankname}
                                acctypename={acctypename}
                                accnumber={accnumber}
                                iscc={iscc}
                                bankcc={bankcc}
                                numbercc={numbercc}
                                typecreditcard={typecreditcard}
                            />
                        </div>
                 </JarvisWidget>
                 </article>
                 <article className="col-md-8">
                    <JarvisWidget colorbutton={false} editbutton={false}
                                    custombutton={false}
                                    color="blueDark">
                        <header onClick={this.handleClickLoanCollateralInfo} value={collateralvalue.valueC}>
                            <span className="widget-icon"> </span>
                                <h2>{LanguageStore.translate('Collateral')}</h2>
                        </header>
                        <div>
                           <CollateralView
                               typecollateral={selectcollateral}
                               typeofrealestate={typeofrealestate}
                               condition={condition}
                               yearbuild={yearbuild}proofownership={proofownership}
                               rooms={rooms}addresss={addresss}provincee={provincee}sizee={sizee}
                               namecity4={namecity4}namekecataman4={namekecataman4}isuploadfileRE={isuploadfileRE}

                               typevehicle={typevehicle}years={years}millage={millage}
                               brandname={brandname}transmisiionname={transmisiionname}
                               modelname={modelname}isuploadfileVehicle={isuploadfileVehicle}

                               bankName={bankName}amount={amount}currency={currency}
                               accnumber={accnumberColateralbank}duedate={duedate}isuploadfileBank={isuploadfileBank}
                           />
                        </div>
                 </JarvisWidget>
                 </article>
                
                 <footer className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <a  className="btn btn-primary"
                            onClick={this.onSubmit}
                        >
                          Submit
                        </a>
                    </footer>
                </div> 
              </WidgetGrid> 
             </div>
            
        )
        
    }
}