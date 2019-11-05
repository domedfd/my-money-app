import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import Grid from "../common/layout/gird";
import Input from "../common/form/input";

class CreditList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      console.log(index);
      this.props.arrayInsert("billingCycleForm", "credits", index, item);
    }
  }

  remove(index) {
    console.log("clicou no remove");

    if (!this.props.readOnly && this.props.list.length > 1) {
      console.log("Eliminou o index: " + index);
      this.props.arrayRemove("billingCycleForm", "credits", index);
    }
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`credits[${index}].name`}
            component={Input}
            placeholder="Informe el nombre"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`credits[${index}].value`}
            component={Input}
            placeholder="Informe el valor"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.add(index + 1)}
          >
            <i className="fa fa-plus"></i>
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.add(index + 1, item)}
          >
            <i className="fa fa-clone"></i>
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.remove(index)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
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
                <th className="table-actions">Acciones</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(CreditList);
