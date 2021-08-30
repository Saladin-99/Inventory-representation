import React, { Component } from "react"

class InvInput extends Component {
  state = {
    name: "",
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render() {
    return (
        <form onSubmit={this.handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Add item..."
                value={this.state.name}
                name="name"
                onChange={this.onChange}
            />
            <button className="input-submit">Submit</button>
            </form>
             )
            }
          }
          export default InvInput
