import express from "express";
import Hotel from "../models/Hotel";

const router = express.Router();

//  get
router.get("/:id", async (req, res) => {
  try {
    const findOne = await Hotel.findById(req.params.id);

    res.status(200).json(findOne);
  } catch (error) {
    res.status(500).json(error);
  }
});

// get all
router.get("/", async (_req, res) => {
  try {
    const getAll = await Hotel.find();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(500).json(error);
  }
});

// create
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// put
router.put("/:id", async (req, res) => {
  try {
    const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id, {});

    res.status(200).json("hotel has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
