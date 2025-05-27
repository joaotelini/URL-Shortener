import express from "express";
import {
  getUrlController,
  createUrlController,
} from "../controller/urlController.js";

const router = express.Router();

router.get("/:shortId", getUrlController);
router.post("/", createUrlController);

export default router;
