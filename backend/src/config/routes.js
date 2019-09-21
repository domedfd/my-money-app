const express = require("express");

module.exports = function(server) {
  // defirnir URL base para todoas a rotas
  const router = express.Router();
  server.use("/api", router);

  //Rotas de Ciclo de Pagamento
  const BillingCycle = require("../api/billingCycle");
  BillingCycle.register(router, "/billingCycles");
};