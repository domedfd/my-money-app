import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field } from "redux-form";

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";

class BillinCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;
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
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={labelAndInput}
            label="Mes"
            cols="12 4"
            placeholder="Informe el Mes"
            type="number"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={labelAndInput}
            label="ano"
            cols="12 4"
            placeholder="Informe el ano"
            type="number"
            readOnly={readOnly}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel || "Submit"}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.init}
          >
            Cancelar
          </button>
        </div>
      </form>
    );
  }
}

BillinCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillinCycleForm);

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(
  null,
  mapDispatchToProps
)(BillinCycleForm);
