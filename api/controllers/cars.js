const cm = require('../models/cars');

module.exports = {
  all: async (req, res, next) => {
    try {
      const cars = await cm.get();
      if (cars.length === 0) {
        res.status(404).json({ cars: cars });
      } else {
        res.status(200).json({ cars });
      }
    } catch (error) {
      res.status(501).json({ status: `Not implemented.` });
    }
  },

  one: async (req, res, next) => {
    let id = req.params.id;
    try {
      const car = await cm.get(id);
      if (!car) res.status(404);
      else res.status(200).json(car);
    } catch (error) {
      res.status(501).json({ status: `Not implemented.` });
    }
  },

  new: async (req, res, next) => {
    let car = req.body,
      length = Object.keys(car).length,
      { VIN, Make, Model, Mileage } = car;

    try {
      if (length === 0) res.status(400).json({ status: `Bad request.` });
      if ((length > 0 && !VIN) || !Make || !Model || !Mileage)
        res.status(400).json({
          status: `Missing required field.`,
        });
      const newCar = await cm.insert(car);
      if (newCar) res.status(201).json({ newCar: car });
    } catch (error) {
      res.status(501).json({ status: `Not implemented.` });
    }
  },

  delete: async (req, res, next) => {
    const { id } = req.params;
    try {
      const carDeleted = await cm.delete(id);

      if (!carDeleted) res.status(404).json({ status: `404 Not Found`, id });
      else res.status(200).json({ carDeleted });
    } catch (e) {
      res.status(501).json({ status: `Not implemented.` });
    }
  },

  update: async (req, res, next) => {
    const id = req.params.id,
      body = req.body;

    try {
      const carUpdated = await cm.update(id, body);
      if (!carUpdated) {
        res.status(404).json({
          status: `404 Not Found`,
          id,
        });
      } else {
        res.status(200).json({ carUpdated });
      }
    } catch (error) {
      res.status(501).json({ status: `Not implemented.` });
    }
  },
};
