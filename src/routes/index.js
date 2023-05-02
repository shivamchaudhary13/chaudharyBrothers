let express = require("express");
const routers = express.Router();

const registerRoute = require('./register.route');
const loginRoute = require('./login.route');
const productsRoute = require('./products.route');
const profileRoute = require('./profile.route');
const invoiceRoute = require('./invoice.route');
const dashboardRoute = require('./dashboard.route');
const routes = [
  {
    path: "/auth",
    route: registerRoute,
  },
  {
    path: "/auth",
    route: loginRoute,
  },
  {
    path: "/products",
    route: productsRoute
  },
  {
    path: "/profile",
    route: profileRoute
  },
  {
    path: "/invoice",
    route: invoiceRoute
  },
  {
    path: "/dashboard",
    route: dashboardRoute
  }
];

routes.forEach((route) => {
  routers.use(route.path, route.route);
});

module.exports = routers;
