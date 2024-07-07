const express = require('express');
const router = express.Router();

router.post("/foodData", (req, res) => {
  
    try {
        // Send the global.food_items data as a response
        console.log('Fuck  :', global.food_items);
        res.send([global.food_items,global.foodCategory]);
        //res.send()
        //res.json({ success: true });
    } catch (err) {
        console.log(err);
        //res.json({ success: false });
    }
});

module.exports = router;
