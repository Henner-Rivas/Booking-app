import express from "express";
import {
  createUser,
  deleteById,
  getAllUser,
  getOneUser,
  updateById,
} from "../controllers/user";
import { verifyToken, verifyuser, verifyAdmin } from "../utils/verifyToken";
const router = express.Router();

//  get
/* router.get("/ckeckauthentication", verifyToken, (req, res, next) => {
  res.send("hello user you are autenticatited");
});
7;

router.get("/ckeckauthentication/:id", verifyuser, (req, res, next) => {
  res.send("hello user you are logged in and can delete you account");
});

router.get("/ckeckAdmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin you are logged in and can delete you account");
}); */
router.get("/:id", verifyuser, getOneUser);

// get all
router.get("/", verifyAdmin, getAllUser);

// create
router.post("/", verifyuser, createUser);

// put
router.put("/:id", verifyuser, updateById);

// delete
router.delete("/:id", verifyuser, deleteById);

export default router;
