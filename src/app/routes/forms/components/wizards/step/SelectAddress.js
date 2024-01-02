import React from 'react'
import Address2 from '../../wizards/step/Address2'

export default class SelectAddress extends React.Component{ 
    render(){ 

         if(this.props.DivState === true){ 
            return(
                <div>
                    <Address2
                        dataaddress = {this.props.dataaddress}
                        onChangeAddressAdditional = {this.props.onChangeAddressAdditional.bind(this)}
                        listprovince = {this.props.listprovince}
                        listownershipstatus={this.props.listownershipstatus}
                        listkota={this.props.listkota}
                        listkecamatan={this.props.listkecamatan}
                    />
                </div>                
            );
        }  else { 
            return <div></div>
        } 

        
    }
}