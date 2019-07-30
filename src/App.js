import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import  Form  from './components/Form';
import SideNav from './components/SideNav';

class App extends Component {
  state = {
    role : ''
  };
  handleRole = (roleValue) => {
    this.setState({role: roleValue});
    console.log("role is ",this.state.role);
}

  render() {
    // console.log("decision flag",this.propstitle);
    
    return (
      
      <div className="App">
           
   <NavBar />
    <SideNav
        className="form"
        title="Select a Role"
        model={[         
            {
              key: "admin",
              label: "Admin",
              type: "select",
              value: "Accounts",
              options: [               
                { key: "accounts", label: "Accounts", value: "Accounts" },
                { key: "lab", label: "Laboratory", value: "Laboratory" },
                { key: "library", label: "Library", value: "Library" },
              ]
            },
            {
              key: "HOD",
              label: "HOD",
              type: "select",
              value: "ECE",
              options: [
                { key: "ECE", label: "ECE", value: "ECE" },
                { key: "EEE", label: "EEE", value: "EEE" },
                { key: "Mechanical", label: "Mechanical", value: "Mechanical" }
              ]
            },
            {
              key: "Facilitator",
              label: "Facilitator",
              type: "select",
              value: "John",
              options: [
                { key: "John", label: "John", value: "John" },
                { key: "Robert", label: "Robert", value: "Robert" },
                { key: "Johan", label: "Johan", value: "Johan" }
              ]
            }
          ]}
          onSelectRole={this.handleRole}
      
        />
        <Form role={this.state.role}/>
        
      </div>
   
    );
  }
}

export default App;
