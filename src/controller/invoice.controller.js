const dbconnection = require('./../../database_connection/dbconn');

const customerInvoiceDetails = async (req, res) => {
  let query =
    "insert into customerinvoice(customerName,customerAddress,customerContact,deliveryperson,vehiclesNumber,invoiceDetails) values ('" +
    req.body.cusName +
    "','" +
    req.body.cusAdd +
    "','" +
    req.body.cusContact +
    "','" +
    req.body.deliveryPerson +
    "','" +
    req.body.vehicleNumber +
    "','" +
    JSON.stringify(req.body.invoiceDetails) +
    "')";
  dbconnection.query(query, function(error, results) {
    if (results) {
        res.send(results);
        console.log("inserted success");
    }
    else {
      console.log(error);
    }
  });
};

module.exports = { customerInvoiceDetails };
