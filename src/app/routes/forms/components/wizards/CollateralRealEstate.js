import React from 'react'
import DropzoneInput from '../../../../components/forms/inputs/DropzoneInput'
import TypeCity from "./Type/TypeCity";
import {provincename} from "./step/Address";
import {filedocument} from "./step/Document";
import {bankvalue} from "./step/Bank";
import LanguageStore from "../../../../components/i18n/LanguageStore";
import {keyset, suburllistcity, suburllistdistrict, suburllistprovince} from "../../../../config/baseUrl";
import {convertByteToMB} from "../../../../config/FunctionGlobal";
import {info} from "../../../auth/containers/Login";
import {msglimitfile} from "../../../../config/KosaKata";
import {DecrypsCode} from "../../../../config/Encrypt";
import {headers} from "../../../../config/ConfigParam";

export var typeofrealestate = '',conditions='',yearbuild='',rooms='',addresss='',provincee='',citynamecollre='',districtnamecollre='',sizee='',proofownership='',filedocumentRealEstate={filedoc:[],totalsize:0},isuploadfileRE='NO'
export var valueCollateralRealEstate = {
    applicationid:"",
    typerealestate:"",
    conditions:"",
    years:"0",
    rooms:"0",
    address:"",
    provinceid:"0",
    regenciesid:"0",
    districtid:"0",
    sizes:"",
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
        listkotaTemplate:[],
        listkota:[],
        listkecamatanTemplate:[],
        listkecamatan:[],
        posts:[],
        valuedocument:{
            filedoc:[],
            totalsize:0
        },
        valueCollateralRealEstate : {
            applicationid:"",
            typerealestate:"",
            conditions:"",
            years:"0",
            rooms:"0",
            address:"",
            provinceid:"0",
            regenciesid:"0",
            districtid:"0",
            sizes:"",
            proofofownership:""
        }
      };
    uploadFile(event) {
        var listdoc=[];
        var sizes = 0
        for(var i=0; i < event.target.files.length; i++){
            var file = event.target.files[i];
            sizes += file.sizes
            listdoc.push(file)
        }
        var value = this.state.valuedocument;
        value.filedoc = listdoc;
        value.totalsize = sizes
        filedocumentRealEstate = this.state.valuedocument;
        isuploadfileRE='YES';

        var totalsizemb = convertByteToMB(sizes);
        // if(totalsizemb > JSON.parse(DecrypsCode(localStorage.getItem(keyset))).sizefile){
        //     alert(msglimitfile(info.sizefile));
        // }
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
                // this.setState({posts: json.data})
                this.handlesetProvinci(json)
            )
    }

    handlesetProvinci(json){
        this.setState({posts: json.data});
        this.getListCity();
    }

    getListCity(){
        var url = suburllistcity;
        const otherPram={
            method:"GET",
            headers: headers
        }
        fetch(url,otherPram)
            .then(response => response.json())

            .then(json =>
                this.getListKecamatan(json)
            )
    }

    getListKecamatan(json){
        this.setState({listkota: [], listkotaTemplate:json.data})
        var url = suburllistdistrict;
        const otherPram={
            method:"GET",
            headers: headers
        }
        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                this.setState({listkecamatan: [], listkecamatanTemplate:json.data})
            )
    }

    OnChangeKecamatan(e){
        var str = e.target.value;
        var value = this.state.valueCollateralRealEstate;
        value.districtid = str;
        this.setState(value);

        let getData = this.state.listkecamatan.filter(output => output.iddistrict == str);
        districtnamecollre = "";
        if(getData.length > 0){
            districtnamecollre = getData[0].namedistrict;
        }
    }

    OnChangeCity(e){
        var str = e.target.value;
        var value = this.state.valueCollateralRealEstate;
        value.regenciesid = str;
        this.setState(value);

        let listkecamatan = this.state.listkecamatanTemplate.filter(output => output.idregencies == str);
        this.setState({listkecamatan:listkecamatan});

        let getKota = this.state.listkota.filter(output => output.idregencies == str);
        citynamecollre = "";
        if(getKota.length > 0){
            citynamecollre = getKota[0].nameregencies;
        }
    }
      onChangeSize(e){
          const value = e.target.value;
          sizee = value;
          var temp = this.state.valueCollateralRealEstate;
          temp.sizes = value;
          valueCollateralRealEstate.sizes = value
          this.setState(temp);
          flag = true;
      }
      onChangeYearBuild(e){
          const value = e.target.value;
          valueCollateralRealEstate.years = value;
          yearbuild = value;
          var temp = this.state.valueCollateralRealEstate;
          temp.years = value;
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
          valueCollateralRealEstate.conditions = value;
          conditions = value;
          var temp = this.state.valueCollateralRealEstate;
          temp.conditions = value;
          this.setState(temp);
          flag = true;
      }

      onReturnData(){ 
          console.log(this.state)
          this.props.collateralList(this.state)
      }
    OnChangeProvince(e){
        var str = e.target.value;
        valueCollateralRealEstate.provinceid = str;
        this.state.valueProv = str;
        var temp = this.state.valueCollateralRealEstate;
        temp.provinceid = str;
        this.setState(temp);

        provincee = '';
        var filterprovince = this.state.posts.filter( (item) => {
            return item.locationCode == e.target.value
        })
        filterprovince.map(function (item) {
            provincee = item.locationName;
        })

        let listkota = this.state.listkotaTemplate.filter(output => output.idprovince == str);
        this.setState({listkota:listkota});

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

        let listkota = this.state.listkotaTemplate.filter(output => output.idprovince == str);
        this.setState({listkota:listkota});
        flag = true;

    }
    setEntity() {
        var entity = this.props.detailcollateral;
        if (typeof entity !== "undefined" && !flag){
            this.state.valueCollateralRealEstate.typerealestate =entity.typerealestate
            valueCollateralRealEstate.typerealestate = entity.typerealestate

            valueCollateralRealEstate.conditions = entity.conditions
            this.state.valueCollateralRealEstate.conditions = entity.conditions

            valueCollateralRealEstate.years = entity.years
            this.state.valueCollateralRealEstate.years = entity.years

            valueCollateralRealEstate.rooms = entity.rooms
            this.state.valueCollateralRealEstate.rooms = entity.rooms

            valueCollateralRealEstate.address = entity.address
            this.state.valueCollateralRealEstate.address = entity.address

            valueCollateralRealEstate.provinceid = entity.provinceid
            this.state.valueCollateralRealEstate.provinceid = entity.provinceid
            this.state.valueProv = entity.provinceid;

            idregencies = entity.regenciesid
            iddistrict = entity.districtid
            valueCollateralRealEstate.sizes = entity.sizes
            this.state.valueCollateralRealEstate.sizes = entity.sizes

            valueCollateralRealEstate.proofofownership = entity.proofofownership
            this.state.valueCollateralRealEstate.proofofownership = entity.proofofownership
            typeofrealestate = '';
            var filterestate = listtypeofestate.filter( (item) => {
                return item.id == entity.typerealestate
            })
            filterestate.map(function (item) {
                typeofrealestate = item.name;
            })
            conditions = entity.conditions
            yearbuild = entity.years
            rooms = entity.rooms
            addresss = entity.address
            provincee = entity.province.locationName
            sizee = entity.sizes
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
                            <h4 className="conditions" style={{textAlign:"left"}}><b>{LanguageStore.translate('Condition')}</b></h4>
                                <textarea rows="3" placeholder="Describe the conditions" 
                                    className="form-control input-md" required  data-message="Please specify this conditions"
                                    id="example-textarea" data-minlength="10" data-maxLength="255"
                                    name="conditions" value={this.state.valueCollateralRealEstate.conditions }
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
                                            name="years"
                                            onChange={this.onChangeYearBuild.bind(this)} value={this.state.valueCollateralRealEstate.years}
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
                                        onChange={this.OnChangeProvince.bind(this)} value={this.state.valueCollateralRealEstate.provinceid}
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

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                               <h4 style={{float:"left"}}><b>{LanguageStore.translate('City')}</b></h4>
                            <select className="form-control input-lg"
                                    data-smart-validate-input="" data-required=""
                                    name="idregencies" defaultValue={""} value={this.state.valueCollateralRealEstate.regenciesid}
                                    onChange={this.OnChangeCity.bind(this)}
                            >
                                <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                {

                                    this.state.listkota.map(function (item) {
                                        if(item.nameregencies !== '') {
                                            return (
                                                <option key={item.idregencies}
                                                        value={item.idregencies}>{item.nameregencies}</option>

                                            )
                                        }
                                    })}

                            </select>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                               <h4 style={{float:"left"}}><b>{LanguageStore.translate('District')}</b></h4>
                            <select className="form-control input-lg"
                                    data-smart-validate-input="" data-required=""
                                    name="idregencies" defaultValue={""} value={this.state.valueCollateralRealEstate.districtid}
                                    onChange={this.OnChangeKecamatan.bind(this)}
                            >
                                <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                {

                                    this.state.listkecamatan.map(function (item) {
                                        if(item.namedistrict !== '') {
                                            return (
                                                <option key={item.iddistrict}
                                                        value={item.iddistrict}>{item.namedistrict}</option>

                                            )
                                        }
                                    })}

                            </select>
                            </div>
                        </div>
                      </div>
                    </div>
                {/* <TypeCity
                    idcity={idregencies}
                    iddistrict={iddistrict}
                    no={'4'}
                    DivState={this.state.valueProv}
                    onChangeAddress= {this.OnChangeProvince.bind(this)}
                /> */}

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Size')}</b></h4>
                                <input className="form-control input-lg"
                                            placeholder="Total Area, L * W, in meter squaresize" type="number"
                                            data-smart-validate-input="" data-required="" 
                                            name="sizes" value={this.state.valueCollateralRealEstate.sizes}
                                            onChange={this.onChangeSize.bind(this)}
                                            data-message="please specify the area's sizes" min="0"/>
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