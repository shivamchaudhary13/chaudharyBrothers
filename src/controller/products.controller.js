const dbconnection = require("../../database_connection/dbconn");
const {
  createProductService,
  deleteProductService,
} = require("../services/products.service");

const addProducts = async (req, res) => {
  let body = {
    itemName: req.body.itemName,
    itemQuantity: req.body.itemQuantity,
    itemPrice: req.body.itemPrice,
  };
  let query =
    "insert into products(itemname,itemquantity,itemprice) values ('" +
    body.itemName +
    "','" +
    body.itemQuantity +
    "','" +
    body.itemPrice +
    "')";
  dbconnection.query(query, async (error, results) => {
    let createProductObj = await createProductService(error, results);
    res.send(createProductObj);
  });
};

const getProducts = async (req, res) => {
  let query = "select * from envelope_business_db.products";

  dbconnection.query(query, (error, results) => {
    res.send(results);
  });
};

const deleteProducts = async (req, res) => {
  let message;
  let query =
    "delete from envelope_business_db.products where productId = '" +
    req.params.id +
    "'";

  dbconnection.query(query, async (error, results) => {
    let deleteResult = await deleteProductService(error, results);
    res.send({ message: deleteResult });
  });
};

const updateProducts = async (req, res) => {
  let updateItem;
  let query1 = "select itemquantity from products where itemname = '" +req.params.name +"';";
  dbconnection.query(query1, (error, results) => {
    if(results) {
      results.forEach(element => {
        updateItem = element['itemquantity'];
      });
      let query =
    "update products set itemquantity = '" +(Number(updateItem) - Number(req.body.productquantity))+"' where itemname = '" +req.params.name +"';";
  dbconnection.query(query, (error, results) => {
    if(results) {
      console.log(results);
      res.send(results);
    }
    else {
      console.log(error);
    }
  });
    }
    else {
      console.log(error);
    }
  });
};


const updateItem = async (req, res) => {
  console.log(req.params.id);
  console.log(req.body.productquantity);
      let query =
    "update products set itemquantity = '" +Number(req.body.productquantity)+"',itemprice = '"+Number(req.body.productprice)+"' where productId = '" +req.params.id +"';";
  dbconnection.query(query, (error, results) => {
    if(results) {
      console.log(results);
      res.send(results);
    }
    else {
      console.log(error);
    }
  });
};
module.exports = { addProducts, getProducts, deleteProducts,updateProducts,updateItem };
