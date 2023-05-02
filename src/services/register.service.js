const registerService = async(results,error) => {
    let statusCode;
    if (results){
        statusCode = 200;
        console.log('inserted successfully');
      }
      else{
        statusCode = 404
        console.log(error);
      }
      return statusCode;
}
module.exports = {registerService};