import React from "react";
import Button from "react-bootstrap";

export default class CustomersAction extends React.Component {
    render() {
        const { customers } = this.props;
        return (
            <tr>
                <td>
                    <Button size="sm" color="warning" onClick={() => this.props.handleEdit(customers._id)}>Update</Button>
                </td>
                <td>
                    <Button size="sm" color="danger" onClick={() => this.props.handleDelete(customers._id)}>Delete</Button>
                </td>
            </tr>
        )
    }
}