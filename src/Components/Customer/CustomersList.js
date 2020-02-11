import React from "react";
import Table from "react-bootstrap";
import CustomersAction from "./CustomersAction";

export default class CustomersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            config: {
                headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
            },
            customers: []
        }
    }

    render(){
        const{customers} = this.props;
        return (
            <div>
                <Table variant="dark">
                    <tbody>
                        {
                            customers.map((customers)=>{
                                return <CustomersAction key={customers._id} customers={customers}
                                handleDelete= {this.props.handleActionDelete}
                                handleEdit={this.handleEdit}/>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}