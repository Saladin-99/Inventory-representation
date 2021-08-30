import React from "react"
import InvItem from "./InvItem"
class InvList extends React.Component{

    render() {
        return (
          <ul>
            {this.props.stock.map(stock => (
              <InvItem key={stock.id} stock={stock}/>
            ))}
          </ul>
        )
      }

}
export default InvList