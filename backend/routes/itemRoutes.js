import express from 'express';
import {
    getItems,
    setItem,
    updateItem,
    deleteItem,
} from '../controllers/itemController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
    .route('/')
    .get(protect, getItems)
    .post(protect, setItem);
router
    .route('/:id')
    .put(protect, updateItem)
    .delete(protect, deleteItem);

export default router;