import React from 'react';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { Radio,RadioGroup } from "react-radio-group";
 
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
  handleSubmit = (e) => {
    const form = new FormData();
    const deptName = document.getElementById("textInput");
    console.log(deptName);
    form.set('deptname', deptName)
    console.log("event submit ", form.get('username'));
  }
  render() {
    return (
      <fieldset style={{border:'none'}}>
        <button
          type={this.props.type || 'button'}
          value={this.props.value || null}
          onClick={this.handleSubmit}
        >
          {this.props.text}
        </button>
      </fieldset>
    );
  }
};

// Create component for datalist input
// class Datalist extends React.Component {
//   render() {
//     // Get all options from option prop
//     const dataOptions = this.props.options.split(', ');

//     // Generate list of options
//     const dataOptionsList = dataOptions.map((dataOption, index) => {
//       return <option key={index} value={dataOption} />
//     });

//     return (
//       <fieldset style={{border:'none'}}>
//         <Label
//           hasLabel={this.props.hasLabel}
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         />
        
//         <input list={this.props.htmlFor} />
          
//         <datalist
//           defaultValue=''
//           id={this.props.htmlFor}
//           name={this.props.name || null}
//           required={this.props.required || null}
//         >
//           <option value='' disabled>Select one option</option>

//           {dataOptionsList}
//         </datalist>
//       </fieldset>
//     );
//   }
// };

// // Create component for checkbox input
// class Checkbox extends React.Component {
//   render() {
//     return (
//       <fieldset style={{border:'none'}}>
//         <label
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         >
//           <input
//             id={this.props.htmlFor}
//             name={this.props.name || null}
//             required={this.props.required || null}
//             type='checkbox'
//           />
//           {this.props.label}
//         </label>
//       </fieldset>
//     );
//   }
// }

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

// Create component for radio input
// class Radio extends React.Component {
//   render() {
//     return (
//       <fieldset style={{border:'none'}}>
//         <label
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         >
//           <input
//             id={this.props.htmlFor}
//             name={this.props.name || null}
//             required={this.props.required || null}
//             type='radio'
//           />
//           {this.props.label}
//         </label>
//       </fieldset>
//     );
//   }
// }

// // Create component for select input
// class Select extends React.Component {
//   render() {
//     // Get all options from option prop
//     const selectOptions = this.props.options.split(', ');

//     // Generate list of options
//     const selectOptionsList = selectOptions.map((selectOption, index) => {
//       return <option key={index} value={index}>{selectOption}</option>
//     });

//     return (
//       <fieldset style={{border:'none'}}>
//         <Label
//           hasLabel={this.props.hasLabel}
//           htmlFor={this.props.htmlFor}
//           label={this.props.label}
//         />
        
//         <select
//           defaultValue=''
//           id={this.props.htmlFor}
//           name={this.props.name || null}
//           required={this.props.required || null}
//         >
//           <option value='' disabled>Select one option</option>

//           {selectOptionsList}
//         </select>
//       </fieldset>
//     );
//   }
// };

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
      console.log(this.props['role']);
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
              type='submit'
              value='submit'
              text='Submit'
            />
          </form>
        )
      }
      
    }


    class FormLibrary extends React.Component {
      render() {
        console.log(this.props['role']);
        // var role = this.props['role'];
          return (
            <form method=''  action='' style={{marginLeft:'35%',width:'60%'}}>
              <Input
                hasLabel='true'
                htmlFor='textInput'
                label='Book Name'
                required={true}
                type='text'
              />
              
              <DateField
                  hasLabel='true'
                  htmlFor='textInput'
                  label='Date Taken'
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


      class FormAccounts extends React.Component {
        render() {
          console.log(this.props['role']);
          // var role = this.props['role'];
            return (
              <form method=''  action='' style={{marginLeft:'35%',width:'60%'}}>
                <Input
                  hasLabel='true'
                  htmlFor='textInput'
                  label='Department'
                  required={true}
                  type='text'
                  value=""
                />
                
                  
                <DateField
                  hasLabel='true'
                  htmlFor='textInput'
                  label='Date Paid'
                  required={true}
                  
                />
                
                
                <Textarea
                  hasLabel='true'
                  htmlFor='textarea'
                  label='Payment Details'
                  required={true}
                />
                
                <Button
                  
                  value='submit'
                  text='Submit'
                />
              </form>
            )
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
      console.log(this.props['role']);
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
    
// Create component for form
class Form extends React.Component {
  render() {
    console.log("role is ",this.props['service']);
    const role = this.props['service'];
    switch (role){
      case 'my accounts/savings':
        return <FormLibrary />;
      case "my accounts/current":
        return <FormLaboratory />;
      case "Mechanical":
        return <FormMechanical />;
      default:
        return <FormAccounts />;
    }

    }
    
  }
  

export default Form;
