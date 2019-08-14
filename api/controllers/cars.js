const cm = require("../models/cars");

module.exports = {
  all: async (req, res, next) => {
    try {
      const cars = await cm.get();

      if (cars.length === 0) {
        res.status(404).json({
          status: 404,
          message: `There are no cars.`,
          cars
        });
      } else {
        res.status(200).json({
          status: 200,
          cars
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: `Cars could not be retrieved.`
      });
    }
  },

  one: async (req, res, next) => {
    let id = req.params.id;
    try {
      const car = await cm.get(id);
      if (!car) res.status(404);
      else res.status(200).json(car);
    } catch (error) {
      res.status(501).json({ status: `Not Implemented.` });
    }
  }
};
