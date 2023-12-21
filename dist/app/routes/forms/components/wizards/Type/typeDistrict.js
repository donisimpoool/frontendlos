import React from 'react'
import {idcity, namecity} from "./TypeCity";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
import {suburllistdistrict,suburlgetkodepos,suburllistkelurahanv1} from "../../../../../config/baseUrl";
import {headers} from "../../../../../config/ConfigParam";

export var idkelurahan=0,namekelurahan='',idkec ='0',idkec2 ='0',idkec3 ='0',idkec4 ='0', namekecamatan='',namekecataman2='',namekecataman3='',namekecataman4='';
var flag = false,tempidkec="0",tempidkel=0;
export default class typeDistrict extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listkecamatan:[],
            valuedistrict:'',
            listkelurahan:[],

        }
    }

    componentDidMount(){
        var url = suburllistdistrict;
        const otherPram={
            method:"GET",
            headers: headers
        }
        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                this.setState({listkecamatan: json.data})
            )
    }

    getlistkelurahanV1(iddistrict){
        var url = suburllistkelurahanv1;
        const formData = new FormData();
        formData.append('iddistrict', iddistrict);
        var params =
            {
                "iddistrict": iddistrict,
            }
        const otherPram={
            method:"POST",
            headers: headers,
            body: JSON.stringify(params)
        }
        fetch(url,otherPram)
            .then(response => response.json())
            .then(json => {
                this.setState({listkelurahan: json.data})
            })
    }

    getlistkelurahan(kecamatan){
        var url = suburlgetkodepos;
        const formData = new FormData();
        formData.append('kecamatan', kecamatan);
        const otherPram={
            method:"POST",
            body: formData,
            headers: headers,
            // headers:{
            //     'content-type': 'application/json'
            // }
        }

        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                // console.log(json.data)
                    this.props.onchangepostalcodebykelurahan(json.data)
                // this.setState({listkelurahan: json.data})
            )
    }

    onchangekelurahan(event){
        tempidkel = event.target.value
        idkelurahan = event.target.value
        var filterkelurahan = this.state.listkelurahan.filter( (item) => {
            return item.idsubdistrict == event.target.value
        })
        namekelurahan=''
        var kodepos = ''
        filterkelurahan.map(function (item) {
            namekelurahan = item.namesubdistrict;
            kodepos = item.kodepos;
        })
        this.props.onchangepostalcodebykelurahan(kodepos)
    }

    myChangeHandler = (event) => {
        this.setState({valuedistrict: event.target.value});
        var filterkecamatan = this.state.listkecamatan.filter( (item) => {
            return item.iddistrict == event.target.value
        })
        var fromaddress = this.props.no;
        tempidkec = event.target.value;
        if(fromaddress == '1'){
            namekecamatan= '';
            idkec = event.target.value;
            filterkecamatan.map(function (item) {
                namekecamatan = item.namedistrict;
            })
            this.props.onchangepostalcodebykelurahan("")
            // this.getlistkelurahan(namekecamatan);

        }else if(fromaddress == '2'){
            namekecataman2= '';
            idkec2 = event.target.value;
            filterkecamatan.map(function (item) {
                namekecataman2 = item.namedistrict;
            })
        }else if(fromaddress == '3'){
            namekecataman3 = '';
            idkec3 = event.target.value;
            filterkecamatan.map(function (item) {
                namekecataman3 = item.namedistrict;
            })
        }else {
            namekecataman4 = '';
            idkec4 = event.target.value;
            filterkecamatan.map(function (item) {
                namekecataman4 = item.namedistrict;
            })
        }
        this.getlistkelurahanV1(event.target.value)
        flag = true;
    }
    render(){
        var filterkecamatan = this.state.listkecamatan.filter( (item) => {
            return item.idregencies == this.props.DivCity
        })
        if(!flag && this.props.iddistrict !== ""){
            tempidkec = this.props.iddistrict
            var filterkecamatan = this.state.listkecamatan.filter( (item) => {
                return item.iddistrict == tempidkec
            })
            var fromaddress = this.props.no;
            if(fromaddress == '1'){
                namekecamatan= '';
                idkec = tempidkec;
                filterkecamatan.map(function (item) {
                    namekecamatan = item.namedistrict;
                })
            }else if(fromaddress == '2'){
                namekecataman2= '';
                idkec2 = tempidkec;
                filterkecamatan.map(function (item) {
                    namekecataman2 = item.namedistrict;
                })
            }else if(fromaddress == '3'){
                namekecataman3 = '';
                idkec3 = tempidkec;
                filterkecamatan.map(function (item) {
                    namekecataman3 = item.namedistrict;
                })
            }else {
                namekecataman4 = '';
                idkec4 = tempidkec;
                filterkecamatan.map(function (item) {
                    namekecataman4 = item.namedistrict;
                })
            }
        }else{
            tempidkec = this.state.valuedistrict
        }
        var listkeluarahan=[];
        // if(typeof this.props.listkelurahan !== "undefined"){
        //     listkeluarahan = this.props.listkelurahan
        // }
        return(
            <div>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="inputGroup-sizing-default">
                            <h4 style={{float:"left"}}><b>{LanguageStore.translate('District')}</b></h4>
                            <select className="form-control input-lg"
                                    data-smart-validate-input="" data-required=""
                                    name="kecamatan" defaultValue={"0"} value={tempidkec}
                                    onChange={this.myChangeHandler}
                            >
                                <option value="0" disabled={true}>{LanguageStore.translate('Choose')}</option>
                                {
                                    filterkecamatan.map(function (item) {
                                        return (
                                            <option key={item.iddistrict} value={item.iddistrict}>{item.namedistrict}</option>
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
                                <h4 style={{float:"left"}}><b>{LanguageStore.translate('Village')}</b></h4>
                                <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required=""
                                        name="kecamatan" defaultValue={"0"} value={tempidkel}
                                        onChange={this.onchangekelurahan.bind(this)}
                                >
                                    <option value="0" disabled={true}>{LanguageStore.translate('Choose')}</option>
                                    {
                                        this.state.listkelurahan.map(function (item) {
                                            return (
                                                <option key={item.idsubdistrict} value={item.idsubdistrict}>{item.namesubdistrict}</option>
                                            )
                                        })}

                                </select>

                            </div>
                        </div>
                    </div>
                </div>

                {/*<div className="row">*/}
                    {/*<div className="col-md-6">*/}
                        {/*<div className="form-group">*/}
                            {/*<div className="inputGroup-sizing-default">*/}
                                {/*<h4 style={{float:"left"}}><b>Kelurahan</b></h4>*/}
                                {/*<select className="form-control input-lg"*/}
                                        {/*data-smart-validate-input="" data-required=""*/}
                                        {/*name="kelurahan" defaultValue={"0"} onChange={this.onchangekelurahan.bind(this)}*/}

                                {/*>*/}
                                    {/*<option value="0" selected={true}>Choose</option>*/}
                                    {/*{*/}
                                        {/*this.state.listkelurahan.map(function (item) {*/}
                                            {/*return (*/}
                                                {/*<option key={item.id} value={item.id}>{item.kelurahan}</option>*/}
                                            {/*)*/}
                                        {/*})}*/}

                                {/*</select>*/}

                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<br/>*/}
                {/*</div>*/}

            </div>



        )
    }
}