import React from "react";
// import ReactDOM from "react-dom";
import "./form.css";

export default class SideNav extends React.Component {
  state = {};


  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("gds:p:s",  prevState);
  //   if (
  //     nextProps.defaultValues &&
  //     nextProps.defaultValues.id !== prevState.id
  //   ) {
  //     //   Object.keys(prevState).forEach(k => {
  //     //     derivedState[k] = "";
  //     //   });
  //     return {
  //       ...nextProps.defaultValues
  //     };
  //   }

  //   console.log("no state change");
  //   return null;
  // }

  // onSubmit = e => {
  //   e.preventDefault();
  //   if (this.props.onSubmit) this.props.onSubmit(this.state);
  // };

  onChange = (e, key) => {
    console.log("single");
    this.setState(
      {
        [key]: e.target.value
      },
      () => {
        console.log("this.state",this.state[key]);
        const that = this;
        setTimeout(function(){
          that.props.onSelectRole(that.state[key]); 
        },100);
       
      }
    );
  };

  renderForm = () => {
    let model = this.props.model;
    let formUI = model.map(m => {
      let key = m.key;
      let type = m.type || "text";
      let props = m.props || {};
      let name = m.name;
      let value = m.value;

      let target = key;
      value = this.state[target] || "";
// console.log("render form value ",value);
      let input = (
        <input
          {...props}
          className="form-input"
          type={type}
          key={key}
          name={name}
          value={value}
          onChange={e => {
            this.onChange(e, target);
          }}
        />
      );


      if (type === "select") {
        input = m.options.map(o => {
          //console.log("select: ", o.value, value);
          return (
            <option
              {...props}
              className="form-input"
              key={o.key}
              value={o.value}
            >
              {o.value}
            </option>
          );
        });

        //console.log("Select default: ", value);
        input = (
          <select
            value={value}
            onChange={e => {
              this.onChange(e, m.key);
            }}
          >
            {input}
          </select>
        );
      }


      return (
        <div key={"g" + key} className="form-group">
          <label className="form-label" key={"l" + key} htmlFor={key}>
            {m.label}
          </label>
          {input}
        </div>
      );
    });
    return formUI;
  };

  render() {
    let title = this.props.title || "Select a Role";

    return (
      <div className={this.props.className}>
        <h3 className="form-title">{title}</h3>
        <form className="dynamic-form">
          {this.renderForm()}
        </form>
      </div>
    );
  }
}
