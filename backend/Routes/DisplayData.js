const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) =>{
    try {
        res.send([global.food_items, global.food_category]);
       // console.log(global.food_items);
    } catch (error) {
        console.erroe (error.message);
        res.send("Server Error");
    }
});

module.exports = router;