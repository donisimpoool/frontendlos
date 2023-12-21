import React from 'react'
import DropzoneInput from '../../../../components/forms/inputs/DropzoneInput'
import TypeVehicle from './TypeVehicle';
import {valueCollateralRealEstate} from "./CollateralRealEstate";
import LanguageStore from "../../../../components/i18n/LanguageStore";
import {convertByteToMB} from "../../../../config/FunctionGlobal";
import {info} from "../../../auth/containers/Login";
import {msglimitfile} from "../../../../config/KosaKata";
import {keyset} from "../../../../config/baseUrl";
import {DecrypsCode} from "../../../../config/Encrypt";

export var typevehicle='',years='',millage='',isuploadfileVehicle='NO',filedocumentVehicle={filedocvehicle:[],totalsize:0};
export var valueColleteralVehicle = {
    applicationid:'',
    typevehicle:'',
    brand:'',
    typetransmision:'',
    year:'0',
    mileage:'',
    model:''
}
var flag = false,brandid="0",modelid="0",typetransmision=""
export default class CollateralVehicle extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            collateralTypeId: 1,
            valueCv: '',
            valuedocument:{
                filedocvehicle:[],
                totalsize:0
            },
            valueColleteralVehicle : {
                applicationid:'',
                typevehicle:'',
                brand:'',
                typetransmision:'',
                year:'0',
                mileage:'',
                model:''
            }
        }
    }
    uploadFile(event) {
        var listdoc=[];
        var size = 0
        for(var i=0; i < event.target.files.length; i++){
            var file = event.target.files[i];
            size += file.size
            listdoc.push(file)
        }
        // var file = event.target.files[0];
        var value = this.state.valuedocument;
        value.filedocvehicle = listdoc;
        value.totalsize = size
        this.setState(value);
        filedocumentVehicle = this.state.valuedocument;
        isuploadfileVehicle='YES';
        var totalsizemb = convertByteToMB(size);
        if(totalsizemb > JSON.parse(DecrypsCode(localStorage.getItem(keyset))).sizefile){
            alert(msglimitfile(info.sizefile));
        }
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

      onVehicle(e){
        const value = e.target.value;
        const prodId = e.target.name;
        this.setState(prevState =>({
            parameters: {
                ...prevState.parameters,
                type: this.state.valueCv,
                [prodId]: value
            }
        }),
            this.onReturnData.bind(this)
        ) 
      }

      onReturnData(){ 
          console.log(this.state)
          this.props.collateralList(this.state)
      }

    OnChangeVehicle(event){
        typevehicle = event.target.value;
        valueColleteralVehicle.typevehicle = typevehicle;
        this.setState({
            typevehicle: typevehicle
        });
        var temp = this.state.valueColleteralVehicle;
        temp.typevehicle = typevehicle;
        this.setState(temp);
        flag = true
    }
    onChangeYears(e){
        var str = e.target.value;
        valueColleteralVehicle.year = str;
        years = str;
        var temp = this.state.valueColleteralVehicle;
        temp.year = str;
        this.setState(temp);
        flag = true
        this.setState({
            typevehicle: typevehicle
        });
    }
    onChangeMillAge(e){
        var str = e.target.value;
        valueColleteralVehicle.mileage = str;
        millage = str;
        var temp = this.state.valueColleteralVehicle;
        temp.mileage = str;
        this.setState(temp);
        flag = true
    }
    setEntity() {
        var entity = this.props.detailcollateral;
        if (typeof entity !== "undefined" && !flag){
            this.state.valueColleteralVehicle.typevehicle =entity.typevehicle
            valueColleteralVehicle.typerealestate = entity.typevehicle
            brandid = entity.brand
            modelid = entity.model
            typetransmision = entity.typetransmision
            this.state.valueColleteralVehicle.year = entity.year
            this.state.valueColleteralVehicle.mileage = entity.mileage
            typevehicle =entity.typevehicle
            years = entity.year
            millage = entity.mileage
            //typevehicle='',years='',millage='',isuploadfileVehicle='NO'
        }
        flag = false;
    }
    render(){
        this.setEntity()
        let  maxOffset = 10;
        let thisYear = (new Date()).getFullYear();
        let allYears = [];
        for(let x = 0; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }
    
        const yearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});
        return(
            <div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Vehicle')}</b></h4>
                                <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required="" required data-message-required="Please Choose option"
                                        name="vehicle"
                                        value={this.state.valueColleteralVehicle.typevehicle}
                                        onChange={this.OnChangeVehicle.bind(this)}
                                        >
                                    <option value="" disabled={true}>Type of Vehicle</option>
                                    <option value="Car">{LanguageStore.translate('Car')}</option>
                                    <option value="Motorcyle">{LanguageStore.translate('Motorcyle')}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>     
                <TypeVehicle
                    typetransmision={typetransmision}
                    brandid={brandid}
                    modelid={modelid}
                    DivState={this.state.valueColleteralVehicle.typevehicle}
                    onVehicle={this.onVehicle.bind(this)}
                />
                <br/>      
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Year')}</b></h4>
                                    <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required=""
                                        name="year"
                                        onChange={this.onChangeYears.bind(this)} value={this.state.valueColleteralVehicle.year}
                                        defaultValue={"0"}>
                                        <option value="0" selected="true">{LanguageStore.translate('Select Year')}</option>
                                          {yearList}
                                        </select>    
                            </div>
                        </div>
                    </div>
                </div>     
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Mileage')}</b></h4>
                            <input className="form-control input-lg" min="0"
                                    placeholder="Length of Mileage"
                                    type="number" 
                                    name="mileage" 
                                    onChange={this.onChangeMillAge.bind(this)}
                                    required
                                    data-smart-validate-input="" data-required="" value={this.state.valueColleteralVehicle.mileage}
                                    data-message="Please specify the condition of the real estate"
                                /> 
                                <div className="note">
                                   <strong>Note:</strong> format text input in miles.
                            </div>              
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
                    {/*  maxFilesize: 0.8,*/}
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
