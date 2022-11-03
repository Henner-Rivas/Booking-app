import express from "express";
import { verifyAdmin } from "../utils/verifyToken";
import {
  createHotel,
  deleteById,
  getAllHotel,
  getOneHotel,
  updateById,
} from "../controllers/hotel";
const router = express.Router();

//  get
router.get("/:id", getOneHotel);

// get all
router.get("/", getAllHotel);

// create
router.post("/", verifyAdmin, createHotel);

// put
router.put("/:id", verifyAdmin, updateById);

// delete
router.delete("/:id", verifyAdmin, deleteById);

export default router;
