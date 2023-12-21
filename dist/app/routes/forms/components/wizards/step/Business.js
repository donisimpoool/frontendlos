import React from 'react'
import division from '../../../../../components/forms/commons/division'
import TypeCity from "../Type/TypeCity";
import {familyvalue} from "./Family";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
import {suburllistprovince,suburllistbusiness} from "../../../../../config/baseUrl";
import {headers} from "../../../../../config/ConfigParam";

export var businessvalue = {companyname: "",
    companyaddress:"",
    province:"0",
    division:"",
    position:"",
    duration:"0",
    totalnumberemp:"0",
    businessline:"",
    idregencies:"0",
    iddistrict:"0"};
export var companyname,companyaddress='',provincenamebusiness='',divisionname='',positionname='',durationtime='0',totalnumberemp='0',businessline=''
export var listposition = [
    {id:'CEO-CFO',name:'CEO-CFO'},
    {id:'uppermanager',name:'Up Manager'},
    {id:'middlemanager',name:'Middle Manager'},
    {id:'employee',name:'Employee'},
    {id:'civilservant',name:'Civil servant'}
]
export var listbusinessline = [
    {id:'agriculture',name:'Agriculture'},
    {id:'construction',name:'Construction'},
    {id:'manufacturing',name:'Manufacturing'},
    {id:'miningandutilities',name:'Mining and Utilities'},
    {id:'financial',name:'Financial'},
    {id:'generalservices',name:'General Services'},
    {id:'insuranceandbusinessservices',name:'Insurance and Business Services'},
    {id:'other',name:'Other'}
]
var flag = false,idregencies='0',iddistrict='0'
export default class Business extends React.Component{ 
    constructor(){
        super()
        this.state = {       
            value: "0",
            companyAddress: {},
            business: '',
            valueProv:'',
            valuebusiness:{
                companyname: "",
                companyaddress:"",
                province:"0",
                division:"",
                position:"",
                duration:"0",
                totalnumberemp:"0",
                businessline:"",
                idregencies:"0",
                iddistrict:"0"
            },
            posts:[],
            listbusinessline:[]

        }
    }
    componentDidMount(){
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
        url = suburllistbusiness
        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                // console.log(json.data)
                this.setState({listbusinessline: json.data})
            )
    }
    onchangecompanyname(e){
        var str = e.target.value;
        companyname = str;
        var value = this.state.valuebusiness;
        value.companyname = str;
        this.setState(value);
        businessvalue = this.state.valuebusiness;
        flag = true;
    }
    onchangecompanyaddress(e){
        var str = e.target.value;
        companyaddress = str;
        var value = this.state.valuebusiness;
        value.companyaddress = str;
        this.setState(value);
        businessvalue = this.state.valuebusiness;
        flag = true;
    }
    onchangeprovince(e){
        var str = e.target.value;
        var value = this.state.valuebusiness;
        value.province = str;
        this.setState(value);
        businessvalue = this.state.valuebusiness;
        this.state.valueProv = str;
        var filterprovince = this.state.posts.filter( (item) => {
            return item.locationCode == e.target.value
        })
        provincenamebusiness= '';
        filterprovince.map(function (item) {
            provincenamebusiness = item.locationName;
        })
        flag = true;
    }
    onchangedivision(e){
        var str = e.target.value;
        var value = this.state.valuebusiness;
        value.division = str;
        this.setState(value);
        businessvalue = this.state.valuebusiness;
        var filterdivisi = division.filter( (item) => {
            return item.key == e.target.value
        })
        divisionname= '';
        filterdivisi.map(function (item) {
            divisionname = item.value;
        })
        flag = true;
    }
    onchangeposition(e){
        var str = e.target.value;
        var value = this.state.valuebusiness;
        value.position = str;
        this.setState(value);
        businessvalue = this.state.valuebusiness;
        var filterposition = listposition.filter( (item) => {
            return item.id == e.target.value
        })
        positionname= '';
        filterposition.map(function (item) {
            positionname = item.name;
        })
        flag = true;
    }
    onchangeduration(e){
        var str = e.target.value;
        durationtime = str;
        var value = this.state.valuebusiness;
        value.duration = str;
        this.setState(value);
        businessvalue = this.state.valuebusiness;
        flag = true;
    }
    onchangetotalnumberemp(e){
        var str = e.target.value;
        totalnumberemp = str;
        var value = this.state.valuebusiness;
        value.totalnumberemp = str;
        this.setState(value);
        businessvalue = this.state.valuebusiness;
        flag = true;
    }
    onchangebusinessline(e){
        var str = e.target.value;
        businessline = str;
        var value = this.state.valuebusiness;
        value.businessline = str;
        this.setState(value);
        businessvalue = this.state.valuebusiness;
        flag = true;
    }
    setEntity() {
        var entity = this.props.databusiness;
        iddistrict = ""
        if (typeof entity !== "undefined" && !flag){
            this.state.valuebusiness.companyname = entity.companyname
            this.state.valuebusiness.companyaddress = entity.companyaddress
            this.state.valuebusiness.province = entity.provinceid
            this.state.valueProv = entity.provinceid;
            this.state.valuebusiness.division = entity.division
            this.state.valuebusiness.position = entity.position
            this.state.valuebusiness.duration = entity.duration
            this.state.valuebusiness.totalnumberemp =  entity.numberofemployees
            this.state.valuebusiness.businessline = entity.businessline
            idregencies = entity.idregencies
            iddistrict = entity.iddistrict

            companyname = entity.companyname
            companyaddress = entity.companyaddress
            var filterprovince = this.state.posts.filter( (item) => {
                return item.locationCode == entity.provinceid
            })
            provincenamebusiness= '';
            filterprovince.map(function (item) {
                provincenamebusiness = item.locationName;
            })
            var filterdivisi = division.filter( (item) => {
                return item.key == entity.division
            })
            divisionname= '';
            filterdivisi.map(function (item) {
                divisionname = item.value;
            })
            var filterposition = listposition.filter( (item) => {
                return item.id == entity.position
            })
            positionname= '';
            filterposition.map(function (item) {
                positionname = item.name;
            })
            durationtime = entity.duration
            totalnumberemp = entity.numberofemployees
            businessline = entity.businessline
            businessvalue = this.state.valuebusiness;
        }
        flag = false;
    }
    render(){
        this.setEntity()
        return(
            <div>
                <div className="row" >
                 <div className="col-sm-6">
                    <div className="form-group">
                    <div className="inputGroup-sizing-default">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Company')}</b></h4>
                         <input className="form-control input-lg"
                                placeholder={LanguageStore.translate('Company')} type="text"
                                name="companyName"
                                autoComplete="off"
                                onChange={this.onchangecompanyname.bind(this)}
                                data-smart-validate-input="" data-required="" value={this.state.valuebusiness.companyname}
                                data-message={LanguageStore.translate('Company')}/>
                                </div>
                            </div>
                            </div>
                        </div> 
                        <div className="row" >
                          <div className="col-sm-6">
                            <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                  <h4  style={{float:"left"}}><b>{LanguageStore.translate('Address Company')}</b></h4>
                                        <textarea rows="5" placeholder={LanguageStore.translate('Address Company')}
                                        className="form-control input-md" required  data-message="Please specify your address"
                                        id="example-textarea" data-minlength="10" data-maxLength="255" value={this.state.valuebusiness.companyaddress}
                                        onChange={this.onchangecompanyaddress.bind(this)}
                                        name="currentAddress"
                                        >
                                        </textarea>
                                        </div>
                                    </div>
                                    </div>
                                </div> 
                                <br/>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                               <h4 style={{float:"left"}}><b>{LanguageStore.translate('Province')}</b></h4>


                            <select className="form-control input-lg"
                                    data-smart-validate-input="" data-required=""
                                    name="province" defaultValue={""}
                                    onChange={this.onchangeprovince.bind(this)} value={this.state.valuebusiness.province}
                            >
                                <option value="0" disabled={true}>{LanguageStore.translate('Choose')}</option>
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
                    no={'3'}
                    DivState={this.state.valueProv}
                    // onChangeAddress= {this.OnChangeProvince.bind(this)}
                />
                                            <br/>
                                        <div className="row" >
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <div className="inputGroup-sizing-default">
                                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Division')}</b></h4>

                                                    <select className="form-control input-lg"
                                                            data-smart-validate-input="" data-required=""
                                                            name="province" defaultValue={""} value={this.state.valuebusiness.division}
                                                            onChange={this.onchangedivision.bind(this)}
                                                    >
                                                        <option value="" disabled={true}>{LanguageStore.translate('Choose')}</option>
                                                        {
                                                            division.map(function (item) {
                                                                return (
                                                                    <option key={item.key} value={item.key}>{item.value}</option>

                                                                )
                                                            })}

                                                    </select>
                                                        </div>
                                                    </div>
                                                 </div>
                                            </div>
                                            <br />
                                    <div className="row" >
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <div className="inputGroup-sizing-default">
                                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Position')}</b></h4>
                                                    <select className="form-control input-lg"
                                                        data-smart-validate-input="" data-required=""
                                                        name="position" defaultValue={"0"}
                                                        onChange={this.onchangeposition.bind(this)} value={this.state.valuebusiness.position}
                                                    >
                                                    <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                                        {
                                                            listposition.map(function (item) {
                                                                return (
                                                                    <option key={item.id} value={item.id}>{LanguageStore.translate(item.name)}</option>

                                                                )
                                                            })}
                                                    </select> 
                                               </div>
                                           </div>
                                        </div>
                                    </div>
                                    <br />
                                            <div className="row" >
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <div className="inputGroup-sizing-default">
                                                    <h4  style={{float:"left"}}><b>{LanguageStore.translate('Duration')}</b><label>&nbsp;( {LanguageStore.translate('Months')} )</label></h4>
                                                         <input className="form-control input-lg"
                                                                placeholder="Length of Service with this Company, in months"
                                                                type="number" 
                                                                onChange={this.onchangeduration.bind(this)}
                                                                name="employmentkDuration" 
                                                                data-smart-validate-input=""
                                                                data-required="" data-duration="" min="0" value={this.state.valuebusiness.duration}
                                                                data-message-required="We need your duration"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> 
                                                <div className="row" >
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <div className="inputGroup-sizing-default">
                                                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Number Of Employee')}</b></h4>
                                                            <input className="form-control input-lg"
                                                                       placeholder={LanguageStore.translate('Number Of Employee')} type="number"
                                                                       name="totalNoEmployees" 
                                                                       onChange={this.onchangetotalnumberemp.bind(this)}
                                                                       data-smart-validate-input="" value={this.state.valuebusiness.totalnumberemp}
                                                                       data-required=""min="0" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                    <div className="row" >
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <div className="inputGroup-sizing-default">
                                                            <h4  style={{float:"left"}}><b>{LanguageStore.translate('Business line or industry')}</b></h4>
                                                                    <select className="form-control input-lg"
                                                                            data-smart-validate-input="" data-required=""
                                                                            name="businessIndustry" 
                                                                            onChange={this.onchangebusinessline.bind(this)} value={this.state.valuebusiness.businessline}
                                                                            defaultValue={"0"} required> 
                                                                        <option required value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                                                        {
                                                                            this.state.listbusinessline.map(function (item) {
                                                                                return (
                                                                                    <option key={item.id} value={item.id}>{LanguageStore.translate(item.name)}</option>

                                                                                )
                                                                            })}
                                                            
                                                                    </select> 
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>                      
                                         
            </div>
            
        )
        
    }
}