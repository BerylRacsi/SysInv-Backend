import mongoose from 'mongoose';

const userPermissionSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        permission: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Permission',
        },
    },
    {
        timestamps: true,
    }
);

const UserPermission = mongoose.model('UserPermission', userPermissionSchema);

export default UserPermission;