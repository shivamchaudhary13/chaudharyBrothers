const dbconnection = require('./../../database_connection/dbconn');
const Profile = async (req, res) => {
      console.log(req);
      // const query = "select * from envelope_business_db.user where email = '"+req+"'"
      // dbconnection.query(query,(err,results) => {
      //       console.log(results);
      // })
};

module.exports = { Profile };
