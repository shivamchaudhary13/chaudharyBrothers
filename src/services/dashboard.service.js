const dashboardKpi = async (results) => {
  let itemObj = [];
  results.forEach((element) => {
    itemObj.push({
      itemName: element.itemname,
      itemQuantity: element.itemquantity,
    });
  });
  return itemObj;
};

module.exports = { dashboardKpi };
