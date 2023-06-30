import mongoose from 'mongoose';

const permissionSchema = mongoose.Schema(
	{
		address: {
			type: String,
			required: true,
		},
		method: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Permission = mongoose.model('Permission', permissionSchema);

export default Permission;