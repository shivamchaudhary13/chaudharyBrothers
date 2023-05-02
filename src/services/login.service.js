const loginService = async (error, results) => {
  let result;
  let statusCode;
  if (!results.length) {
    result = "Invalid email and password";
    statusCode = 404;
  } else {
    result = results;
    statusCode = 200;
  }
  return { result, statusCode };
};

module.exports = { loginService };
