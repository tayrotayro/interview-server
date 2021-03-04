var express = require("express");
var router = express.Router();
const { body, validationResult } = require("express-validator");

router.get("/api/hey", function (req, res) {
  res.send("API is working properly");
});

router.post("/api/mult", body("value").isNumeric(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.send({
      error: "Please enter a valid number!",
    });
  }
  const value = req.body.value;
  //   body("value").isNumeric();
  const value1 = value * 2;
  res.send({
    data: value1,
  });
});

module.exports = router;
