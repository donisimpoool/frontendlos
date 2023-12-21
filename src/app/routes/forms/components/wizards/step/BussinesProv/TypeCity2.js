import React from 'react'
import Jktcity2 from './Jktcity2';
import YogyaCity2 from './YogyaCity2';
import BantenCity2 from './BantenCity2';
import BaliCity2 from './BaliCity2';
import Jatim from './Jatim';
import Jabar from './Jabar';


export default class TypeCity2 extends React.Component{ 
    
    render(){ 

        if(this.props.DivState ==='DKI Jakarta'){
            return(
                <div>
                    <Jktcity2
                    OnChangeProvinces={this.props.OnChangeProvinces.bind(this)}
                    />
                </div>                
            );
        } else if(this.props.DivState ==='Banten'){ 
            return(
                <div>
                    <BantenCity2
                       OnChangeProvinces={this.props.OnChangeProvinces.bind(this)}
                    />
                    <br/>
                </div>                
            );
        } 
        // else if(this.props.DivState ==='Yogyakarta'){ 
        //     return(
        //         <div>
        //             <YogyaCity2
        //                OnChangeProvinces={this.prosp.OnChangeProvinces.bind(this)}
        //             />
        //             <br/>
        //         </div>                
        //     );
        // } else if(this.props.DivState ==='Bali'){ 
        //     return(
        //         <div>
        //             <BaliCity2
        //                OnChangeProvinces={this.prosp.OnChangeProvinces.bind(this)}
        //             />
        //             <br/>
        //         </div>                
        //     );
        // }   else if(this.props.DivState ==='Jawa Timur'){ 
        //     return(
        //         <div>
        //             <Jatim
        //                OnChangeProvinces={this.prosp.OnChangeProvinces.bind(this)}
        //             />
        //             <br/>
        //         </div>                
        //     );
        // }
        // else if(this.props.DivState ==='Jawa Barat'){ 
        //     return(
        //         <div>
        //             <Jabar
        //                OnChangeProvinces={this.prosp.OnChangeProvinces.bind(this)}
        //             />
        //             <br/>
        //         </div>                
        //     );
        // }
        else { 
            return <div></div>
        } 

        
    }
}