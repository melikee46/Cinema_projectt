const express = require("express");
const router = express.Router();

// controller import
const movieController = require("../controllers/movie.controller");

// CREATE
router.post("/movies", movieController.createMovie);

// READ
router.get("/movies", movieController.getMovies);

// 🔥 DELETE
router.delete("/movies/:id", movieController.deleteMovie);

// 🔥 UPDATE
router.put("/movies/:id", movieController.updateMovie);

module.exports = router;