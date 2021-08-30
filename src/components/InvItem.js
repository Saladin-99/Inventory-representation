import React from "react"
class InvItem extends React.Component
{

    render(){
        return <li className="items">{this.props.stock.name}</li>
    }

}
export default InvItem