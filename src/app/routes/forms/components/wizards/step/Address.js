import React from 'react'

import SelectAddress from './SelectAddress';
import SelectUntil from '../SelectUntil';
import TypeCity, {namecity} from '../Type/TypeCity';
import {personelvalue} from "./Personal";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
import {suburllistprovince} from "../../../../../config/baseUrl";
import {headers} from "../../../../../config/ConfigParam";

export var mainaddress='',provincename='',postalcode='',ownershipstatus='',isCollateral='',livedinaddress='',location='',rt='',rw='';
export var Addressvalue = {mainaddress: "",
    province:"0",
    postalcode:"",
    ownershipstatus:"",
    collateral:"",
    livedinyears:"",
    idregencies:"0",
    iddistrict:"0",
    location:"",
    rt:"",
    rw:"",
    idvillage:0};
export var variabelownershipstatus = [
    {id:'own',name:'Own'},
    {id:'familyhouse',name:'Family House'},
    {id:'rentannually',name:'Rent Annually'},
    {id:'rentmonthly',name:'Rent Monthly'}
]
export var listlocation = [
    {id:'komplekperumahan',name:'Komplek Perumahan'},
    {id:'apartemen',name:'Apartemen'},
    {id:'rumahsusun',name:'Rumah Susun'},
    {id:'perkampungan',name:'Perkampungan'}
]
export var listprovince = [];
var flag = false,idcity="0",iddistrict="0";
export default class Address extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            valueAdditional: false,
            valueUntil: false,
            valueProv:'',
            // addressList: this.props.address_state
            address: {
                mainAddress: true
            },
            addressAdd:{
                mainAddress: false
            },
            addressList: [],
            valueaddress:{
                mainaddress: "",
                province:"0",
                postalcode:"",
                ownershipstatus:"",
                collateral:"",
                livedinyears:"",
                idregencies:"0",
                iddistrict:"0",
                location:"",
                rt:"",
                rw:"",
                idvillage:0
            },
            posts: [],
            variabelkota:[
                {namakota:'Tangearang',idkota:'11', idprovinsi:'1'},
                {namakota:'Tangearang Selatan',idkota:'12', idprovinsi:'1'},
                {namakota:'Depok',idkota:'21', idprovinsi:'2'}
            ]

        }
    }
    componentDidMount(){
        //listprovince
        var url = suburllistprovince;
        const otherPram={
            method:"GET",
            headers: headers
        }

        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                // console.log(json.data)
                this.setState({posts: json.data})
            )
    }

    onAddAdditionalAddress(){
        this.setState({
            valueAdditional: !this.state.valueAdditional
        }, console.log(this.state.valueAdditional));
    }

    onChangeUntil(e){
        console.log(e.target.value)
        if(e.target.value==1){
            this.setState(prevState =>({
                valueUntil: true,
                address: {
                    ...prevState.address,
                    collateralUse: true
                }
            })) 
        }
        else {
            this.setState(prevState =>({
                valueUntil: false,
                address: {
                    ...prevState.address,
                    collateralUse: false
                }
            }))
        } 
    }
    onchangecollateral(e){
        var str = e.target.value;
        isCollateral = 'No';
        if(str == 'Y'){
            isCollateral = 'Yes';
        }
        var value = this.state.valueaddress;
        value.collateral = str;
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        console.log("value", str)
        flag = true;
    }
    onChangePostalCode(e){
        var str = e.target.value;
        postalcode = str;
        var value = this.state.valueaddress;
        value.postalcode = str;
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        flag = true;
    }
    onChangeAddress(e){
        var str = e.target.value;
        mainaddress = str;
        var value = this.state.valueaddress;
        value.mainaddress = str;
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        flag = true;
    }
    onChangeOwnershipStatus(e){
        var str = e.target.value;
        var value = this.state.valueaddress;
        value.ownershipstatus = str;
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        ownershipstatus= '';
        var filterownershipstatus = variabelownershipstatus.filter( (item) => {
            return item.id == e.target.value
        })
        filterownershipstatus.map(function (item) {
            ownershipstatus = item.name;
        })
        flag = true;
    }
    onChangeLocation(e){
        var str = e.target.value;
        var value = this.state.valueaddress;
        value.location = str;
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        location= '';
        var filterlocation = listlocation.filter( (item) => {
            return item.id == e.target.value
        })
        filterlocation.map(function (item) {
            location = item.name;
        })
        flag = true;
    }

    OnChangeProvince(e){
        var str = e.target.value;
        var value = this.state.valueaddress;
        value.province = str;
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        this.state.valueProv = str;
        var filterprovince = this.state.posts.filter( (item) => {
            return item.locationCode == e.target.value
        })
        provincename= '';
        filterprovince.map(function (item) {
            provincename = item.locationName;
        })
        flag = true
        this.onchangepostalcodebykelurahan('');
    }
    OnChangeLivedAddressSinceYear(e){
        var str = e.target.value;
        livedinaddress = str;
        var value = this.state.valueaddress;
        value.livedinyears = str;
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        flag = true;
    }

    OnChangeRT(e){
        var str = e.target.value;
        rt = str
        var value = this.state.valueaddress;
        value.rt = str
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        flag = true;
    }

    OnChangeRW(e){
        var str = e.target.value;
        rw = str
        var value = this.state.valueaddress;
        value.rw = str
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        flag = true;
    }

    onChangeAddressAdditional(e){
        const value = e.target.value;
        const addressData = e.target.name;
        this.setState(prevState =>({
            addressAdd: {
                ...prevState.addressAdd,
                [addressData]: value
            }, 
        }),
        () => {
            this.setState({
                addressList: [this.state.address, this.state.addressAdd]
            },
            this.onReturnAddress.bind(this));
        }, 
        console.log("This is whats being returned", this.state.addressList)
        )
    }
    onReturnAddress(){
        this.props.address_update(this.state.addressList);
        this.props.onGetData();
    }
    onchangepostalcodebykelurahan = (kodepos) => {
        var str = kodepos;
        postalcode = str;
        var value = this.state.valueaddress;
        value.postalcode = str;
        this.setState(value);
        Addressvalue = this.state.valueaddress;
        flag = true;
    }
    setEntity() {
        var entity = this.props.dataaddress;
        iddistrict = ""
        if (typeof entity !== "undefined" && !flag){
            this.state.valueaddress.mainaddress = entity.mainaddress
            this.state.valueaddress.province = entity.provinceid
            this.state.valueProv = entity.provinceid
            this.state.valueaddress.location = entity.location
            location = entity.location
            idcity = entity.idregencies
            iddistrict = entity.iddistrict
            this.state.valueaddress.postalcode = entity.postalcode
            this.state.valueaddress.ownershipstatus = entity.ownershipstatus
            this.state.valueaddress.collateral = entity.usedforcollateral
            this.state.valueaddress.livedinyears = entity.liveinaddress
            Addressvalue = this.state.valueaddress
            mainaddress = entity.mainaddress
            provincename = entity.provincemain.locationName
            postalcode = entity.postalcode
            ownershipstatus= '';
            var filterownershipstatus = variabelownershipstatus.filter( (item) => {
                return item.id == entity.ownershipstatus
            })
            filterownershipstatus.map(function (item) {
                ownershipstatus = item.name;
            })
            isCollateral = 'No';
            if(entity.usedforcollateral == 'Y'){
                isCollateral = 'Yes';
            }
            livedinaddress = entity.liveinaddress

        }

        flag = false;
    }
    render(){
        this.setEntity()

        let  maxOffset = 25;
        let thisYear = (new Date()).getFullYear();
        let allYears = [];
        for(let x = 0; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }

        const yearList = allYears.map((x) => {return(<option value={x} key={x}>{x}</option>)});
        return(
            <div>
             <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                    <div className="inputGroup-sizing-default">
                                <h4 style={{float:"left"}}><b>{LanguageStore.translate('Main Address')} </b></h4>
                                <textarea rows="5" placeholder={LanguageStore.translate('Main Address')}
                                 className="form-control input-md" required  data-message="Please specify your address"
                                name="currentAddress"
                                onChange={this.onChangeAddress.bind(this)} value={this.state.valueaddress.mainaddress}
                                id="example-textarea" data-minlength="10" data-maxLength="255">
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
                                    name="province" defaultValue={""} value={this.state.valueaddress.province}
                                    onChange={this.OnChangeProvince.bind(this)}
                            >
                                <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                {

                                    this.state.posts.map(function (item) {
                                        if(item.locationName !== '') {
                                            return (
                                                <option key={item.locationCode}
                                                        value={item.locationCode}>{item.locationName}</option>

                                            )
                                        }
                                    })}

                            </select>
                            </div>
                        </div>
                      </div>
                    </div>
                    <TypeCity
                        no={'1'}
                        DivState={this.state.valueProv}
                        idcity={idcity}
                        iddistrict={iddistrict}
                        onChangeAddress= {this.OnChangeProvince.bind(this)}
                        listkelurahan={this.props.listkelurahan}
                        onchangepostalcodebykelurahan={this.onchangepostalcodebykelurahan.bind('')}
                    />

                    <div className="row" >
                        <div className="col-sm-6">
                            <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                 <h4  style={{float:"left"}}><b>{LanguageStore.translate('Postal')}</b></h4>
                                     <input className="form-control input-lg"
                                            placeholder={LanguageStore.translate('Postal')} type="number"
                                            name="postalCode"
                                            onChange={this.onChangePostalCode.bind(this)}
                                            data-smart-validate-input="" maxLength="5"
                                            data-required="" data-minlength="5" value={this.state.valueaddress.postalcode} />
                                        </div>
                                    </div>
                                    </div>
                            </div>
                            <div className="row" >
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <div className="inputGroup-sizing-default">
                                            <h4  style={{float:"left"}}><b>{LanguageStore.translate('RT')}</b></h4>
                                            <input className="form-control input-lg"
                                                   placeholder="RT" type="number"
                                                   name="RT"
                                                   onChange={this.OnChangeRT.bind(this)}
                                                   data-smart-validate-input="" maxLength="2"
                                                   data-required="" data-minlength="1" value={this.state.valueaddress.rt} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <div className="inputGroup-sizing-default">
                                            <h4  style={{float:"left"}}><b>{LanguageStore.translate('RW')}</b></h4>
                                            <input className="form-control input-lg"
                                                   placeholder="RW" type="number"
                                                   name="RW"
                                                   onChange={this.OnChangeRW.bind(this)}
                                                   data-smart-validate-input="" maxLength="2"
                                                   data-required="" data-minlength="1" value={this.state.valueaddress.rw} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-sm-6">
                                    <div className="form-group">
                                         <div className="inputGroup-sizing-default">                    
                                                    <h4 ><b>{LanguageStore.translate('Ownership Status')}</b></h4>
                                                <select className="form-control input-lg"
                                                    data-smart-validate-input="" data-required=""
                                                    name="ownershipStatus" defaultValue={""} value={this.state.valueaddress.ownershipstatus}
                                                    onChange={this.onChangeOwnershipStatus.bind(this)}
                                                    >
                                                <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                                    {
                                                        variabelownershipstatus.map(function (item) {
                                                            return (
                                                                <option key={item.id} value={item.id}>{LanguageStore.translate(item.name)}</option>

                                                            )
                                                        })}
                                                </select> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="row" hidden={this.state.valueaddress.ownershipstatus == "" || this.state.valueaddress.ownershipstatus == "rentannually" || this.state.valueaddress.ownershipstatus == "rentmonthly"}>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <div className="inputGroup-sizing-default">
                                            <h4 ><b>{LanguageStore.translate('Location')}</b></h4>
                                            <select className="form-control input-lg"
                                                    data-smart-validate-input="" data-required=""
                                                    name="location" defaultValue={""} value={this.state.valueaddress.location}
                                                    onChange={this.onChangeLocation.bind(this)}
                                            >
                                                <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                                {
                                                    listlocation.map(function (item) {
                                                        return (
                                                            <option key={item.id} value={item.id}>{item.name}</option>

                                                        )
                                                    })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" hidden={this.state.valueaddress.ownershipstatus == "" || this.state.valueaddress.ownershipstatus == "rentannually" || this.state.valueaddress.ownershipstatus == "rentmonthly"}>
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Has been used as collateral elsewhere')}</b></h4>
                                        <br/>
                                        <div className="col-xs-4 col-lg-8">
                                    
                                                <div className="inputGroup-sizing-default">
                                                    <label className="radio state-error">
                                                    <input type="radio" name="collateralUse"
                                                        onChange={this.onchangecollateral.bind(this)} checked={this.state.valueaddress.collateral === 'Y'}
                                                        value="Y"/>
                                                        {LanguageStore.translate('Yes')}</label>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label className="radio">
                                                    <input type="radio" name="collateralUse"
                                                        onChange={this.onchangecollateral.bind(this)} checked={this.state.valueaddress.collateral === 'N'}
                                                        value="N"/>
                                                        {LanguageStore.translate('No')}</label>
                                                </div>
                                         </div>
                                     </div>
                                </div>
                             
                            </div> 
                                {/*<SelectUntil */}
                                {/*    DivState={this.state.valueUntil}*/}
                                {/*    onChangeAddress = {this.onChangeAddress.bind(this)}*/}
                                {/*/>*/}
                                <br/>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <div className="input-group">                          
                                                  <h4 ><b>{LanguageStore.translate('Has lived in address since year')}</b></h4>
                                                    <select className="form-control input-lg" required
                                                        data-smart-validate-input="" data-required=""
                                                        name="usedYearSince"
                                                        onChange={this.OnChangeLivedAddressSinceYear.bind(this)} value={this.state.valueaddress.livedinyears}
                                                        defaultValue="0"
                                                        >
                                                        <option value="0" selected={true}>{LanguageStore.translate('Select Year')}</option>
                                                        {yearList}
                                                    </select>    
                                            </div>
                                        </div>
                                    </div>
                                </div>
                <button id="js-checkbox-toggle" data-toggle="button" 
                className="btn  btn-md btn-primary mb-g waves-effect waves-themed" 
                value={this.state.valueAdditional} 
                onClick={this.onAddAdditionalAddress.bind(this)}>
                +{LanguageStore.translate('Additional Address')}</button>
                <br/>
                <SelectAddress
                    dataaddress = {this.props.dataaddress}
                    listownershipstatus={variabelownershipstatus}
                    DivState={this.state.valueAdditional}
                    listprovince={this.state.posts}
                    onChangeAddressAdditional={this.onChangeAddressAdditional.bind(this)}
                />
                <br/>
            </div>
            
        )
        
    }
}