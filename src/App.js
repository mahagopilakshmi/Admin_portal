import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import NavBar from './components/NavBar';
import SideNav, {  NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Form from "./components/Form";

class App extends Component {
    state = {
        Role : '',
        Status : '',
        service_selected : 'home'
    }
    constructor(props){
        super(props);
        axios.get('http://localhost:9001/status')
        .then(response => {
            console.log(response);
            console.log(response.data['Role']);
            console.log(response.data['Status']);
            this.setState({"Role":response.data['Role']});
            this.setState({"Status":response.data['Status']});
            console.log("State is ",this.state);
        })
        .catch(error => {
            console.log(error.response)
        });
        
       
      };
    
  

  handleSelect = (e) => {
    console.log("selected ", e);
    this.setState({ service_selected : e });
  }
  render() {
  
    
    return (
      
      <div className="App">
           
   <NavBar />
   <SideNav  style={{marginTop : "3.5%"}} defaultExpanded  onSelect={this.handleSelect}>
    {/* <SideNav.Toggle /> */}
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="reference data">
            <NavText>
                Reference Data
            </NavText>
            <NavItem eventKey="reference data/country">
                <NavText>
                   Country
                </NavText>
            </NavItem>
            <NavItem eventKey="reference data/currency">
                <NavText>
                    Currency
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="customer">
            <NavText>
               Customer
            </NavText>
            <NavItem eventKey="customer/customer type">
                <NavText>
                   Customer Type
                </NavText>
            </NavItem>
            <NavItem eventKey="customer/personal information">
                <NavText>
                    Personal Information
                </NavText>
            </NavItem>
            <NavItem eventKey="customer/organization">
                <NavText>
                   Organization
                </NavText>
            </NavItem>  
        </NavItem>
        <NavItem eventKey="bank">
            <NavText>
               Bank
            </NavText>
            <NavItem eventKey="bank/lifeinsurance">
                <NavText>
                   Life Insurance
                </NavText>
            </NavItem>
            <NavItem eventKey="bank/generalinsurance">
                <NavText>
                    General Insurance
                </NavText>
            </NavItem>
            <NavItem eventKey="bank/investonline">
                <NavText>
                   Invest Online
                </NavText>
            </NavItem>
            <NavItem eventKey="bank/digitalgold">
                <NavText>
                  Digital Gold
                </NavText>
            </NavItem>
            <NavItem eventKey="bank/investmentprofile">
                <NavText>
                  Investment Profile
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="general ledger">
          
            <NavText>
               General Ledger
            </NavText>
            <NavItem eventKey="general ledger/cibilreport">
                <NavText>
                   Cibil Report
                </NavText>
            </NavItem>
            <NavItem eventKey="general ledger/mymoney">
                <NavText>
                    My Money
                </NavText>
            </NavItem>
            <NavItem eventKey="general ledger/investonline">
                <NavText>
                   Invest Online
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="transaction">
          
          <NavText>
             Transaction
          </NavText>
          <NavItem eventKey="transaction/view transaction">
              <NavText>
                View Transactions
              </NavText>
          </NavItem>
          <NavItem eventKey="transaction/repeat transaction">
              <NavText>
                  Repeat Transactions
              </NavText>
          </NavItem>
      </NavItem>
    </SideNav.Nav>
</SideNav>
       <Form service={this.state.service_selected} role={this.state.Role} status={this.state.Status}/>
      </div>
   
    );
  }
}

export default App;
