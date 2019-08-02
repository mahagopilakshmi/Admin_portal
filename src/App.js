import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import SideNav, {  NavItem, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Form from "./components/Form";

class App extends Component {
  state = {
    service_selected : null
  }

  handleSelect = (e) => {
    console.log("selected ", e);
    this.setState({ service_selected : e });
  }
  render() {
  
    
    return (
      
      <div className="App">
           
   <NavBar />
   <SideNav  style={{marginTop : "3.5%"}} defaultExpanded    onSelect={this.handleSelect}>
    {/* <SideNav.Toggle /> */}
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="my accounts">
            <NavText>
                My Accounts
            </NavText>
            <NavItem eventKey="my accounts/current">
                <NavText>
                   Current Account
                </NavText>
            </NavItem>
            <NavItem eventKey="my accounts/savings">
                <NavText>
                    Savings Account
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="payments">
            <NavText>
               Payments and Transfer
            </NavText>
            <NavItem eventKey="payments/fund transfer">
                <NavText>
                   Fund Transfer
                </NavText>
            </NavItem>
            <NavItem eventKey="payments/paybills">
                <NavText>
                    Pay Bills
                </NavText>
            </NavItem>
            <NavItem eventKey="payments/recharge">
                <NavText>
                   Recharge
                </NavText>
            </NavItem>
            <NavItem eventKey="payments/railticket">
                <NavText>
                    Rail Ticket
                </NavText>
            </NavItem>
            <NavItem eventKey="payments/mytransactions">
                <NavText>
                  My Transactions
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="investments">
            <NavText>
               Investments and Insurance
            </NavText>
            <NavItem eventKey="investments/lifeinsurance">
                <NavText>
                   Life Insurance
                </NavText>
            </NavItem>
            <NavItem eventKey="investments/generalinsurance">
                <NavText>
                    General Insurance
                </NavText>
            </NavItem>
            <NavItem eventKey="investments/investonline">
                <NavText>
                   Invest Online
                </NavText>
            </NavItem>
            <NavItem eventKey="investments/digitalgold">
                <NavText>
                  Digital Gold
                </NavText>
            </NavItem>
            <NavItem eventKey="investments/investmentprofile">
                <NavText>
                  Investment Profile
                </NavText>
            </NavItem>
        </NavItem>
        <NavItem eventKey="exclusive offerings">
          
            <NavText>
               Exclusive Offerings
            </NavText>
            <NavItem eventKey="exclusive offerings/cibilreport">
                <NavText>
                   Cibil Report
                </NavText>
            </NavItem>
            <NavItem eventKey="exclusive offerings/mymoney">
                <NavText>
                    My Money
                </NavText>
            </NavItem>
            <NavItem eventKey="exclusive offerings/investonline">
                <NavText>
                   Invest Online
                </NavText>
            </NavItem>
            <NavItem eventKey="exclusive offerings/compareandbuy">
                <NavText>
                 Compare and Buy
                </NavText>
            </NavItem>
            <NavItem eventKey="exclusive offerings/digitallocker">
                <NavText>
                  Digital Locker
                </NavText>
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
       <Form service={this.state.service_selected} />
      </div>
   
    );
  }
}

export default App;
