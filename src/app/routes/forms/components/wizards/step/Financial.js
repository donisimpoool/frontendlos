import React from 'react'
import NumberFormat from 'react-number-format';
import {businessvalue, divisionname} from "./Business";
import division from "../../../../../components/forms/commons/division";
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export var financialvalue = {
    typeincome: "",
    mainincome:"0",
    sideincome:"0",
    expense:"0",
    additionalexpense:"0",
    vehicleowner:'N',
    typevehicle:''};
export var typeincome='',mainincome='',sideincome='',expense='',additionalexpense='',vehicleowner='N',typevehiclefinancial=''
export var listtypeincome = [
    {id:'employed',name:'Employed'},
    {id:'selfemployed',name:'Self Employed'},
    {id:'socialsecurity',name:'Social Security'},
    {id:'retirement',name:'Retirement'},
    {id:'other',name:'Other'},
]
var flag = false;
export default class Financial extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
          finance: [{}],
          monthlyExpense:{},
          monthlyIncome:{}, 
          incomeSource: '',
          incomeMain : 0,
          incomeSide : 0, 
          expenseMain: 0,
          expenseSide: 0,
            valuefinancial:{
                typeincome: "",
                mainincome:"0",
                sideincome:"0",
                expense:"0",
                additionalexpense:"0",
                vehicleowner:'N',
                typevehicle:''
            }
        }
      }

      componentDidMount(){
      }

      ///INCOME
      ///////////////

      onMainIncome(e){
          var str = e.target.value;
          mainincome = str;
          str = str.replace(/,/g, "");
          var value = this.state.valuefinancial;
          value.mainincome = str;
          this.setState(value);
          financialvalue = this.state.valuefinancial;
          flag = true;
      }

      onSideIncome(e){
          var str = e.target.value;
          sideincome = str;
          str = str.replace(/,/g, "");
          var value = this.state.valuefinancial;
          value.sideincome = str;
          this.setState(value);
          financialvalue = this.state.valuefinancial;
          flag = true;
      }

      onChangeIncome(){
        this.setState(prevState =>({
          monthlyIncome: { 
              value: parseInt(this.state.incomeMain, 10) + parseInt(this.state.incomeSide, 10),
              currency: "IDR"
            }
        }),
        this.onSetData.bind(this)
        )
      }

      ///EXPENSE
      ///////////////

      onMainExpense(e){
          var str = e.target.value;
          expense = str;
          str = str.replace(/,/g, "");
          var value = this.state.valuefinancial;
          value.expense = str;
          this.setState(value);
          financialvalue = this.state.valuefinancial;
          flag = true
      }

      onSideExpense(e){
          var str = e.target.value;
          additionalexpense = str;
          str = str.replace(/,/g, "");
          var value = this.state.valuefinancial;
          value.additionalexpense = str;
          this.setState(value);
          financialvalue = this.state.valuefinancial;
          flag = true
      }

      onChangeExpense(){
        this.setState(prevState =>({
          monthlyExpense: {
              ...prevState.monthlyExpense,
              value: parseInt(this.state.expenseMain, 10) + parseInt(this.state.expenseSide, 10),
              currency: "IDR"
            }
        }),
        this.onSetData.bind(this)
        )
      }
    
    onChangeVehicleOwner(e){
        var str = e.target.value;
        var value = this.state.valuefinancial;
        value.vehicleowner = str
        this.setState(value);
        financialvalue = this.state.valuefinancial;
        vehicleowner = str
        flag = true;
    }
    onChangeTypeVehicle(e){
        var str = e.target.value;
        var value = this.state.valuefinancial;
        value.typevehicle = str
        this.setState(value);
        financialvalue = this.state.valuefinancial;
        typevehiclefinancial = str
        flag = true;
    }
    onChangeSourceIncome(e){
        var str = e.target.value;
        str = str.replace(/,/g, "");
        var value = this.state.valuefinancial;
        value.typeincome = str;
        this.setState(value);
        financialvalue = this.state.valuefinancial;
        var filtertypeincome = listtypeincome.filter( (item) => {
            return item.id == e.target.value
        })
        typeincome= '';
        filtertypeincome.map(function (item) {
            typeincome = item.name;
        })
        flag = true;
    }

    onSetData(){
        let source = this.state.incomeSource
        let income = this.state.monthlyIncome
        let expense = this.state.monthlyExpense
        this.setState(prevState =>({
            finance: [{
                incomeSource: source,
                monthlyExpense: expense,
                monthlyIncome: income
            }]
        }),
        this.onSendData.bind(this)
        // console.log(this.state.finance)
        )
    }

    onSendData(){
        this.props.financialUpdate(this.state.finance);
        this.props.onGetData()
    }
    setEntity() {
        var entity = this.props.datafinancial;
        if (typeof entity !== "undefined" && !flag){
            this.state.valuefinancial.typeincome = entity.typeincome
            this.state.valuefinancial.mainincome = entity.mainincome
            this.state.valuefinancial.sideincome = entity.sideincome
            this.state.valuefinancial.expense = entity.expense
            this.state.valuefinancial.additionalexpense = entity.additionalexpense
            this.state.valuefinancial.vehicleowner = entity.vehicleowner
            this.state.valuefinancial.typevehicle = entity.typevehicle
            var filtertypeincome = listtypeincome.filter( (item) => {
                return item.id == entity.typeincome
            })
            typeincome= '';
            filtertypeincome.map(function (item) {
                typeincome = item.name;
            })
            vehicleowner = entity.vehicleowner
            typevehiclefinancial = entity.typevehicle
            mainincome = entity.mainincome
            sideincome = entity.sideincome
            expense = entity.expense
            additionalexpense = entity.additionalexpense
            financialvalue = this.state.valuefinancial;
        }
        flag = false;
    }
    render(){
      this.setEntity()
        return(
            <div>
                <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Type Income')}</b></h4>
                                    <select className="form-control input-lg" 
                                        onChange={this.onChangeSourceIncome.bind(this)}
                                        defaultValue="0"
                                                     data-smart-validate-input="" data-required=""
                                                     name="incomeSource" value={this.state.valuefinancial.typeincome}
                                                     >
                                                        <option value="" selected={true}>{LanguageStore.translate('Type Income')}</option>
                                                        {
                                                            listtypeincome.map(function (item) {
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
                                                <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Main Income')}</b> ( IDR )</h4>
                                                    <NumberFormat className="form-control input-lg" data-minlength="4" data-required=""
                                                        thousandSeparator={true} placeholder="Input your income" 
                                                        onChange={this.onMainIncome.bind(this)} value={this.state.valuefinancial.mainincome}
                                                        name="value" required data-message="Please specify your income"
                                                        />
                                                    
                                                    {/* <input className="form-control input-lg" id="exampleNumber" min="0"
                                                            placeholder="Input your income" type="number" 
                                                            name="value"
                                                            data-smart-validate-input="" data-required=""
                                                            onChange={this.onMainIncome.bind(this)}
                                                            data-message="Please specify your income"/> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                        <div className="inputGroup-sizing-default">
                                                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Side Income')}</b> ( IDR )</h4>
                                                                <NumberFormat className="form-control input-lg" data-minlength="4" data-required=""
                                                                    thousandSeparator={true} placeholder="Input your income" 
                                                                    onChange={this.onSideIncome.bind(this)} value={this.state.valuefinancial.sideincome}
                                                                    name="value" required data-message="Please specify your side income"
                                                                    />
                                                                
                                                                {/* <input className="form-control input-lg"
                                                                       min="0"
                                                                       placeholder="Input your income" type="number" 
                                                                       name="value"
                                                                       
                                                                       onChange={this.onSideIncome.bind(this)}
                                                                       data-smart-validate-input="" data-required=""
                                                                       data-message="Please specify your side income"/> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <div className="inputGroup-sizing-default">
                                                            <h4 className="input-number" style={{textAlign:"left"}}><b>{LanguageStore.translate('Expense')}</b> ( IDR )</h4>
                                                                <NumberFormat className="form-control input-lg" data-minlength="4" data-required=""
                                                                        thousandSeparator={true} placeholder="Input your expense" 
                                                                        onChange={this.onMainExpense.bind(this)} value={this.state.valuefinancial.expense}
                                                                        name="value" required data-message="Please specify your expense"
                                                                        />
                                                                
                                                                {/* <input className="form-control input-lg" id="exampleNumber"min="0"
                                                                       placeholder="Input your expense" type="number" 
                                                                       name="value"
                                                                       onChange={this.onMainExpense.bind(this)}
                                                                       data-smart-validate-input="" data-required="We need your number expense"
                                                                       data-message="Please specify your expense"/> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <div className="inputGroup-sizing-default">
                                                            <h4 className="input-number" style={{textAlign:"left"}}><b>{LanguageStore.translate('Additional Expense')}</b> ( IDR )</h4>
                                                                <NumberFormat className="form-control input-lg" data-minlength="4" data-required=""
                                                                    thousandSeparator={true} placeholder="Input your expense" 
                                                                    onChange={this.onSideExpense.bind(this)} value={this.state.valuefinancial.additionalexpense}
                                                                    name="value" required data-message="Please specify your expense"
                                                                    />     
                                                                 <div className="note">
                                                                        <strong>Note:</strong> format text input in  IDR
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row" >
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <h4  style={{float:"left"}}><b>{LanguageStore.translate('Vehicle Owner')}</b></h4>
                                                            <br/>
                                                            <div className="col-xs-4 col-lg-8">
                                                                <div className="inputGroup-sizing-default">
                                                                    <label className="radio state-error">
                                                                        <input type="radio" name="ExampleRadio" onChange={this.onChangeVehicleOwner.bind(this)} checked={this.state.valuefinancial.vehicleowner === 'Y'}
                                                                               value="Y"/>
                                                                        {LanguageStore.translate('Yes')}</label>
                                                                    <label className="radio">
                                                                        <input type="radio" name="ExampleRadio" onChange={this.onChangeVehicleOwner.bind(this)} checked={this.state.valuefinancial.vehicleowner === 'N'}
                                                                               value="N"/>
                                                                        {LanguageStore.translate('No')}</label>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br/>
                                                <div hidden={this.state.valuefinancial.vehicleowner == 'N'}>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <div className="form-group">
                                                                <div className="inputGroup-sizing-default">
                                                                    <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Type Vehicle')}</b></h4>
                                                                    <select className="form-control input-lg"
                                                                            data-smart-validate-input="" data-required="" required data-message-required="Please Choose option"
                                                                            name="vehicle" onChange={this.onChangeTypeVehicle.bind(this)} value={this.state.valuefinancial.typevehicle}>
                                                                        <option value="" selected={true}>{LanguageStore.translate('Type Vehicle')}</option>
                                                                        <option value="Car">{LanguageStore.translate('Car')}</option>
                                                                        <option value="Motorcyle">{LanguageStore.translate('Motorcyle')}</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
            </div>
            
        )
        
    }
}