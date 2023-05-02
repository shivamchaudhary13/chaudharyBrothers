const createProductService = async (error, results) => {
  let obj;
  if (results) {
    obj = {
      message: "products Added Successfully",
      code: 200,
    };
  } else {
    obj = {
      code: 404,
    };
  }
  return obj;
};

const deleteProductService = async(error, results) => {
    let message;
    if (results) {
        message = "Product Deleted Successfully";
      } else {
        message = "Error!";
      }
      return message;
}

module.exports = { createProductService,deleteProductService };
