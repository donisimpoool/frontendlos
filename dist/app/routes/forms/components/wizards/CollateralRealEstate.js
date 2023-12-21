import React from 'react'
import DropzoneInput from '../../../../components/forms/inputs/DropzoneInput'
import TypeCity from "./Type/TypeCity";
import {provincename} from "./step/Address";
import {filedocument} from "./step/Document";
import {bankvalue} from "./step/Bank";
import LanguageStore from "../../../../components/i18n/LanguageStore";
import {keyset, suburllistprovince} from "../../../../config/baseUrl";
import {convertByteToMB} from "../../../../config/FunctionGlobal";
import {info} from "../../../auth/containers/Login";
import {msglimitfile} from "../../../../config/KosaKata";
import {DecrypsCode} from "../../../../config/Encrypt";
import {headers} from "../../../../config/ConfigParam";

export var typeofrealestate = '',condition='',yearbuild='',rooms='',addresss='',provincee='',sizee='',proofownership='',filedocumentRealEstate={filedoc:[],totalsize:0},isuploadfileRE='NO'
export var valueCollateralRealEstate = {
    applicationid:"",
    typerealestate:"",
    condition:"",
    year:"0",
    rooms:"0",
    address:"",
    provinceid:"0",
    regenciesid:"0",
    districtid:"0",
    size:"",
    proofofownership:""
}
export var listtypeofestate=[
    {id:'house',name:'House'},
    {id:'villa',name:'Villa'},
    {id:'apartment',name:'Apartment'}
]
var flag = false,idregencies="0",iddistrict="0"
export default class CollateralRealEstate extends React.Component{
    state = { 
        collateralTypeId: 3,
        parameters: {},
        valueProv:'',
        posts:[],
        valuedocument:{
            filedoc:[],
            totalsize:0
        },
        valueCollateralRealEstate : {
            applicationid:"",
            typerealestate:"",
            condition:"",
            year:"0",
            rooms:"0",
            address:"",
            provinceid:"0",
            regenciesid:"0",
            districtid:"0",
            size:"",
            proofofownership:""
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
        filedocumentRealEstate = this.state.valuedocument;
        isuploadfileRE='YES';

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

    componentDidMount(){
        var url = suburllistprovince;
        const otherPram={
            method:"GET",
            headers: headers,
        }

        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                // console.log(json.data)
                this.setState({posts: json.data})
            )
    }
      onChangeSize(e){
          const value = e.target.value;
          sizee = value;
          var temp = this.state.valueCollateralRealEstate;
          temp.size = value;
          valueCollateralRealEstate.size = value
          this.setState(temp);
          flag = true;
      }
      onChangeYearBuild(e){
          const value = e.target.value;
          valueCollateralRealEstate.year = value;
          yearbuild = value;
          var temp = this.state.valueCollateralRealEstate;
          temp.year = value;
          this.setState(temp);
          flag = true;
      }
      onChangeRooms(e){
          const value = e.target.value;
          valueCollateralRealEstate.rooms = value;
          rooms = value;
          var temp = this.state.valueCollateralRealEstate;
          temp.rooms = value;
          this.setState(temp);
          flag = true
      }
    onChangeAddress(e){
        const value = e.target.value;
        valueCollateralRealEstate.address = value;
        addresss = value;
        var temp = this.state.valueCollateralRealEstate;
        temp.address = value;
        this.setState(temp);
        flag = true;
    }
      onChangeEstate(e){
        const value = e.target.value;
          flag = true
        valueCollateralRealEstate.typerealestate = value;
        typeofrealestate = '';
          var filterestate = listtypeofestate.filter( (item) => {
              return item.id == e.target.value
          })
          filterestate.map(function (item) {
              typeofrealestate = item.name;
          })

          var temp = this.state.valueCollateralRealEstate;
          temp.typerealestate = value;
          this.setState(temp);
      }
      onChangeProofOwnership(e){
          const value = e.target.value;
          proofownership = value;
          var temp = this.state.valueCollateralRealEstate;
          temp.proofofownership = value;
          valueCollateralRealEstate.proofofownership = value
          this.setState(temp);
          flag = true
      }
      onchangecondition(e){
          const value = e.target.value;
          valueCollateralRealEstate.condition = value;
          condition = value;
          var temp = this.state.valueCollateralRealEstate;
          temp.condition = value;
          this.setState(temp);
          flag = true;
      }

      onReturnData(){ 
          console.log(this.state)
          this.props.collateralList(this.state)
      }
    OnChangeProvince(e){
        var str = e.target.value;
        valueCollateralRealEstate.provinceid = value;
        this.state.valueProv = str;
        var temp = this.state.valueCollateralRealEstate;
        temp.provinceid = value;
        this.setState(temp);
        flag = true
    }

    myChangeHandler = (event) => {
        this.setState({valueProv: event.target.value});
        valueCollateralRealEstate.provinceid = event.target.value;
        provincee = '';
        var filterprovince = this.state.posts.filter( (item) => {
            return item.locationCode == event.target.value
        })
        filterprovince.map(function (item) {
            provincee = item.locationName;
        })
        var temp = this.state.valueCollateralRealEstate;
        temp.provinceid = event.target.value;
        this.setState(temp);
        flag = true;

    }
    setEntity() {
        var entity = this.props.detailcollateral;
        if (typeof entity !== "undefined" && !flag){
            this.state.valueCollateralRealEstate.typerealestate =entity.typerealestate
            valueCollateralRealEstate.typerealestate = entity.typerealestate

            valueCollateralRealEstate.condition = entity.condition
            this.state.valueCollateralRealEstate.condition = entity.condition

            valueCollateralRealEstate.year = entity.year
            this.state.valueCollateralRealEstate.year = entity.year

            valueCollateralRealEstate.rooms = entity.rooms
            this.state.valueCollateralRealEstate.rooms = entity.rooms

            valueCollateralRealEstate.address = entity.address
            this.state.valueCollateralRealEstate.address = entity.address

            valueCollateralRealEstate.provinceid = entity.provinceid
            this.state.valueCollateralRealEstate.provinceid = entity.provinceid
            this.state.valueProv = entity.provinceid;

            idregencies = entity.regenciesid
            iddistrict = entity.districtid
            valueCollateralRealEstate.size = entity.size
            this.state.valueCollateralRealEstate.size = entity.size

            valueCollateralRealEstate.proofofownership = entity.proofofownership
            this.state.valueCollateralRealEstate.proofofownership = entity.proofofownership
            typeofrealestate = '';
            var filterestate = listtypeofestate.filter( (item) => {
                return item.id == entity.typerealestate
            })
            filterestate.map(function (item) {
                typeofrealestate = item.name;
            })
            condition = entity.condition
            yearbuild = entity.year
            rooms = entity.rooms
            addresss = entity.address
            provincee = entity.province.locationName
            sizee = entity.size
            proofownership = entity.proofofownership
        }
        flag = false;
    }
    render(){
        this.setEntity()

        let maxOffset = 50;
        let thisYear = (new Date()).getFullYear();
        let allYears = [];
        for(let x = 0; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }
        const CyearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});
        return(
            <div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Real Estate')}</b></h4>
                                <select className="form-control input-lg"
                                            data-smart-validate-input="" data-required=""
                                            name="realestate" 
                                            onChange={this.onChangeEstate.bind(this)}
                                            defaultValue={""} value={this.state.valueCollateralRealEstate.typerealestate}>
                                            <option value="" selected={true}>{LanguageStore.translate('Type of Real Estate')}</option>
                                        {
                                        listtypeofestate.map(function (item) {
                                            return (
                                                <option key={item.id} value={item.id}>{LanguageStore.translate(item.name)}</option>

                                            )
                                        })}
                                        </select> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="condition" style={{textAlign:"left"}}><b>{LanguageStore.translate('Condition')}</b></h4>
                                <textarea rows="3" placeholder="Describe the condition" 
                                    className="form-control input-md" required  data-message="Please specify this condition"
                                    id="example-textarea" data-minlength="10" data-maxLength="255"
                                    name="condition" value={this.state.valueCollateralRealEstate.condition }
                                    onChange={this.onchangecondition.bind(this)}>
                                    </textarea>
                            </div>
                        </div>
                    </div>
                </div>     
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="yearbuild" style={{textAlign:"left"}}><b>{LanguageStore.translate('Year Build')}</b></h4>
                                <select className="form-control input-lg"
                                            data-smart-validate-input="" data-required=""
                                            name="year"
                                            onChange={this.onChangeYearBuild.bind(this)} value={this.state.valueCollateralRealEstate.year}
                                            defaultValue={""}>
                                            <option value="0" disabled="true">{LanguageStore.translate('Select Year')}</option>
                                            {CyearList}
                                      </select>    
                            </div>
                        </div>
                    </div>
                </div>                
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Rooms')}</b></h4>
                                  <input className="form-control input-lg"
                                            placeholder="Rooms" type="number" min="0"
                                            data-smart-validate-input="" data-required="" 
                                            name="numrooms"
                                            onChange={this.onChangeRooms.bind(this)} value={this.state.valueCollateralRealEstate.rooms}
                                            data-message="Please specify the room number"/>
                            </div>
                        </div>
                    </div>
                </div>            
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="inputAddress" style={{textAlign:"left"}}><b>{LanguageStore.translate('Address')}</b></h4>
                                <textarea rows="4" placeholder="Full Address" 
                                    className="form-control input-md" required  data-message="Please specify your address"
                                    id="example-textarea" data-minlength="10" data-maxLength="255"
                                    name="address"
                                    onChange={this.onChangeAddress.bind(this)} value={this.state.valueCollateralRealEstate.address}
                                    >
                                    </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 style={{float:"left"}}><b>{LanguageStore.translate('Province')}</b></h4>
                                <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required=""
                                        name="province" defaultValue={""}
                                        onChange={this.myChangeHandler} value={this.state.valueCollateralRealEstate.provinceid}
                                >
                                    <option value="0" selected={true}>Choose</option>
                                    {

                                        this.state.posts.map(function (item) {
                                            return (
                                                <option key={item.locationCode} value={item.locationCode}>{item.locationName}</option>

                                            )
                                        })}

                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <TypeCity
                    idcity={idregencies}
                    iddistrict={iddistrict}
                    no={'4'}
                    DivState={this.state.valueProv}
                    onChangeAddress= {this.OnChangeProvince.bind(this)}
                />

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Size')}</b></h4>
                                <input className="form-control input-lg"
                                            placeholder="Total Area, L * W, in meter squaresize" type="number"
                                            data-smart-validate-input="" data-required="" 
                                            name="size" value={this.state.valueCollateralRealEstate.size}
                                            onChange={this.onChangeSize.bind(this)}
                                            data-message="please specify the area's size" min="0"/>
                                            <div className="note">
                                <strong>Note:</strong> format text input in  m^2.
                            </div>
                            </div>
                        </div>
                    </div>
                </div>       
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Proof of Ownership')}</b></h4>
                                 <input className="form-control input-lg"
                                            placeholder="Proof of Ownership" type="text" value={this.state.valueCollateralRealEstate.proofofownership}
                                            data-smart-validate-input="" data-required="Please specify the Ownership" 
                                            name="certnumowner"
                                            onChange={this.onChangeProofOwnership.bind(this)}
                                            data-message="Please specify the Ownership"/>
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
                      {/*< br></br>*/}
                      {/*<button name="submit" type="button" onClick={this.uploadFile.bind(this)}>Upload</button>*/}
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