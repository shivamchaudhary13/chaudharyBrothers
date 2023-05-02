let  mysql = require("mysql");

let conn = mysql.createConnection({
    host: "localhost",user: "root",password: "Shiv@y799",database: "envelope_business_db"
});
if(conn) console.log("connected sucessfully");

module.exports = conn;