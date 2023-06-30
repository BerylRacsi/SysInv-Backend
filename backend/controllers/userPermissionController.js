import asyncHandler from 'express-async-handler';
import UserPermission from '../models/userPermissionModel.js';

const getUserPermissions = asyncHandler(async (req, res) => {
    const userPermission = await UserPermission.find({})
    res.status(200).json(userPermission)
})

const setUserPermission = asyncHandler(async (req, res) => {
    const { user, permission } = req.body;

    if (!Array.isArray(req.body.permission)) {
        await UserPermission.create({
            user,
            permission,
        })
    } else {
        req.body.permission.forEach(async (permission) => {
            await UserPermission.create({
                user,
                permission,
            })
        })
    }

    res.status(200).json("Success")
})

const deleteUserPermission = asyncHandler(async (req, res) => {
    const userPermission = await UserPermission.findById(req.params.id)

    if (!userPermission) {
        res.status(400)
        throw new Error('User Permission not found')
    }

    await userPermission.deleteOne()

    res.status(200).json({ message: "Delete data success" ,id: req.params.id })
})

export {
    getUserPermissions,
    setUserPermission,
    deleteUserPermission,
};