import React from 'react'
import DropzoneInput from '../../../../../components/forms/inputs/DropzoneInput'
import {familyvalue} from "./Family";
import {Addressvalue, mainaddress} from "./Address";
import {suburlmultiplefile} from "../../../../../config/baseUrl";
import {convertByteToMB} from "../../../../../config/FunctionGlobal";
import {msglimitfile} from "../../../../../config/KosaKata";
import {info} from "../../../../auth/containers/Login";

export var filedocument = {description: "",
    filedoc:[],totalsize:0};

export default class Document extends React.Component{ 
    constructor(){
        super()
        this.state = {       
            value: "0" ,
            filedoc:"",
            valuedocument:{
                description: "",
                filedoc:[],
                totalsize:0
            }
        }
    }

    onchangedescription(e){
        var str = e.target.value;
        var value = this.state.valuedocument;
        value.description = str;
        this.setState(value);
        filedocument = this.state.valuedocument;
    }

    upload(){
        var filedocument = this.state.filedoc;
        console.log("upload : "+filedocument)

        var url = `http://localhost:8080/file/v1/uploadFileDB`;
        // console.log('LOAN urlnew ', ur)
        console.log('LOAN url ', url)
        // const fileInput = document.querySelector('file');
        const formData = new FormData();
        formData.append('file', filedocument);
        fetch(url,
            {
                method: 'POST',
                body: formData,
            })
        // .then(dispatch(updateLoan(params)))
            .then(response => console.log('LOAN POSTED', response.status))
        // console.log('LOAN POSTED', params)
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
        value.filedoc = listdoc;
        value.totalsize = size
        this.setState(value);
        filedocument = this.state.valuedocument;

        var totalsizemb = convertByteToMB(size);
        if(totalsizemb > info.sizefile){
            alert(msglimitfile(info.sizefile));
        }
    }

    savefile(){

        var url = suburlmultiplefile;
        // console.log('LOAN urlnew ', ur)

        // console.log('listdoc.length ', listdoc.length)
        // const fileInput = document.querySelector('file');
        const formData = new FormData();
        for(var i=0; i < filedocument.filedoc.length; i++) {
            formData.append('file', filedocument.filedoc[i], filedocument.filedoc[i].name);
        }
        formData.append('description', 'Tes Aja');

        fetch(url,
            {
                method: 'POST',
                body: formData,
            })
        // .then(dispatch(updateLoan(params)))
            .then(response => console.log('POSTED uploadFile', response.status))
        // console.log('LOAN POSTED', params)
        // var param={
        //     file:filedocument.filedoc,
        //     description:'Tes Aja'
        // }
        // var data = new FormData();
        // data.append('file', filedocument.filedoc);
        // // data.append('description', 'Tes Aja');
        // var request = new XMLHttpRequest();
        // request.open("POST", url, true);
        // // request.setRequestHeader('Content-type', 'application/json');
        // request.onload = function (e) {
        //     alert(this.status)
        //     if (this.status === 200) {
        //
        //     };
        // };
        // request.send(JSON.stringify(data));
    }
    donwloadfile(){
        var url = `http://localhost:8080/file/v1/download`;
        var request = new XMLHttpRequest();
        request.open("GET", url, true);
        request.responseType = "blob";
        request.onload = function (e) {
            if (this.status === 200) {
                // `blob` response
                // console.log(this.response);
                // create `objectURL` of `this.response` : `.pdf` as `Blob`
                var file = window.URL.createObjectURL(this.response);
                var a = document.createElement("a");
                a.href = file;
                a.download = this.response.name || "detailPDF.png";
                document.body.appendChild(a);
                a.click();
                // remove `a` following `Save As` dialog,
                // `window` regains `focus`
                window.onfocus = function () {
                    document.body.removeChild(a)
                }
            };
        };
        request.send();
        // fetch(url,
        //     {
        //         method: 'GET',
        //         responseType: 'blob', // important
        //         headers: {
        //             // Authorization: 'Bearer '+localStorage.getItem('token')
        //             'content-type': 'application/octet-stream'
        //         },
        //     })
        //     .then(response => response.text())
        //     .then(appList => {
        //         const url = window.URL.createObjectURL(new Blob([appList], { type: "application/pdf" }));
        //         const link = document.createElement('a');
        //         link.href = url;
        //         link.setAttribute('download', 'file.pdf');
        //         document.body.appendChild(link);
        //         link.click();
        //         link.remove();
        //     })
    }
    render(){
        return(
            <div>
                  <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                             <h4 style={{float:"left"}}><b>Description</b></h4>
                             <input className="form-control input-lg"
                                        placeholder="Type (Category, Intent or Training)" type="text" name="place_of_birth"
                                         data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="255"
                                         data-message="Please specify your Description" onChange={this.onchangedescription.bind(this)}/>
                        </div>
                      </div>
                    </div>
                 </div>   
                                                
                 <div className="row">
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                 <header>
                 
                  <h2>UPLOAD FILE</h2>

                </header>


                  {/* widget content */}
                  <div className="widget-body">
                          <input name="file" id="file" type="file" onChange={this.uploadFile.bind(this)} multiple={true}/>
                          < br></br>
                          <button name="submit" type="button" onClick={this.upload.bind(this)}>Upload</button>
                      {/*<button name="download" type="button" onClick={this.savefile}>TES</button>*/}
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

// ReactDOM.render(
//   <Document /> ,
//   document.getElementById('container')
// );