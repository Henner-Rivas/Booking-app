import express from "express";
import { verifyAdmin } from "../utils/verifyToken";
import {
  createRoom,
  deleteById,
  getAllRoom,
  getOneRoom,
  updateById,
} from "../controllers/room";
const router = express.Router();

//  get
router.get("/:id", getOneRoom);

// get all
router.get("/", getAllRoom);

// create
router.post("/:hotelId", verifyAdmin, createRoom);

// put
router.put("/:id", verifyAdmin, updateById);

// delete
router.delete("/:id/:hotelId", verifyAdmin, deleteById);

export default router;
