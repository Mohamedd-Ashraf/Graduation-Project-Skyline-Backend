const express = require('express');
const flightController = require('./../controllers/FlightController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .get(flightController.getAllFlight)
  .post(
    '/',
    authController.protect,
    authController.restrictTo('admin'),
    flightController.CreateFlight,
  );

router
  .route('/:id')
  .get(flightController.getFlight)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    flightController.updateFlight
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    flightController.deleteFlight
  )