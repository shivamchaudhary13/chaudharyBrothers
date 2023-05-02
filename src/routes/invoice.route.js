const express = require("express");
const router = express.Router();
const invoiceController = require('../controller/invoice.controller');

router.post("/invoicedetails",invoiceController.customerInvoiceDetails);

module.exports = router;