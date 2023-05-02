const { dashboardKpi } = require("../services/dashboard.service");
const dbconnection = require("./../../database_connection/dbconn");
const dashboard = async (req, res) => {
  let query = "select * from products";

  dbconnection.query(query, async (error, results) => {
    if (results) {
      let itemObject = await dashboardKpi(results);
      res.send({ results: itemObject });
    } else {
      res.send({ message: error });
    }
  });
};

module.exports = { dashboard };
