const mongose = require("mongoose");

const Schemas = mongose.Schema;

const priceSchema = new Schemas({
    email: {
        type: Strng
    }
})

const pricing = new mongose.model("pricings", priceSchemas)

module.exports = pricng;
