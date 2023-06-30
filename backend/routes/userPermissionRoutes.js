import express from 'express';
import {
    getUserPermissions,
    setUserPermission,
    deleteUserPermission,
} from '../controllers/userPermissionController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router
    .route('/')
    .get(protect, getUserPermissions)
    .post(protect, setUserPermission);
router
    .route('/:id')
    .delete(protect, deleteUserPermission);

export default router;