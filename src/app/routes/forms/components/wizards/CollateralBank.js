import React from 'react'
import DropzoneInput from '../../../../components/forms/inputs/DropzoneInput'
import NumberFormat from 'react-number-format';
import {listmodelvehichle} from "./ListData/ListModelVehicle";
import {modelname} from "./ModelVehicle";
import {valueColleteralVehicle} from "./CollateralVehicle";
import LanguageStore from "../../../../components/i18n/LanguageStore";
import {keyset, suburlbank} from "../../../../config/baseUrl";
import {convertByteToMB} from "../../../../config/FunctionGlobal";
import {info} from "../../../auth/containers/Login";
import {msglimitfile} from "../../../../config/KosaKata";
import {DecrypsCode} from "../../../../config/Encrypt";

export var filedocumentbank={filedoc:[],totalsize:0},isuploadfileBank='NO',bankName = '',amount='',currency='',accnumberColateralbank='',duedatetime='';
export var valuecollateraldeposit = {
    bankid:'0',
    amount:'0',
    currency:'',
    accountnumber:'',
    duedatetime:0
}
var flag = false,myduedate = "";
export default class CollateralBank extends React.Component{ 
    state = {
        fileInputValue: '',
        collateralTypeId: 2,
        parameters: {},
        posts: [],
        valuedocument:{
            filedoc:[],
            totalsize:0
        },
        valuecollateraldeposit : {
            bankid:'0',
            amount:'0',
            currency:'',
            accountnumber:'',
            duedatetime:0
        }
      };

    uploadFile(event) {
        var listdoc=[];
        var size = 0
        for(var i=0; i < event.target.files.length; i++){
            var file = event.target.files[i];
            size += file.size
            listdoc.push(file)
        }
        var value = this.state.valuedocument;
        value.filedoc = listdoc;
        value.totalsize = size
        this.setState(value);
        filedocumentbank = this.state.valuedocument;
        isuploadfileBank='YES';
        var totalsizemb = convertByteToMB(size);
        if(totalsizemb > JSON.parse(DecrypsCode(localStorage.getItem(keyset))).sizefile){
            alert(msglimitfile(info.sizefile));
        }
    }
      onChangeAmount(e){
          var str = e.target.value;
          amount = str;
          str = str.replace(/,/g, "");
          valuecollateraldeposit.amount = str;
          var value = this.state.valuecollateraldeposit;
          value.amount = str;
          this.setState(value);
          flag = true
      }
    onChangeCurrency(e){
        var str = e.target.value;
        valuecollateraldeposit.currency = str;
        currency = str;
        var value = this.state.valuecollateraldeposit;
        value.currency = str;
        this.setState(value);
        flag = true
    }
    onChangeAccNumber(e){
        var str = e.target.value;
        valuecollateraldeposit.accountnumber = str;
        accnumberColateralbank = str;
        var value = this.state.valuecollateraldeposit;
        value.accountnumber = str;
        this.setState(value);
        flag = true
    }
    onChangeDueDate(e){
        var str = e.target.value;
        duedatetime = str;
        var dt = new Date(str);
        str = dt.getTime();
        valuecollateraldeposit.duedatetime = str;
        var value = this.state.valuecollateraldeposit;
        value.duedatetime = str;
        this.setState(value);
        flag = true
    }
      onParse(e){ 
        var str = e.target.value
        str = str.replace(/,/g, "")
        var parsedNumb = parseInt(str)
        const prodId = e.target.name;
        this.setState(prevState =>({
          parameters: {
              ...prevState.parameters,
              [prodId]: parsedNumb
            }
        }),
            this.onReturnData.bind(this)
        )
      }

      onDate(e){ 
        const value = `${e.target.value}T00:00:00.000+07:00` 
        const personalInput = e.target.name;
        this.setState(prevState =>({
          parameters: {
              ...prevState.parameters,
              [personalInput]: value
            }
        }),
        this.onReturnData.bind(this)
        )
      }

    componentDidMount(){
        var url = suburlbank;
        const otherPram={
            method:"GET",
            headers:{
                'content-type': 'application/json'
            }
        }
        // url = 'https://jsonplaceholder.typicode.com/todos/1';

        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                // console.log(json.data)
                this.setState({posts: json.data})
            )
        console.log("this.state.posts : "+this.state.posts.map)
    }
      onChangeDeposit(e){
          const value = e.target.value;

          valuecollateraldeposit.bankid = value;
          var filterbank = this.state.posts.filter( (item) => {
              return item.bankId == value
          })
          bankName = '';
          filterbank.map(function (item) {
              bankName = item.bankName;
          })
          var temp = this.state.valuecollateraldeposit;
          temp.bankid = value;
          this.setState(temp);

          flag = true;
      }

      onReturnData(){ 
          this.props.collateralList(this.state)
      }
    
      onSubmit(e) {
        e.preventDefault();
        console.log('submit stuff')
      }
    
      onFileInputChange = (e)=>{
        this.setState({
          fileInputValue: e.target.value
        })
      }
    setEntity() {
        var entity = this.props.detailcollateral;
        if (typeof entity !== "undefined" && !flag){
            this.state.valuecollateraldeposit.bankid =entity.bankid
            valuecollateraldeposit.bankid =entity.bankid

            this.state.valuecollateraldeposit.amount =entity.amount
            valuecollateraldeposit.amount =entity.amount

            this.state.valuecollateraldeposit.currency =entity.currency
            valuecollateraldeposit.currency =entity.currency

            this.state.valuecollateraldeposit.accountnumber =entity.accountnumber
            valuecollateraldeposit.accountnumber =entity.accountnumber
            var filterbank = this.state.posts.filter( (item) => {
                return item.bankId == entity.bankid
            })
            bankName = '';
            filterbank.map(function (item) {
                bankName = item.bankName;
            })
            amount = entity.amount
            currency = entity.currency
            accnumberColateralbank = entity.accountnumber
        }
        var tempdate = new Date(this.state.valuecollateraldeposit.duedatetime);
        var month = (tempdate.getMonth() + 1);
        if(month < 10){
            month = "0"+month
        }
        var date = tempdate.getDate()
        if(date < 10){
            date = "0"+date;
        }
        myduedate = tempdate.getFullYear() + "-" + month + "-" + date;
        duedatetime = myduedate
        flag = false;

    }
    render(){
        this.setEntity()
        return(
            <div>
                <br/>
                 <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>Bank</b></h4>

                                <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required="" data-message-required="We need your input bank"
                                        name="bank" defaultValue={""}
                                        onChange={this.onChangeDeposit.bind(this)} value={this.state.valuecollateraldeposit.bankid}
                                >
                                    <option value="0" selected={true}>{LanguageStore.translate('Choose')}</option>
                                    {

                                        this.state.posts.map(function (item) {
                                            if(item.bankName !== '') {
                                                return (
                                                    <option key={item.bankId}
                                                            value={item.bankId}>{item.bankName}</option>
                                                )
                                            }
                                        })}

                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Amount')} </b></h4>
                            <NumberFormat className="form-control input-lg" data-minlength="4" data-required=""
                              thousandSeparator={true} placeholder="Enter your loan amount" 
                              onChange={this.onChangeAmount.bind(this)} value={this.state.valuecollateraldeposit.amount}
                              name="amount" required
                              />

                            {/* <input className="form-control input-lg" min="0"
                                placeholder="Amount of Deposit" type="number" name="amount"
                                data-smart-validate-input="" data-required=""
                                data-message="Please specify Amount of Deposit"/> */}

                            </div>
                        </div>
                    </div>
                </div>        
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Currency')} </b></h4>
                                <select className="form-control input-lg"
                                    data-smart-validate-input="" data-required=""
                                    name="currency"
                                    onChange={this.onChangeCurrency.bind(this)}
                                    defaultValue={"0"} value={this.state.valuecollateraldeposit.currency}>
                                    <option value="0" selected={true}>{LanguageStore.translate('List of Currencies')}</option>
                                    <option value={'IDR'}>IDR</option>
                                    {/*<option>USD</option>*/}
                                    {/*<option>SGD</option>  */}
                                </select>  
                            </div>
                        </div>
                    </div>
                </div>   
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Account Number')} </b></h4>
                            <NumberFormat className="form-control input-lg" minLength="10" 
                                   data-message="Please specify Amount of Deposit"
                                    placeholder="Enter your account Number" min="0"
                                    format="#### #### #### ####" onChange={this.onChangeAccNumber.bind(this)} value={this.state.valuecollateraldeposit.accountnumber}
                                    name="accno" required/>
                         
                            </div>
                        </div>
                    </div>
                </div>             
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Due Date')}</b></h4>
                             <input type="date" className="form-control" id="datepicker"
                                name="duedatetime"
                                onChange={this.onChangeDueDate.bind(this)} value={myduedate}
                             />
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="row">
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                 <header>
                 
                  <h2>UPLOAD</h2>

                </header>


                  {/* widget content */}
                  <div className="widget-body">
                      <input name="file" id="file" type="file" onChange={this.uploadFile.bind(this)} multiple={true}/>
                    {/*<DropzoneInput options={{*/}
                    {/*  addRemoveLinks: true,*/}
                    {/*  maxFilesize: 0.5,*/}
                    {/*  dictDefaultMessage: '<span class="text-center"><span class="font-lg visible-xs-block visible-sm-block visible-lg-block"><span class="font-lg"><i class="fa fa-caret-right text-danger"></i> Drop files <span class="font-xs">to upload</span></span><span>&nbsp&nbsp<h4 class="display-inline"> (Or Click)</h4></span>',*/}
                    {/*  dictResponseError: 'Error uploading file!'*/}
                    {/*}}>*/}
                    {/*  <form action="/upload" className="dropzone" id="file"/>*/}
                    {/*</DropzoneInput>*/}
                    {/*<span className="widget-icon"> <i className="fa fa-cloud-upload text-muted mb-3"/> </span>*/}
                    </div>
                    
                 </div> 
                </div>                                              
            </div>
            
        )
        
    }
}