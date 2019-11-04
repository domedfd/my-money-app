import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList } from "./billingCycleActions";

class BillingCyclesList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Mes</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state.billingCycle.list });
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList }, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCyclesList);
