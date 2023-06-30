import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Permission from '../models/permissionModel.js';
import UserPermission from '../models/userPermissionModel.js';


const protect = asyncHandler(async (req, res, next) => {
	let token;
	token = req.cookies.jwt;

	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET);

			req.user = await User.findById(decoded.userId).select('-password');

			const permission = await Permission.findOne({
				address: req.originalUrl,
				method: req.method,
			})

			const userPermission = await UserPermission.findOne({
				user: req.user.id,
				permission: permission.id,
			})

			if (userPermission === null) {
				res.status(401)
				throw new Error('No Permission')
			}

			next();

		} catch (error) {
			res.status(401);
			throw new Error(error);
		}
	} else {
		res.status(401);
		throw new Error('No Token');
	}
});

export { protect };
