import React, { Component } from "react";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Version 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value="Gs 10.000"
              text="Total de Creditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value="Gs 10.000"
              text="Total de Debitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value="Gs 0"
              text="Valor consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard;
