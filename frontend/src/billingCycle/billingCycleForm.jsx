import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import labelAndInput from "../common/form/labelAndInput";

class BillinCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={labelAndInput}
            label="nome"
            cols="12 4"
            placeholder="Informe el nombre"
            type="text"
          />
          <Field
            name="month"
            component={labelAndInput}
            label="Mes"
            cols="12 4"
            placeholder="Informe el Mes"
            type="number"
          />
          <Field
            name="year"
            component={labelAndInput}
            label="ano"
            cols="12 4"
            placeholder="Informe el ano"
            type="number"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "billingCycleForm" })(BillinCycleForm);
