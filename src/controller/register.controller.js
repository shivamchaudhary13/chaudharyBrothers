const dbconnection = require("./../../database_connection/dbconn");
const { registerService } = require("./../services/register.service");
const register = async (req, res) => {
  let query =
    "insert into user(firstname,lastname,email,mobileNumber,password) values('" +
    req.body.firstname +
    "','" +
    req.body.lastname +
    "','" +
    req.body.email +
    "','" +
    req.body.mobile_number +
    "','" +
    req.body.password +
    "')";
  dbconnection.query(query, async (error, results) =>  {
    const statusCode = await registerService(results,error);
    res.send({ code: statusCode });
  });
};

module.exports = { register };
