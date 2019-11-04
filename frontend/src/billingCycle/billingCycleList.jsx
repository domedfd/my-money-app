import React, { Component } from "react";

class BillingCyclesList extends Component {
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

export default BillingCyclesList;
