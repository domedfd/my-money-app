import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./billingCycleActions";
import labelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";

class BillinCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
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
          <ItemList
            cols="12 6"
            list={credits}
            readOnly={readOnly}
            field="credits"
            legend="Creditos"
          />
          <ItemList
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            field="debts"
            legend="Debitos"
            showStatus={true}
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
const selector = formValueSelector("billingCycleForm");
const mapStateToProps = state => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts")
});
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillinCycleForm);
