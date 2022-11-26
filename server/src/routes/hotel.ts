import express from "express";
import { verifyAdmin } from "../utils/verifyToken";
import {
  countByCity,
  countByType,
  createHotel,
  deleteById,
  getAllHotel,
  getHotelRooms,
  getOneHotel,
  updateById,
  
} from "../controllers/hotel";
const router = express.Router();

//  get
router.get("/find/:id", getOneHotel);

// get all
router.get("/", getAllHotel);

// create
router.post("/"/* , verifyAdmin */, createHotel);

// put
router.put("/:id"/* , verifyAdmin */, updateById);

// delete
router.delete("/:id"/* , verifyAdmin */, deleteById);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

// query

export default router;
