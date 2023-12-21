import React from 'react'
import JakPusatDistrict from './JakPusatDistrict';
import Pul_seribu from './Pul_seribu';
import Jakut from './Jakut';
import Jaksel from './Jaksel';
import Jaktim from './Jaktim';
import Jakbar from './Jakbar';


export default class TypeJktDistrict extends React.Component{ 
    
    render(){ 
        console.log("TEST")
        if(this.props.DivState ==='Jakarta Pusat'){
            return(
                <div>
                <JakPusatDistrict
                    onChangeAddress= {this.props.onChangeAddress.bind(this)}
                />   
                </div>                
            );
        } else if(this.props.DivState ==='Kepulauan Seribu'){ 
            return(
                <div>
                    <Pul_seribu
                        onChangeAddress= {this.props.onChangeAddress.bind(this)}
                    />
                    <br/>
                </div>                
            );
        } else if(this.props.DivState ==='Jakarta Utara'){ 
            return(
                <div>
                    <Jakut
                         onChangeAddress= {this.props.onChangeAddress.bind(this)}
                    />
                </div>                
            );
        }else if(this.props.DivState ==='Jakarta Selatan'){ 
            return(
                <div>
                    <Jaksel 
                        onChangeAddress= {this.props.onChangeAddress.bind(this)}
                    />
                    <br/>
                </div>                
            );
        } else if(this.props.DivState ==='Jakarta Timur'){ 
            return(
                <div>
                    <Jaktim 
                        onChangeAddress= {this.props.onChangeAddress.bind(this)}
                    />
                    <br/>
                </div>                
            );
        }   
        else if(this.props.DivState ==='Jakarta Barat'){ 
            return(
                <div>
                    <Jakbar 
                        onChangeAddress= {this.props.onChangeAddress.bind(this)}
                    />
                    <br/>
                </div>                
            );
        }   
         else { 
            return <div></div>
        } 

        
    }
}