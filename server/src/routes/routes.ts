import express from "express";
import {
  getHome,
  getActiveCustomers,
  getTransactionsBelow5000,
  getDistinctProducts,
  getTransactionsByAccountId,
} from "../controllers/user.controller";

const router = express.Router();

// Home route
router.get("/", getHome);

// Route to get active customers
router.get("/customers", getActiveCustomers);

// Route to get active customers
router.get("/transactions/:accountId", getTransactionsByAccountId);

// Route to get transactions below 5000
router.get("/transactionsbelow5000", getTransactionsBelow5000);

// Route to get distinct products
router.get("/products", getDistinctProducts);

export default router;
