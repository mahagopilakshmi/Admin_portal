import React from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { Radio,RadioGroup } from "react-radio-group";
import axios from 'axios';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        timeFormat="HH:mm"
    timeIntervals={15}
    dateFormat="MMMM d, yyyy h:mm aa"
    timeCaption="time"
      />
    );
  }
}

// Create component for button
class Button extends React.Component {
  handleSearch = (e) => {
    e.preventDefault();
    console.log("search event ",e);
    
    
   
  }
  render() {
    return (
      <fieldset style={{border:'none'}}>
        <button
          type={this.props.type || 'button'}
          value={this.props.value || null}
          onClick={this.handleSearch}
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
};

// Create component for label
class Label extends React.Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label style={{marginLeft:'-35%'}} htmlFor={this.props.htmlFor}>{this.props.label}</label>
    }
  }
}

// Create component for input
class Input extends React.Component {
  render() {
    return (
      <fieldset style={{border:'none'}}>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <input
          id={this.props.htmlFor}
          max={this.props.max || null}
          min={this.props.min || null}
          name={this.props.name || null}
          placeholder={this.props.placeholder || null}
          required={this.props.required || null}
          step={this.props.step || null}
          type={this.props.type || 'text'}
        />
      </fieldset>
    );
  }
}
class DateField extends React.Component {
  render() {
    return (
      <fieldset style={{border:'none'}}>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

       <Example />
      </fieldset>
    );
  }
}

// Create component for textarea
class Textarea extends React.Component {
  render() {
    return (
      <fieldset style={{border:'none'}}>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <textarea
          cols={this.props.cols || null}
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
          rows={this.props.rows || null}
        >
        </textarea>
      </fieldset>
    );
  }
};



  class FormLaboratory extends React.Component {
    render() {
      // console.log(this.props['role']);
      // var role = this.props['role'];
        return (
          <form method=''  action='' style={{marginLeft:'35%',width:'60%'}}>
            <Input
              hasLabel='true'
              htmlFor='textInput'
              label='First Name'
              required={true}
              type='text'
            />
            
            <Input
              hasLabel='true'
              htmlFor='textInput'
              label='Last Name'
              required={true}
              type='text'
            />
            
            <Textarea
              hasLabel='true'
              htmlFor='textarea'
              label='Textarea'
              required={true}
            />
           
            
            <Button
              type='button'
              value='submit'
              text='Submit'
            />
          </form>
        )
      }
      
    }


    class FormLibrary extends React.Component {
      state = {
        results: []
      }
    
     handleInputChange = () => {
        var codes;
        axios.get('http://localhost:9001/codes')
        .then(response => {
            console.log(response.data); 
            codes = response.data
        });  
        const that = this;  
        const res = [];
        console.log("Search value is ",this.search.value);
        if(that.search.value === ""){
          document.getElementById("action_buttons").style.display = "none";
        }
        else{
          setTimeout(function(){
            console.log("COdes are ",typeof(codes));
           const entries = Object.entries(codes);
           
           for( const [key, code] of entries){
             var len = that.search.value.length;
              const tempCode = code;
            console.log("inside for loop ",tempCode,that.search.value, that.search.value.length,tempCode.slice(0,len));
            if(tempCode.slice(0,len) === that.search.value){
              console.log("matched");
              res.push(key); 
              console.log("res array ",res);
              that.setState(
               {
                 results: res
               }
             )
            }
          
           }
          
             
          },100);
        }

      
      }
    
      render() {
        return (
          <form>
            <label style={{marginLeft:'1%',marginTop:'180px'}} htmlFor="contry_code">Country Code</label>
            <input
              id="country"
              style={{marginTop:"20px",width:"300px",height:"30px"}}
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
          
            <Suggestions results={this.state.results}/>
            <div id="action_buttons" style={{display:"none"}}>
              <button className="action_b" type="button" value="Create">Create</button>
              <button className="action_b" type="button" value="Update">Update</button>
              <button className="action_b" type="button" value="View">View</button>
              <button className="action_b" type="button" value="Delete">Delete</button>
            </div>
          </form>
        )
      }
        
      }

      class Suggestions extends React.Component{
        handleCountrySelect = (e) => {
          console.log("selected country is ",e.target.innerHTML);
          console.log(document.getElementById("country"));
          var country = document.getElementById("country");
          country.value = e.target.innerHTML;
          if(country.value !== null){
            document.getElementById("action_buttons").style.display = "block";
          
          }
         
          
        }
        render(){
          console.log("props value type",this.props['results']);
          // const options = "HEllo";
          const options = this.props['results'].map(r=> (
            <li key={r} style={{cursor:"pointer"}} onClick={this.handleCountrySelect}>
              {r}
            </li>
          ))
          
          return <ul id="country_list" style={{marginTop:"1%",display:"block"}}>{options}</ul>
        }
       
      }
     
      
  

      
  class FormMechanical extends React.Component {
    state = {
      selectedValue: "male"
    }
    
    handleChange = (e) => {
      console.log("Gender change ",this.state.selectedValue, e);
      this.setState({selectedValue:e});
    }
    render() {
      // console.log(this.props['role']);
      // var role = this.props['role'];
        return (
          <form method=''  action='' style={{marginLeft:'35%',width:'60%'}}>
            <Input
              hasLabel='true'
              htmlFor='textInput'
              label='Student Name'
              required={true}
              type='text'
            />
          <Label
            hasLabel="true"
            htmlFor="genderInput"
            label="Gender"
          />          
          <RadioGroup name="gender" selectedValue={this.state.selectedValue} onChange={this.handleChange} style={{marginLeft:'-60%'}}>
            <Radio value="male" />Male
            <Radio value="female" />Female
            <Radio value="other" />Other
          </RadioGroup>

          
            <DateField
                hasLabel='true'
                htmlFor='textInput'
                label='Date of Birth'
                required={true}
                
              />
            <Textarea
              hasLabel='true'
              htmlFor='textarea'
              label='Address'
              required={true}
            />
            
            
            <Button
              type='submit'
              value='submit'
              text='Submit'
            />
          </form>
        )
      }
      
    }
    


    class FormDefault extends React.Component {
      
      render() {
        console.log(this.props['role']);
        
          return (<h1>Home Page</h1>
                     )
        }
        
      }
// Create component for form
class Form extends React.Component {
  render() {
    console.log("role is ",this.props['service']);
    const service = this.props['service'];
    const role = this.props['role'];
    const status = this.props['status'];
    console.log("status ",status+" "+role+" "+service);
    switch (service){
      case 'reference data/country':
        return <FormLibrary />;
      case "reference data/currency":
        return <FormLaboratory />;
      case "customer/customer type":
        return <FormMechanical />;
      default:
        return <FormDefault />;
    }

    }
    
  }
  

export default Form;
