// Dependencies ---------------------------------------
const express = require("express");
const db = require("../models");

// Router ---------------------------------------------
const router = express.Router();

// Routes ---------------------------------------------

// GET route for getting all of the burgers
router.get("/", (req, res) => {
  db.Burger.findAll({})
    .then((dbBurger) => {
      console.log(dbBurger);
      res.render("index", dbBurger);
    });
});

// POST route for saving a new burger
router.post("/api/burgers", (req, res) => {
  console.log(req.body)
  db.Burger.create({
    burger_name: req.body.burger_name,
    devoured: req.body.devoured,
    // id: req.body.id
  })
    .then((dbBurger) => {
      res.json(dbBurger);
    });
});

// PUT route for updating burgers
router.put("/api/burgers", (req, res) => {
  db.Post.update(req.body.devoured,
    {
      where: {
        id: req.body.id
      }
    })
    .then((dbBurger) => {
      res.json(dbBurger);
    });
});

module.exports = router;
