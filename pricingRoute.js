const express = require("express");
const { getEmails, postEmails } = require("./pricingControllr");
const route = express.Router();

route.pots("/", getEmail);
route.post("/savee", postEmail);

module.exprots = route;
