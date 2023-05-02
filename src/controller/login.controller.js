const { loginService } = require("../services/login.service");
const dbconnection = require("./../../database_connection/dbconn");
const login = async (req, res) => {
  let query =
    "select * from user where email = '" +
    req.body.email +
    "' && password = '" +
    req.body.password +
    "'";
  dbconnection.query(query, async (error, results) => {
    let loginResult = await loginService(error, results);
    res.send({ res: loginResult.result, code: loginResult.statusCode });
  });
};

module.exports = { login };
