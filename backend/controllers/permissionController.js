import asyncHandler from 'express-async-handler';
import Permission from '../models/permissionModel.js';

const getPermissions = asyncHandler(async (req, res) => {
    const permissions = await Permission.find({})
    res.status(200).json(permissions)
})

const setPermission = asyncHandler(async (req, res) => {
    const { address, method } = req.body;

    const permission = await Permission.create({
        address,
        method,
    })

    res.status(200).json(permission)
})

const updatePermission = asyncHandler(async (req, res) => {
    const permission = await Permission.findById(req.params.id)

    if (!permission) {
        res.status(400)
        throw new Error('Permission not found')
    }

    const updatedPermission = await Permission.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedPermission)
})

const deletePermission = asyncHandler(async (req, res) => {
    const permission = await Permission.findById(req.params.id)

    if (!permission) {
        res.status(400)
        throw new Error('Permission not found')
    }

    await permission.deleteOne()

    res.status(200).json({ message: "Delete data success", id: req.params.id })
})

export {
    getPermissions,
    setPermission,
    updatePermission,
    deletePermission,
};