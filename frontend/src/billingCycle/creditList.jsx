import React, { Component } from "react";
import { Field } from "redux-form";
import Grid from "../common/layout/gird";

class CreditList extends Component {
  renderRows() {
    return (
      <tr>
        <td>
          <Field name="creditis[0].name" component="input" />
        </td>
        <td>
          <Field name="creditis[0].valor" component="input" />
        </td>
        <td></td>
      </tr>
    );
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Creditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Valor</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}
export default CreditList;
