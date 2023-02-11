import React from "react"

class CEO extends React.Component {
    constructor(props) {
      super(props);
      this.state = { balance : 1 };
    //   this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <p>${this.state.balance}</p>
          <form onSubmit={this.handleSubmit}>
            {/* <label htmlFor="new-todo">
              What needs to be done?
            </label> */}
            {/* <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            /> */}
            <button>
              Make $1!!!
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
    //   if (this.state.text.length === 0) {
    //     return;
    //   }
    //   const newItem = {
    //     text: this.state.text,
    //     id: Date.now()
    //   };
      this.setState(state => ({
        balance : state.balance + 1
      }));
    }
  }

 export default CEO
