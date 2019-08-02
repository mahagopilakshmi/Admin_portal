import React, { useState } from 'react';
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import {
 
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

function DateTime  ()  {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
     
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
  );
}

// Create component for button
class Button extends React.Component {
  render() {
    return (
      <fieldset style={{border:'none'}}>
        <button
          type={this.props.type || 'button'}
          value={this.props.value || null}
          onClick={this.props.onClick}
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
          onChange={this.props.onChange}
        />
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
          onChange={this.props.onChange}
        >
        </textarea>
      </fieldset>
    );
  }
};



  class Form1 extends React.Component {
    render() {
      console.log(this.props['role']);
      // var role = this.props['role'];
        return (
          <form method=''  action='' style={{marginTop:'-25%',marginLeft:'35%',width:'60%'}}>
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


    class Form2 extends React.Component {
  
      render() {
        console.log(this.props['role']);
        // var role = this.props['role'];
          return (
            <form method=''  action='' style={{marginTop:'-25%',marginLeft:'35%',width:'60%'}}>
              <Input
                hasLabel='true'
                htmlFor='textInput'
                label='Book Name'
                required={true}
                type='text'
              />
              
              <Input
                hasLabel='true'
                htmlFor='textInput'
                label='Date Taken'
                required={true}
                type='text'
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


      class Form3 extends React.Component {
       
        render() {
          console.log(this.props['role']);
          // var role = this.props['role'];
            return (
              <form method=''  action='' style={{marginTop:'-25%',marginLeft:'35%',width:'60%'}}>
                <Input
                  hasLabel='true'
                  htmlFor='textInput'
                  label='Department'
                  value={this.state.department} 
                  onChange={this.handleDepartmentChange}
                  required={true}
                  type='text'
                />
                <DateTime />
                <Textarea
                  hasLabel='true'
                  htmlFor='textarea'
                  label='Payment Details'
                  value={this.state.paymentdetails} 
                  onChange={this.handlePaymentDetailsChange}
                  required={true}
                />
               
                
                <Button
                  type='button'
                  text='Submit'
                  onClick={this.handleForm3Submit}
                />
              </form>
            )
          }
          
        }
// Create component for form
class Form extends React.Component {
  render() {
    console.log(this.props['role']);
    const role = this.props['role'];
    switch (role){
      case 'Library':
        return <Form2 />;
      case "Laboratory":
        return <Form1 />;
      default:
        return <Form3 />;
    }

    }
    
  }
  

export default Form;
