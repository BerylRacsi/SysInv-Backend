import mongoose from 'mongoose';

const itemSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		unit: {
			type: String,
			required: true,
		},
		impa: {
			type: Number,
			required: true,
			unique: true,
		},
	},
	{
		timestamps: true,
	}
);

const Item = mongoose.model('Item', itemSchema);

export default Item;