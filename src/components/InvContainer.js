import React from "react"
import InvList from "./InvList";
import Header from "./Header"
import InvInput from "./InvInput"
class InvContainer extends React.Component {
    state = {
        stock: [
          {
            id: 1,
            name: "Chair",
            instock: true
          },
          {
            id: 2,
            name: "Table",
            instock: false
          },
          {
            id: 3,
            name: "Bed",
            instock: false
          }
        ]
       };
  
       render() {
        return (
          <div>
              <Header />
              <InvInput />
            <InvList stock={this.state.stock}/>
          </div>
        );
      }
}
export default InvContainer