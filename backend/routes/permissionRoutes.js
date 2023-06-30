import express from 'express';
import {
    getPermissions,
    setPermission,
    updatePermission,
    deletePermission,
} from '../controllers/permissionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
    .route('/')
    .get(protect, getPermissions)
    .post(protect, setPermission);
router
    .route('/:id')
    .put(protect, updatePermission)
    .delete(protect, deletePermission);

export default router;