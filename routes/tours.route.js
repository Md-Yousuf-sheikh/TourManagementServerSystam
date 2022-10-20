const express = require("express");
const router = express.Router();
const tourRouter = require("../controller/tour.controller");

// get route
router.route("/").get(tourRouter.getTours).post(tourRouter.saveATour);

// Trending and Cheapest
router.route("/trending").get(tourRouter.getTrending);
router.route("/cheapest").get(tourRouter.getCheapest);

// only id
router
  .route("/:id")
  .get(tourRouter.getTourById)
  .patch(tourRouter.updateTourById);

module.exports = router;
