import React from 'react'
import TypeDistrict from "./typeDistrict";
import BaliCity from "./BaliCity";
import TypeBali from "./TypeBali";
import {loanName} from "../step/Loan";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
import {suburllistcity} from "../../../../../config/baseUrl";
import {headers} from "../../../../../config/ConfigParam";

export var idcity = "0",idcity2 = "0",idcity3 = "0",idcity4 = "0",namecity='',namecity2='',namecity3='',namecity4='';
var flag = false,tempidcity="0";
export default class TypeCity extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // collateralId:"",
            valueCity:'',
            variabelkota:[
                {namakota:'Tangearang',idkota:'11', idprovinsi:'1'},
                {namakota:'Tangearang Selatan',idkota:'12', idprovinsi:'1'},
                {namakota:'Depok',idkota:'21', idprovinsi:'2'}
            ],
            listkota:[]
        }
    }

    componentDidMount(){
        var url = suburllistcity;
        const otherPram={
            method:"GET",
            headers: headers
        }
        fetch(url,otherPram)
            .then(response => response.json())

            .then(json =>
                this.setState({listkota: json.data})
            )
    }
    OnChangeCity(e){
        var str = e.target.value;
        console.log('OnChangeCity ',str);
        this.state.valueCity = str;
        idcity = str;

    }
    myChangeHandler = (event) => {
        var fromaddress = this.props.no;
        this.setState({valueCity: event.target.value});
        var filterkota = this.state.listkota.filter( (item) => {
            return item.idregencies == event.target.value
        })
        console.log('event.target.value ',event.target.value);
        console.log('myChangeHandler ',this.state.listkota);
        tempidcity = event.target.value;
        if(fromaddress == '1') {
            idcity = event.target.value;
            namecity = '';
            filterkota.map(function (item) {
                namecity = item.nameregencies;
            })
        }else if(fromaddress == '2'){
            namecity2 = '';
            idcity2 = event.target.value;
            filterkota.map(function (item) {
                namecity2 = item.nameregencies;
            })
        }else if(fromaddress == '3'){
            namecity3 = '';
            idcity3 = event.target.value;
            filterkota.map(function (item) {
                namecity3 = item.nameregencies;
            })
        }else{
            namecity4 = '';
            idcity4 = event.target.value;
            filterkota.map(function (item) {
                namecity4 = item.nameregencies;
            })
        }
        flag = true;
    }

    render(){
        var filterkota = this.state.listkota.filter( (item) => {
            return item.idprovince == this.props.DivState
        })
        if(!flag){
            tempidcity = this.props.idcity;
            this.state.valueCity = tempidcity;
            var filterkota = this.state.listkota.filter( (item) => {
                return item.idregencies == tempidcity
            })
            var fromaddress = this.props.no;
            if(fromaddress == '1') {
                idcity = tempidcity;
                namecity = '';
                filterkota.map(function (item) {
                    namecity = item.nameregencies;
                })
            }else if(fromaddress == '2'){
                namecity2 = '';
                idcity2 = tempidcity;
                filterkota.map(function (item) {
                    namecity2 = item.nameregencies;
                })
            }else if(fromaddress == '3'){
                namecity3 = '';
                idcity3 = tempidcity;
                filterkota.map(function (item) {
                    namecity3 = item.nameregencies;
                })
            }else{
                namecity4 = '';
                idcity4 = tempidcity;
                filterkota.map(function (item) {
                    namecity4 = item.nameregencies;
                })
            }

            console.log('filterkota ',filterkota);
            console.log('tempidcity ',tempidcity);
        }
            return(
                <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 style={{float:"left"}}><b>{LanguageStore.translate('City')}</b></h4>
                                <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required=""
                                        name="kota" defaultValue={tempidcity}
                                        onClick={this.myChangeHandler} 
                                        onChange={this.OnChangeCity.bind(this)}
                                        value={tempidcity}
                                >
                                    <option value="0" disabled={true}>{LanguageStore.translate('Choose')}</option>
                                    {
                                        filterkota.map(function (item) {
                                            return (
                                                <option key={item.idregencies} value={item.idregencies}>{item.nameregencies}</option>
                                            )
                                        })}

                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                    <TypeDistrict
                        no={this.props.no}
                        DivCity={this.state.valueCity}
                        onChangeAddress= {this.OnChangeCity.bind(this)}
                        iddistrict={this.props.iddistrict}
                        listkelurahan={this.props.listkelurahan}
                        onchangepostalcodebykelurahan={this.props.onchangepostalcodebykelurahan}
                    />
                </div>

            )

    }
}